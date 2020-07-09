const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const commentSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'field required'] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const messageSchema = new mongoose.Schema({

  sender: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comment: [commentSchema]
}, {
  timestamps: true
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, 'field required'], unique: true, maxlength: 50, uniqueCaseInsensitive: true },
  name: { type: String, required: [true, 'field required'] },
  email: {
    type: String, required: [true, 'field required'], unique: true, uniqueCaseInsensitive: true
  },
  password: { type: String, required: [true, 'field required'] },
  homeBase: { type: String, required: [true, 'field required'] },
  profilePhoto: [{ type: String }],
  tripPrefs: [{ type: String, required: [true, 'field required'] }],
  garage: { type: String },
  dreamTrips: { type: String },
  recentTrips: [{ type: String }]
  // message: [messageSchema]
})

userSchema
  .set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      return json
    }
  })



userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'passwords do not match')
    }
    next()
  })

userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.plugin(require('mongoose-unique-validator'), { message: '{PATH} is already in use' })

module.exports = {

  User: mongoose.model('User', userSchema),
  Message: mongoose.model('Message', messageSchema)
}

