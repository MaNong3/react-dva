import React, { Component } from 'react';
import RouterView from './routerView';
import RouterRoutes from './routes';
import { BrowserRouter as Router} from 'dva/router';

class Root extends Component {
  render() {
    const {routes}=this.props
    return <Router>
      <RouterView Routes={RouterRoutes===undefined?routes:RouterRoutes}></RouterView>
    </Router>
  }
}
function RouterConfig() {
  return <Root></Root>;
}

export default RouterConfig;
