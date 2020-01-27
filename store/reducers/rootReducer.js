import {combineReducers} from 'redux'
import humanReducer from './humanReducer'

const rootReducer = combineReducers({
    human: humanReducer
})

export default rootReducer