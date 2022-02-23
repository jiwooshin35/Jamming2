import React from 'react'
import Playlist from './Playlist'
import Results from './Results'
import SearchBar from './SearchBar'
import {func} from '../util/Spotify2'

const song1={title:'happy',artist:'pharrell',id:'a3nmc'}
const song2={title:'yip',artist:'ye',id:'3ikc9'}

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchResults:[song1,song2], 
            myList:[]}
        this.selectedMusic=this.selectedMusic.bind(this)
        this.addList=this.addList.bind(this)
        this.deleteList=this.deleteList.bind(this)
        this.search=this.search.bind(this)

    }

    selectedMusic(id){
        //return (this.state.searchResults.filter((music)=>{return music.id===id}))

       return this.state.searchResults.find( (music)=> music.id===id )
    }

    addList(id){
        if(this.state.myList.find( (music)=>music.id===id ) ){
            return;
        } 

        const tempList=this.state.myList
        tempList.push(this.selectedMusic(id))
        this.setState({myList:tempList })
    }

    deleteList(id){
        let tempList=this.state.myList
        tempList=tempList.filter((music)=>music.id!==id)
        this.setState({myList:tempList})

    }

    async search(keyword){
        let searchResults= func(keyword)
        this.setState({searchRestuls: searchResults })
    }

    
    render(){
        return (
            <div>
                <SearchBar search={this.search}/>
                <Results 
                    searchResults={this.state.searchResults}
                    addList={this.addList}/>
                <Playlist myList={this.state.myList} deleteList={this.deleteList}
                />
            </div>
        )
    }
}