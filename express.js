const express = require('express')
const querystring = require('querystring')
const fs = require('fs')

const app = express() //creates a server

function respondText (req, res) {
	res.setHeader('Content-Type', 'text/plain')
	res.end('hi')
}

function respondJson (req, res) {
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }))
}

function respondNotFound (req, res) {
	res.writeHead(404, { 'Content-Type': 'text/plain' })
	res.end('Not Found') // function that returns to the user
}

function respondEcho (req, res) {
	const {input = ''} = querystring.parse(
		req.url.split('?')
		.slice(1)
		.join('')
	)
	res.setHeader('Content-Type', 'application/json') // setting header type to allow to send json data
	res.end(
		JSON.stringify({
			normal: input,
			shouty: input.toUpperCase(),
			characterCount: input.length,
			backwards: input.split('').reverse().join('')
		})
	)
}

/*
* Creates a Stream Object representing our chosen file
* then use pipe method to connect it to the response object
* This loads data from the file system and sends it to the client via the response
* object
*/
function respondStatic (req, res) {
	const filename = `${__dirname}/public${req.url.split('/static')[1]}`
	fs.createReadStream(filename)
		.on('error', () => respondNotFound(req, res))
		.pipe(res)
}

const port = 3000

app.get('/', respondText)
app.get('/json', respondJson)
app.get('/echo', respondEcho)
app.get('/static/*', respondStatic)

app.listen(port, () => console.log(`Server listening on port ${port}`))