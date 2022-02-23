import React from 'react'
import Music from './Music'

export default class Playlist extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
        return(<div>
            <h1>this is PLAYLIST</h1>
            {this.props.myList.map( (music)=>{
                return (<div>
                    <Music 
                        title={music.title}
                        artist={music.artist}
                        id={music.id}
                        deleteList={this.props.deleteList}
                        isResult={false}
                        />
                </div>
                    
                 )}
                    
                    
                )}
        </div>
            //Music
        )
    }
}