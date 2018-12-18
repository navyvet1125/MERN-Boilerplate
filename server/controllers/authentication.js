const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('../config')

// Function for generating a signed token with sub and iat
const tokenForUser = user => jwt.sign({ sub: user.id, iat: new Date().getTime() }, config.secret)

exports.signin = (req,res,next) => {
	// User is auth'd
	// Give 'em a token
	res.status(200).json({email: req.user.email, token: tokenForUser(req.user)})
}

exports.signup = (req, res, next) => {
	const email = req.body.email
	const password = req.body.password

	// See if a user with the given email already exists
	// If user already exists, send an error, else create a new user
	// Error handling
	User.findOne({email})
	.then( existingUser => existingUser? res.status(422).send('Email is in use' ): new User({email, password}).save())
	.then( user => res.status(200).json({email, token: tokenForUser(user)}))
	.catch( err => res.status(500).send('An error has occured.  Please wait a few minutes and try again'))

}
