import React, { Component, useState } from 'react'
import {SearchBar} from 'react-native-elements'
import {StyleSheet} from 'react-native'

export const Search = ({onSearchQueryChanged, category}) => {
    const [query, setQuery] = useState("")

    const onSearch = (search) => {
        let searchQuery = {search}
        setQuery(searchQuery)
        onSearchQueryChanged(searchQuery)
    }

    return (
        <SearchBar
            
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.container}
            placeholder={`Type ${category} here...`}
            onChangeText={onSearch}
            value={query}
        />
    )
} 


const styles = StyleSheet.create({
    container:{
        borderRadius: 17,
        backgroundColor: '#fff',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        padding:0,
        marginVertical:3,
        marginHorizontal: 10
        
    },
    inputContainer:{
        borderRadius: 17,
        backgroundColor: '#fff',
        
    }
    
})