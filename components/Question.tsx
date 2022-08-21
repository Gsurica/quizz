import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css"
import Answer from "./Answer";
import QuestionText from "./QuestionText";
import Timer from "./Timer";

const letters = [
  { value: "A", color: "#F2C866" },
  { value: "B", color: "#F266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
]

interface QuestionsProps {
  value: QuestionModel
  onResponse: (index: number) => void
  timeOut: () => void
  timeForResponse?: number
}

export default function Question (props: QuestionsProps) {
  const question = props.value

  function answerRender () {
    return question.answer.map((answer, i) => {
      return <Answer
            value={answer}
            index={i}
            letter={letters[i].value}
            letterBackgroundColor={letters[i].color}
            key={`${question.id}${i}`}
            onResponse={props.onResponse}
        />
    })
  }

  return (
    <div className={styles.question}>
      <QuestionText text={question.question} />
      <Timer key={question.id} duration={props.timeForResponse ?? 10} timeout={props.timeOut} />
      {answerRender()}
    </div>
  )
}
