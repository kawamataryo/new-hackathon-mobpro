import * as functions from 'firebase-functions'

//
// # request
// {
//   "language_name": "js",
//   "task_name": "sort",
//   "code": "コードがそのまま入っている"
// }
//
// # response
// {
//   "result": "ok"
// }
//
export const submitAnswer = functions.https.onCall((data, context) => {
  const languageName = data.language_name
  const taskName = data.task_name
  const code = data.code

  const execResult = execAnswer(languageName, taskName, code)
  return {
    result: execResult ? 'ok' : 'ng'
  }
})

function execAnswer(languageName: string, taskName: string, code: string): boolean {
  console.log(`language: ${languageName}`)
  console.log(`taskName: ${taskName}`)
  console.log(`code: ${code}`)

  return true
}
