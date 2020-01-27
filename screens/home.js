import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import HumanList from '../share/components/humanList'
import MainList from '../share/components/mainList'

export default Home = (props) => {
    return (
        <View style={styles.container}>
            <MainList navigation = {props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})