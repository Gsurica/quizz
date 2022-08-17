import questions from "../questionsBank"

export default function handler(req, res) {
  const id = +req.query.id
  const selectedQuestion = questions.filter(question => question.id === id)

  if (selectedQuestion.length === 1) {
    const question = selectedQuestion[0].shuffleAnswers()
    res.status(200).json(question.toLiteralObject())
  } else {
    res.status(204).send()
  }

}
