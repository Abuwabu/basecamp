import express from 'express'
import morgan from 'morgan'


/* Setup Server*/
const app = express()


/* Middleware */
app.use(morgan('combined'))


/* Define endpoints */
app.get('/status', (req, res) => {
	res.send({
		message: 'Hello World!'
	})
})


/* Run server */
app.listen(process.env.VUE_APP_PORT || 8081)