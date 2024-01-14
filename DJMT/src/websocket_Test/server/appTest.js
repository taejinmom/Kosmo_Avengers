import postgres from 'postgres'

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())

console.log('db .. >> ', process.env.DB)

module.exports = appTest
