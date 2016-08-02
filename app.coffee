express = require 'express'
request = require 'request'
bodyParser = require 'body-parser'
ejs = require('ejs')
fs = require('fs');
nconf = require('nconf');

#Get Config Driven Data
nconf.argv().env().file { file: './config.json' }
#val = nconf.get 'key'

app = express()
app.engine 'html', ejs.renderFile
app.use express.static('public')
app.use bodyParser.json()

# Fetch index page
app.get '/', (req, res) ->
	res.render 'index.html'


app.listen 3000, () ->
	console.log 'Server Started'