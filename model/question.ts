import { shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #question: string
  #answer: AnswerModel[]
  #rightAnswer: boolean

  constructor(id: number, question: string, answer: any[], rightAnswer: boolean = false) {

    this.#id = id
    this.#question = question
    this.#answer = answer
    this.#rightAnswer = rightAnswer

  }

  get id () {
    return this.#id
  }

  get question () {
    return this.#question
  }

  get answer () {
    return this.#answer
  }

  get rightAnswer () {
    return this.#rightAnswer
  }

  get NotRightAnswer () {
    return !this.#rightAnswer
  }

  get questionAnswered () {
    for (let answer of this.#answer) {
      if (answer.showed) return true
    }
    return false
  }

  rightQuestion (index: number): QuestionModel {
    const rightAnswer = this.#answer[index]?.rightAnswer
    const questions = this.#answer.map((res, i) => {
      const selectedAnswer = index === i
      const canReveal = selectedAnswer || res.rightAnswer
      return canReveal ? res.show() : res
    })
    return new QuestionModel(this.#id, this.#question, questions, rightAnswer)
  }

  shuffleAnswers (): QuestionModel {
    let shuffleQuestions = shuffle(this.#answer)
    return new QuestionModel(this.#id, this.#question, shuffleQuestions, this.#rightAnswer)
  }

  static fromObject (model: QuestionModel): QuestionModel {
    const answers = model.answer.map(res => AnswerModel.fromObject(res))
    return new QuestionModel(model.id, model.question, answers)
  }

  toLiteralObject () {
    return {
      id: this.#id,
      question: this.#question,
      answer: this.#answer.map(res => res.toLiteralObject()),
      rightAnswer: this.#rightAnswer
    }
  }

}
