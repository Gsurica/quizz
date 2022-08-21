import styles from "../styles/Statistics.module.css"

interface StatisticsProps {
  value: any
  text: string
  backgroundColor?: string
  fontColor?: string
}


export default function Statistics (props: StatisticsProps) {
  return (
    <div className={styles.statistics}>
      <div className={styles.value}
        style={{
          backgroundColor: props.backgroundColor ?? "#FDD60F",
          color: props.fontColor ?? "#333"
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}
