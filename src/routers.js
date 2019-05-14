import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import styles from './styles/App.less';

// Loading 提示
const loadingComponent = () => <span>Loading</span>;
// Home 组件
const Home = Loadable({loader: () => import('pages/home'),loading: loadingComponent});
// 我的好友
const MyFriends = Loadable({loader: () => import('pages/myFriends'), loading: loadingComponent})
// NotFound 组件
const NotFound = Loadable({loader: () => import('pages/exception'), loading: loadingComponent});

export default (props) => {
  return (
    <div className={ styles.app }>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/inviteFriends' component={ Home } />
        <Route exact path='/myFriends' component={ MyFriends } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  )
}