const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

// Define our model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true, required: true },
	password: String
})
// On save hook, encrypt password

userSchema.pre('save', function(next) {
	const user = this
	const salt = bcrypt.genSaltSync(10)
	const hash = bcrypt.hashSync(user.password, salt)
	user.password = hash
	next()
})

userSchema.methods.comparePasswordSync = function(candidatePassword){
	return bcrypt.compareSync(candidatePassword, this.password)
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass