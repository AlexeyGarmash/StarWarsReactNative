import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const renderItemPeople = (item, onItemPress) => {
    //console.log(item.name);
    return(
        <TouchableOpacity onPress={onItemPress}>
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const renderItemVehicle = (item, onItemPress) => {
    return(
        <TouchableOpacity onPress={onItemPress}>
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}


export const renderItemFilm = (item, onItemPress) => {
    return(
        <TouchableOpacity onPress={onItemPress}>
            <View style={styles.item}>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        
        padding: 18,
        fontSize: 22,
        borderBottomWidth: 1,
        borderColor: '#ffa05c',
 
      },
})