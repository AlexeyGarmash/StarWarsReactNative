import React from 'react'
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native'
import BaseList from './baseList'



export default MainList = ({navigation}) => {

    const data = [
        {
            key: '1',
            category: 'people',
            image: require('../../assets/main/people.png'),
            name: 'People'
        },
        {
            key: '2',
            category: 'vehicles',
            image: require('../../assets/main/vehicle.png'),
            name: 'Vehicles'
        },
        {
            key: '3',
            category: 'planets',
            image: require('../../assets/main/planet.png'),
            name: 'Planets'
        },
        {
            key: '4',
            category: 'species',
            image: require('../../assets/main/specie.png'),
            name: 'Species'
        },
        {
            key: '5',
            category: 'films',
            image: require('../../assets/main/film.png'),
            name: 'Films'
        },
        {
            key: '6',
            category: 'starships',
            image: require('../../assets/main/spaceship.png'),
            name: 'Spaceships'
        }
    ]

    

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.touch} onPress={() => {
                navigation.navigate('ListData', {
                    tag: <BaseList category={item.category}/>,
                    category: item
                })
            }}>
                <View style={styles.item}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <FlatList
            style = {styles.container}
            numColumns = {2}
            data={data}
            renderItem = {renderItem}
        />
    )

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 25,
        
    },
    touch: {
        flex: 0.5,
        
        height: 170,
        margin: 5   
    },
    item: {
        flex:1,
        borderRadius: 10,

        shadowColor: '#ffbb8a',
        shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,

        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        
    },
    image:{
        width:64,
        height:64,
        resizeMode: "stretch",
        marginBottom: 10
    },
    text:{
        fontStyle: "normal",
        fontWeight: "bold"
    }
})