import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import '../pages/App.css';
import homeIndex from '../pages/homeIndex/homeIndex';
import find from '../pages/find/find';
import shopCar from '../pages/shopCar/shopCar';
import mine from '../pages/mine/mine';
import detail from '../pages/detail/detail';
import header from "../pages/common/header";

class routers extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul className="bottomMenu">
                        <NavLink to="/homeIndex" activeClassName="homeIndex">首页</NavLink>
                        <NavLink to="/find" activeClassName="find">发现</NavLink>
                        <NavLink to="/shopCar" activeClassName="shopCar">购物车</NavLink>
                        <NavLink to="/mine" activeClassName="mine">我的</NavLink>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={homeIndex} />
                        <Route exact path="/homeIndex" component={homeIndex} />
                        <Route exact path="/find" component={find} />
                        <Route exact path="/shopCar" component={shopCar} />
                        <Route exact path="/mine" component={mine} />
                        <Route exact path="/detail" component={detail} />
                        <Route exact path="/header" component={header} />
                    </div>
                </div>
            </Router>
        )
    }
}
export default routers;