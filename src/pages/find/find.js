import React,{ Component} from 'react';
import Header from '../common/header';
export default class find extends Component{
    constructor(props) {
        super(props);   
        this.state = { 
            
        };
    }
    render(){
        return(
            <div>
                <Header header_title='发现' back="true"></Header>
            </div>
        )
    }
}