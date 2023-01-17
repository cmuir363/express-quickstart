import express from "express"

const router = express.Router()

const helloHtml: string = `
  <div>
    <h1>Hello World!!</h1>
  </div>
`

router.post('/', (req, res) => {
  res.send(helloHtml)
});

export default router