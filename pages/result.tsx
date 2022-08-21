import { useRouter } from "next/router"
import Button from "../components/Button"
import Statistics from "../components/Statistics"
import styles from "../styles/Result.module.css"

export default function Result () {

  const router = useRouter()

  const total = +router.query.total
  const rightQuestions = +router.query.right
  const per = Math.round((rightQuestions / total) * 100)

  return (
    <div className={styles.result}>
      <h1>Resultado final!</h1>
      <div style={{display: "flex"}}>
        <Statistics
          text={`Perguntas`}
          value={total}
        />
        <Statistics
          text={`Certas`}
          value={rightQuestions}
          backgroundColor="#9cd2a4"
        />
        <Statistics
          text={`Percentual`}
          value={per}
          backgroundColor="#de6a36"
        />
      </div>
      <Button href="/" text="Tentar novamente!" />
    </div>
  )
}

