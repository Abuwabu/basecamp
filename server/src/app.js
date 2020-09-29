import express from 'express'
import https from 'https'
import * as fs from 'fs'
import morgan from 'morgan'
import cors from 'cors'


/* Setup Server*/
const app = express()


/* Middleware */
app.use(morgan('combined'))
app.use(cors())


/* Define endpoints */
app.get('/auth', (req, res) => {
  res.send({
    message: 'Let\'s do this'
  })
})


/* Run server */
const sslOptions = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.crt')
}

https
  .createServer(sslOptions, app)
  .listen(process.env.VUE_APP_PORT || 8081)