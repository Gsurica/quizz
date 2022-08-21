import QuestionModel from "./question"

export default class AnswerModel {

  #value: string
  #rightAnswer: boolean
  #showed: boolean

  constructor(value: string, rightAnswer: boolean, showed: boolean = false) {

    this.#rightAnswer = rightAnswer
    this.#value = value
    this.#showed = showed

  }

  static right (valueQuestion: string) {
    return new AnswerModel(valueQuestion, true)
  }

  static wrong (valueQuestion: string ) {
    return new AnswerModel(valueQuestion, false)
  }

  get value () {
    return this.#value
  }

  get rightAnswer () {
    return this.#rightAnswer
  }

  get showed () {
    return this.#showed
  }

  show () {
    return new AnswerModel(this.#value, this.#rightAnswer, true)
  }

  static fromObject (model: AnswerModel): AnswerModel {
    return new AnswerModel(model.value, model.rightAnswer)
  }

  toLiteralObject () {
    return {
      value: this.#value,
      rightAnswer: this.#rightAnswer,
      showed: this.#showed,
    }
  }

}
