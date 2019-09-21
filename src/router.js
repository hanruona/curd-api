import React from 'react';
import { Router, Route, Switch } from 'dva/router';
//login 登录注册页面
import IndexPage from './routes/IndexPage';
//日周考试成绩统计表
import statisticalTable from "./routes/statisticalTable/index"
//添加成绩 分析 统计图
import focusStudents from "./routes/focusstudents/index"
//校长视图
import principalLook from "./routes/principalLook/index"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/statisticalTable" component={statisticalTable} />
        <Route path="/focusstudents" component={focusStudents} />
        <Route path="/principalLook" component={principalLook} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
