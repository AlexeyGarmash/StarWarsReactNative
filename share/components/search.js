import React, { Component, useState } from 'react'
import {SearchBar} from 'react-native-elements'

export const Search = ({onSearchQueryChanged}) => {
    const [query, setQuery] = useState("")

    const onSearch = (search) => {
        let searchQuery = {search}
        setQuery(searchQuery)
        onSearchQueryChanged(searchQuery)
    }

    return (
        <SearchBar
            placeholder='Type text here...'
            onChangeText={onSearch}
            value={query}
        />
    )
} 