import * as functions from 'firebase-functions'

//
// # request (application/x-www-form-urlencoded)
// - "language_name": "js",
// - "task_name": "sort",
// - "answer": "コードがそのまま入っている"
//
// # response
// {
//   "result": "ok"
// }
//
export const submitAnswer = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    response.status(405).end()
  }
  const requestData = request.body
  const languageName = requestData.language_name
  const taskName = requestData.task_name
  const code = requestData.answer

  const execResult = execAnswer(languageName, taskName, code)
  const result = {
    result: execResult ? 'ok' : 'ng'
  }

  response.status(201).json(result)
})

function execAnswer(languageName: string, taskName: string, code: string): boolean {
  console.log(`language: ${languageName}`)
  console.log(`taskName: ${taskName}`)
  console.log(`code: ${code}`)

  return true
}
