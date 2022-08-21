import { CountdownCircleTimer } from "../node_modules/react-countdown-circle-timer/lib/index"
import styles from "../styles/Timer.module.css"

interface TimerProps {
  duration: number
  timeout: () => void
  key: any
}

export default function Timer (props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeout}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>

    </div>
  )
}
