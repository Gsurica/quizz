import QuestionModel from "../model/question"
import styles from "../styles/Questionnarie.module.css"
import Button from "./Button"
import Question from "./Question"

interface QuestionnaireProps {
  question: QuestionModel
  lastQuestion: boolean
  questionResponse: (question: QuestionModel) => void
  nextStep: () => void
}

export default function Questionnaire (props: QuestionnaireProps) {

  function questionResponse (index: number) {
    if (props.question.NotRightAnswer) {
      props.questionResponse(props.question.rightQuestion(index))
    }
  }

  return (
    <div className={styles.questionnaire}>
      { props.question ?
        <Question
          value={props.question}
          timeForResponse={6}
          onResponse={questionResponse}
          timeOut={props.nextStep}
          />
        : false
      }
      <Button
        onClick={props.nextStep}
        text={props.lastQuestion ? "Finalizar" : "Próxima"}
      />
    </div>
  )
}
