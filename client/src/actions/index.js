import axios from 'axios'
import { AUTH_USER, AUTH_ERR } from './types'

export const signup = formProps => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token  })
  } catch (err){
    dispatch({ type: AUTH_ERR, payload: err.response.data})
  }
}
