import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a doença de chagas?", [
    AnswerModel.wrong("Abelha"),
    AnswerModel.wrong("Barata"),
    AnswerModel.wrong("Pulga"),
    AnswerModel.right("Barbeiro"),
  ]),
  new QuestionModel(202, "Qual fruto é conhecido no Norte do Nordeste como 'Jerimum'?", [
    AnswerModel.wrong("Caju"),
    AnswerModel.wrong("Côco"),
    AnswerModel.wrong("Chuchu"),
    AnswerModel.right("Abóbora"),
  ]),
  new QuestionModel(203, "Qual é o coletivo de cães?", [
    AnswerModel.wrong("Manada"),
    AnswerModel.wrong("Alcateia"),
    AnswerModel.wrong("Rebanho"),
    AnswerModel.right("Matilha"),
  ]),
  new QuestionModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
    AnswerModel.wrong("Caju"),
    AnswerModel.wrong("Côco"),
    AnswerModel.wrong("Chuchu"),
    AnswerModel.right("Abóbora"),
  ]),
]

export default questions
