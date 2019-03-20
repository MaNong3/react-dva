
import app from './app';
import router from './router/index';

import 'element-theme-default';
import 'antd/dist/antd.css';

app.model(require('./models/adduser').default);
app.model(require('./models/exam').default);
app.model(require('./models/test').default);

app.router(router);

app.start('#root');
