import {
    DATA_LOAD_ERROR, 
    DATA_LOAD_START, 
    DATA_LOAD_SUCCESS, 
    DATA_CLEAR, 
    DATA_FILTER} from '../constants'
import axios from 'axios'

export const fetchData = (categoty, page, propFilter) => {
    console.log('from fetch ' + propFilter)
    return (dispatch, getState) => {
        dispatch({type: DATA_LOAD_START, propFilter})
        axios.get(`https://swapi.co/api/${categoty}/?page=${page}`)
        .then(({data}) => {
            dispatch({type: DATA_LOAD_SUCCESS, data: data, propFilter})
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

export const filterData = (query, prop) => {
    return (dispatch, getState) => {
        dispatch({type: DATA_FILTER, query, prop})
    }
}