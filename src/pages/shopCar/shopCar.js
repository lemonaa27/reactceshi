import React,{ Component} from 'react';
import Header from '../common/header'
export default class shopCar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header header_title="购物车" back="true"></Header>
            </div>
        )
    }
}