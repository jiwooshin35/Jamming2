import React from 'react'

export default class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={keyword:''}
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)

    }

    handleChange(event){
        this.setState({keyword:event.target.value})
    }   

    handleClick(event){
        this.props.search(this.state.keyword);
        event.preventDefault()
    }


    render(){
        return(
            <div>
                <input 
                placeholder='Enter' 
                onChange={this.handleChange}
                 />
                <button onClick={this.handleClick}>
                    Search
                </button>
            </div>
        )
    }
    
}