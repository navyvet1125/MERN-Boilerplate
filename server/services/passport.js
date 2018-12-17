const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
// Create local Strategy

const localOptions = { usernameField: 'email', }
const localLogin = new LocalStrategy(localOptions, (email, password, done) =>{
	// Verify email and password
	
	// Ternary operator to check if user exists and password matches hash
	User.findOne({email})
	.then(user => user && bcrypt.compareSync(password, user.password)? done(null, user): done(null, false))
	.catch( err => done(err))
})

// Setup options for JWT Strategy
const jwtOptions ={
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
}

// Create JWT Strategy, check and see if user exists, returns user or null
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	User.findById(payload.sub)
	.then( user => user? done(null, user): done(null, false)) 
	.catch( err => done(err, false))  
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)