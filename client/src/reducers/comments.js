import { SAVE_COMMENT, FETCH_COMMENTS, FETCH_ERR } from '../actions/types';

export default function(state = [], action) 	{
	switch(action.type){
		case SAVE_COMMENT:
			return [...state, action.payload]
		case FETCH_COMMENTS:
      console.log(action.payload)
			const comments = action.payload.data.map( comment => comment.company.bs);
			return [...state, ...comments]
    case FETCH_ERR:
        return [...state, action.payload]

		default:
			return state;
	}
}
