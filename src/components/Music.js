import React from 'react'

export default class Music extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    
    
    handleClick(){
        this.props.isResult?this.props.addList(this.props.id):this.props.deleteList(this.props.id)
    }
    
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.artist}</h2>
                <a onClick={this.handleClick}>{(this.props.isResult?'+':'-')}</a>
            </div>
        )
    }
}