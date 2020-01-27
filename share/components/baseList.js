import React, { Component } from 'react'
import {View, FlatList, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {fetchData} from '../../store/actions/baseActions'
import {clearDataItems} from '../../store/actions/baseActions'

import {renderItemPeople, renderItemVehicle, renderItemFilm} from './listItems/itemPeople'
import {
    CATEGORY_FILMS, 
    CATEGORY_PEOPLE, 
    CATEGORY_PLANETS, 
    CATEGORY_SPECIES, 
    CATEGORY_STARSHIPS, 
    CATEGORY_VEHICLES} from './listItems/constants'

class BaseList extends Component {
        
    page = 1

    state = {
        humans: [],
        pageLoaded: 0,
        loadMore: true,
        onScrolled: false
    }

    componentDidMount() {
        console.log('cdm')
        this.props.fetchData(this.props.category, this.page)
    }
    

    componentWillUnmount() {
        this.props.clearDataItems()
    }
    

    onItemPress = () => {
        console.log('item clicked')
    }

    renderItem = ({item}) => {
        //console.log(item.name);
        switch (this.props.category) {
            case CATEGORY_FILMS:
                return renderItemFilm(item, this.onItemPress)
            default:
                return renderItemPeople(item, this.onItemPress)
        }
    }

    renderFooterItem = () => {
        return(
            <View style={styles.itemFooter}>
                <Text>Footer</Text>
            </View>
        )
    }

    onEndReached = () => {
        
        //if(!this.state.onScrolled){
            this.page = this.page + 1
            console.log(this.props.hasNext)
            if(this.props.hasNext){
                console.log('end reached ' + this.page)
                this.props.fetchData(this.props.category, this.page)
            }
            
        //}
    }

    renderHeaderItem = () => {
        return (
            <ActivityIndicator style={styles.progress}/>
        )
    }

    render() {
        const {humans, isLoading} = this.props
        
        return (
            <View style={styles.root}>
                <FlatList
                    bounces={false}
                    style = {styles.container}
                    data = {humans}
                    renderItem={this.renderItem}
                    //ListFooterComponent={this.renderFooterItem}
                    //ListHeaderComponent={isLoading || humans.length === 0 ? this.renderHeaderItem : null}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.1}
                />
                {isLoading || humans.length === 0 ? <ActivityIndicator size="large" color="#0000ff" style={styles.progress}/> : null}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1
      },
    progress: {
        alignSelf: "center"
    }
})


const mapStateToProps = (state) => {
    let humansWithKey = state.human.humans.map(human => ({...human, key: human.url}))
    return {
        humans: humansWithKey,
        isLoading: state.human.loading,
        error: state.human.error,
        page: state.human.loadedPage,
        hasNext: state.human.hasNext
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchData: (category, page) => dispatch(fetchData(category, page)),
        clearDataItems: () => dispatch(clearDataItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseList)