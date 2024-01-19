const mongoose = require('mongoose')

const githubSchema = new mongoose.Schema({
  RepositoryName: {
    type: String,
    trim: true,
  },
  Description: {
    type: String,
    trim: true,
  },
  Topics: {
    type: String,
    trim: true,
  },
})

const Github = mongoose.model('github', githubSchema)

module.exports = Github
