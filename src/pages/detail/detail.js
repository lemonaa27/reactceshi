import React,{ Component} from 'react';
import {detailLists} from '../../server/server'
export default class mine extends Component{
    constructor(props) {
        super(props); 
        this.state = {
            detailList:[],
            nameTitle:''
        } 
    }
    backBtn=(props)=>{
        window.history.go(-1);
    }
    componentDidMount(){
        detailLists({id:this.props.location.state.id}).then(res=>{
            const detailList = res.data.data;
            detailList.map((item,index)=>{
                if(item.id == this.props.location.state.id){
                    const nameTitle = item.name
                    this.setState({nameTitle})
                }
            })
            
        })
    }
    render(){
        let nameTitles = this.state.nameTitle;
        return(
            <div>
                <button onClick={this.backBtn}>返回</button>
                <div>
                    {nameTitles}
                </div>
            </div>
        )
    }
}