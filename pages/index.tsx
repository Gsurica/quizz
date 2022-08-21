import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";
import { useState, useEffect } from "react";
import Questionnaire from "../components/Questionnaire";
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    questionsIdsLoading()
  }, [])

  const questionMock = new QuestionModel(1, "Melhor cor?", [
    AnswerModel.wrong("Verde"),
    AnswerModel.wrong("Vermelho"),
    AnswerModel.wrong("Azul"),
    AnswerModel.right("Preto"),
  ])

  const [question, setQuestion] = useState<QuestionModel>(questionMock)
  const [questionIds, setQuestionIds] = useState<number[]>([])
  const [rightQuestions, setRightQuestions] = useState<number>(0)

  useEffect(() => {
    questionIds.length > 0 && loadingQuestion(questionIds[0])
  }, [questionIds])

  const BASE_URL = "http://localhost:3000/api"

  async function questionsIdsLoading () {
    const response = await fetch(`${BASE_URL}/questionnaire`)
    const questionIds = await response.json()
    setQuestionIds(questionIds)
  }

  function questionResponse (question: QuestionModel) {
    setQuestion(question)
    const rightQuestion = question.rightAnswer
    setRightQuestions(rightQuestions + (rightQuestion ? 1 : 0))
  }

  function nextQuestionId (): number {
    if (question) {
      const nextId = questionIds.indexOf(question.id) + 1
      return questionIds[nextId]
    }
  }

  function nextStep () {
    const nextId = nextQuestionId()
    nextId ? nextQuestion(nextId) : finishQuiz()
  }

  function nextQuestion (nextId: number) {
    loadingQuestion(nextId)
  }

  function finishQuiz () {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        right: rightQuestions
      }
    })
  }

  async function loadingQuestion (id: number) {
    const response = await fetch(`${BASE_URL}/questions/${id}`)
    const question = await response.json()
    const newQuestion = QuestionModel.fromObject(question)
    setQuestion(newQuestion)
  }

  return (
    <div>
      { question ?
        <Questionnaire
          question={question}
          lastQuestion={nextQuestionId() === undefined}
          questionResponse={questionResponse}
          nextStep={nextStep}
        />

        : false

      }
    </div>
  )
}
