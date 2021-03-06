import {DATA_LOAD_ERROR, DATA_LOAD_START, DATA_LOAD_SUCCESS, DATA_CLEAR, DATA_FILTER} from '../constants'

const initState = {
    humans: [],
    loading: false,
    error: null,
    loadedPage: 1,
    hasNext: true,
    filterQuery: '',
    filterProperty: ''
}


const humanReducer = (state=initState, action) => {
    switch (action.type) {
        case DATA_LOAD_START:
            console.log('load start')
            return {
                ...state,
                loading: true,
                 filterProperty: action.propFilter
            }
        case DATA_LOAD_SUCCESS:
            console.log('load success')
            console.log('has next --reducer-- ' + action.data.next)
            return {
                ...state,
                loading: false,
                loadedPage: state.loadedPage + 1,
                humans: [...state.humans, ...action.data.results],
                hasNext: action.data.next != null,
                filterProperty: action.propFilter
            }
        case DATA_LOAD_ERROR:
            console.log('load error')
            return {
                ...state, 
                loading: false,
                error: action.error
            }
        case DATA_CLEAR:
            console.log('data clear')
            return initState
        
        case DATA_FILTER:
            console.log('data filtered')
            return {
                ...state,
                filterQuery: action.query,
                filterProperty: action.prop
            }
        default:
            console.log('sdfsdfdsfsdfdsf')
            return state
    }
}

export default humanReducer