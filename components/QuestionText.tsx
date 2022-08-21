import styles from "../styles/QuestionText.module.css"

interface QuestiontextProps {
  text: string
}

export default function QuestionText (props: QuestiontextProps) {
  return (
    <div className={styles.questiontext}>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}
