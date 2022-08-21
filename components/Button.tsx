import styles from "../styles/Button.module.css"
import Link from "next/link"

interface ButtonProps {
  href?: string
  text: string
  onClick?: (e: any) => void
}

export default function Button (props: ButtonProps) {

  function buttonRender () {
    return (
      <button className={styles.button}
          onClick={props.onClick}
        >
          {props.text}
      </button>
    )
  }

  return props.href ? (
    <Link href={props.href}>
      {buttonRender()}
    </Link>
  ) : buttonRender()
}
