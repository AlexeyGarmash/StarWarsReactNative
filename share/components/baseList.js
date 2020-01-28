import React, { Component } from 'react'
import {View, FlatList, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {fetchData, filterData} from '../../store/actions/baseActions'
import {clearDataItems} from '../../store/actions/baseActions'
import {Search} from './search'
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
        onScrolled: false,
        searchRun: false
    }

    choosePropToFilter = () => {
        let categoryFromProps = this.props.category
        let eq3 = categoryFromProps === CATEGORY_FILMS
        let eq2 = categoryFromProps == CATEGORY_FILMS
        let ret = eq3? 'title' : 'name'
        console.log('from base list category props ' + categoryFromProps + ' ' + eq3 + ' ' + eq2 + ' ' + ret)
        return ret
    }

    fetchData = () => {
        let choosenFilter = this.choosePropToFilter()
        console.log('choosen filter ' + choosenFilter)
        this.props.fetchData(this.props.category, this.page, choosenFilter)
    }

    componentDidMount() {
        console.log('cdm')
        this.fetchData()
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
                this.fetchData()
            }
            
        //}
    }

    renderHeaderItem = () => {
        return (
            <ActivityIndicator style={styles.progress}/>
        )
    }

    

    onQueryChanged = (search) => {
        console.log('base '+search.search)
        
        this.props.filterData(search.search, this.choosePropToFilter())
        
        //this.setState({searchRun: false})
    }

    render() {
        const {humans, isLoading} = this.props
        console.log('humans count = ', humans.length)
        return (
            <View style={styles.root}>
                <Search onSearchQueryChanged = {this.onQueryChanged} category={this.props.category}/>
                <FlatList
                    bounces={true}
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
    let filterQuery = state.human.filterQuery
    console.log('filter query '  + filterQuery)
    let filterProp = state.human.filterProperty
    console.log('filter Prop '  + filterProp)
    let humansWithKey = state.human.humans
                            .filter(obj=>obj[filterProp].includes(filterQuery))
                            .map(human => ({...human, key: human.url}))
                            
                        
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
        fetchData: (category, page, prop) => dispatch(fetchData(category, page, prop)),
        clearDataItems: () => dispatch(clearDataItems()),
        filterData: (query, prop) => dispatch(filterData(query, prop))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseList)