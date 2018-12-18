import axios from 'axios'
import { AUTH_USER, AUTH_ERR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data  })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (err){
    dispatch({ type: AUTH_ERR, payload: err.response.data})
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps)
    dispatch({ type: AUTH_USER, payload: response.data  })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (err){
    dispatch({ type: AUTH_ERR, payload: err.response.data})
  }
}


export const signout = () => {
  localStorage.removeItem('token')
  return { type: AUTH_USER, payload: ''}
}
