import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css"

interface QuestionsProps {
  value: QuestionModel
}

export default function Question (props: QuestionsProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <h1>Question</h1>
    </div>
  )
}
