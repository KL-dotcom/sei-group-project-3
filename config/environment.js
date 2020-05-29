

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/sei-group-project-3-db'
const port = process.env.PORT || 8000
const secret = process.env.SECRET || 'this is the secret'


module.exports = {
  dbURI,
  port,
  secret
}



