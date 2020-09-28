import express from 'express'
import https from 'https'
import * as fs from 'fs'
import morgan from 'morgan'


/* Setup Server*/
const app = express()


/* Middleware */
app.use(morgan('combined'))


/* Define endpoints */
app.get('/', (req, res) => {
	res.send({
		message: 'Hello World!'
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