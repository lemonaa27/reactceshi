import React,{ Component} from 'react';
export default class mine extends Component{
    constructor(props) {
        super(props);   
        
    }
    handleBackBtn=(props)=>{
        window.history.back();
    }
    backIcon(){
        if(this.props.back === 'true'){
            return <button onClick={this.handleBackBtn}>返回</button>
        }else{
            return  <span></span>
        }
    }
    render(){
        return(
            <div>
                {this.backIcon()}
                <h1>{this.props.header_title}</h1>
            </div>
        )
    }
}