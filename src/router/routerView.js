import React, { Component } from 'react';
import { Route, Switch, Redirect } from "dva/router";
import {getSession} from '@/utils/index.js'
class RouterView extends Component {
    render() {
        const { Routes } = this.props;
        const DefeaultRoute = <Route key={1} exact path="/" component={() =>
            <Redirect to="/login" />
        } />
        return <Switch>
            {
                Routes.length && Routes.map((itm, ind) => {
                    //console.log(itm.children)
                    const Children = itm.children === undefined ? [] : itm.children;
                    const ChildrenRoutes=<Route key={ind} path={itm.path} render={(api) => {
                            document.title=itm.title || "默认title"
                            return <itm.component routes={Children} {...api}></itm.component>
                        }}></Route>
                    if (itm.component) {
                       return  !itm.auth ? ChildrenRoutes
                                :(getSession('token') 
                                ? ChildrenRoutes 
                                : <Redirect to="/login" key={'010'} />)
                        
                    }
                    return itm.component
                }).concat(DefeaultRoute)
            }
        </Switch>
    }
}

export default RouterView;