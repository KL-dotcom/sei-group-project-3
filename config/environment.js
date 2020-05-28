require('dotenv').config()

const dbURI = process.env.DB_URI
const port = process.env.PORT
const secret = process.env.SECRET


module.exports = {
  dbURI,
  port,
  secret
}



