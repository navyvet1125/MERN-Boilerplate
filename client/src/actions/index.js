import axios from 'axios'
import { AUTH_USER, AUTH_ERR, SAVE_COMMENT, FETCH_COMMENTS, FETCH_ERR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data  })
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('email', response.data.email)
    callback()
  } catch (err){
    dispatch({ type: AUTH_ERR, payload: err.response.data})
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps)
    dispatch({ type: AUTH_USER, payload: response.data  })
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (err){
    dispatch({ type: AUTH_ERR, payload: err.response.data})
  }
}


export const signout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  return { type: AUTH_USER, payload: ''}
}

export function saveComment(comment){
	return {
		type: SAVE_COMMENT,
		payload: comment
	};
}

export const fetchComments = (callback) => async dispatch => {
  try {
	   const response = await axios.get('http://jsonplaceholder.typicode.com/users')
     dispatch({ type: FETCH_COMMENTS, payload: response  })
   } catch (err){
     dispatch({ type: FETCH_ERR, payload: err.message})
   }

}
