import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

export default function Home() {

  const questiontest = new QuestionModel(1, "Melhor cor?", [
    AnswerModel.wrong("Verde"),
    AnswerModel.wrong("Vermelho"),
    AnswerModel.wrong("Azul"),
    AnswerModel.right("Preto"),
  ])

  return (
    <Question value={questiontest} />
  )
}
