import React,{ Component} from 'react';
import './homeIndex.css';
import {bannerLists,foodLists} from '../../server/server';
export default class  homeIndex extends Component{
    constructor(props) {
        super(props);   
        this.state = { 
            address:'北京市西二旗弘祥文化产业园', 
            inputMsg:'456', 
            posts: [],
            homestoreList:[],
            keyId:''
        };
        this.handle = this.handle.bind(this)
    }
    handle(keyId,e){  
        this.props.history.push({ 
            pathname: "/detail",
            state: {id:keyId} 
        })
    }
    getImgPath(path){
        let suffix;
        if (!path) {
            return '//elm.cangdu.org/img/default.jpg'
        }
        if (path.indexOf('jpeg') !== -1) {
            suffix = '.jpeg'
        } else {
            suffix = '.png'
        }
        let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
        return 'https://fuss10.elemecdn.com' + path
    }
    componentDidMount() {
        bannerLists().then(res=>{
            const posts = res.data.data;
            this.setState({posts});
        })
        foodLists().then(res=>{
            const homestoreList = res.data.data;
            
            this.setState({homestoreList});
        })
    }
    render(){
        let bannerList = this.state.posts;
        let storeList = this.state.homestoreList;
        return(
            <div>
                <div className="home_header">
                    <div className="home_header_address">
                        <img className="header_img" src={require('../../assets/address1.png')} />
                        <div className="header_word">{this.state.address}</div>
                    </div>
                    <div className="home_search">
                        <img className="search_img" src={require('../../assets/search1.png')} />
                        <input className="search_input" placeholder="请输入商家或美食名称" />
                    </div>
                </div>
                <div className="ul_banner">
                    {
                        bannerList.map((item,index)=>
                            <li className="banner_li" key={index}>
                                <img src={this.getImgPath(item.image_url)} />
                                <p>{item.title}</p>
                            </li>
                        )
                    }
                </div>
                <div className="home_stor_list">
                    {
                        storeList.map((item,index)=>
                            <li className="store_li" key={index}  onClick={this.handle.bind(this,item.id)}>
                                {/* <img src={this.getImgPath(item.image_path)} /> */}
                                <div>
                                    <span>{item.name}</span>
                                    <p>{item.address}</p>
                                </div>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
}