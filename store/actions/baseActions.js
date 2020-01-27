import {DATA_LOAD_ERROR, DATA_LOAD_START, DATA_LOAD_SUCCESS, DATA_CLEAR} from '../constants'
import axios from 'axios'

export const fetchData = (categoty, page) => {
    return (dispatch, getState) => {
        dispatch({type: DATA_LOAD_START})
        axios.get(`https://swapi.co/api/${categoty}/?page=${page}`)
        .then(({data}) => {
            dispatch({type: DATA_LOAD_SUCCESS, data: data})
        })
        .catch((error) => {
            dispatch({type: DATA_LOAD_ERROR, error: error.message})
        })
    }
}


export const clearDataItems = () => {
    return (dispatch, getState) => {
        dispatch({type: DATA_CLEAR})
    }
}