import express from "express"
import 'dotenv/config'


const app = express()
const port = process.env.PORT

import indexRouter from "./routes/index"
import sayHelloRouter from "./routes/sayHello"

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter)
app.use('/say-hello', sayHelloRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})