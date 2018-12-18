import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import commentsReducer from './comments'

export default combineReducers({
  auth,
  comments: commentsReducer,
  form: formReducer
})
