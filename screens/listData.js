import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import HumanList from '../share/components/humanList'

class ListData extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
          title: navigation.getParam('category').name,
        };
      };

    render() {
        return (
            <View style={styles.container}>
                {this.props.navigation.getParam('tag')}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default ListData