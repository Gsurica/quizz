import questions from "../questionsBank"
import { shuffle } from "../../../functions/arrays"

export default function questionary (req, res) {

  const ids = questions.map(question => question.id)
  res.status(200).json(shuffle(ids))

}
