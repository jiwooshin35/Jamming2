import React from 'react'
import Music from './Music'

export default class Results extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
            <h1>++this is RESULTS+++</h1>
            {this.props.searchResults.map( (music)=>{
                return (<div>
                    <Music 
                        title={music.title}
                        artist={music.artist}
                        id={music.id}
                        addList={this.props.addList}
                        isResult={true}/>
                    
                </div>
                    
                 )}
                    
                    
                )}
        </div>
            //Music
        )
    }

}