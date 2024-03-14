import {Route, Routes} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {AccountComponent} from "../account/account.component";
import {SearchComponent} from "../search/search.component";
import {NotificationsComponent} from "../notifications/notifications.component";
import {MessagesComponent} from "../messages/messages.component";
import {CreatePostComponent} from "../create-post/create-post.component";

const _routes: {[key: string]: Route} = {
  '': {
    path: '',
    component: HomeComponent,
    data: {
      icon: 'home',
      text: 'Home',
    }
  },
  'search': {
    path: 'search',
    component: SearchComponent,
    data: {
      icon: 'search',
      text: 'Search',
      disabled: true,
    }
  },
  'notifications': {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      icon: 'notifications',
      text: 'Notifications',
      disabled: true,
    }
  },
  'messages': {
    path: 'messages',
    component: MessagesComponent,
    data: {
      icon: 'chat',
      text: 'Messages',
      disabled: true,
    }
  },
  'account': {
    path: 'account',
    component: AccountComponent,
    data: {
      icon: 'account_circle',
      text: 'Account',
      loginRequired: true,
    }
  },
  'create-post': {
    path: 'create-post',
    component: CreatePostComponent,
    data: {
      icon: 'add_box',
      text: 'Create Post',
      disabled: false,
    }
  }
}

export const routes: Route[] = [
  _routes[''], _routes['search'], _routes['notifications'],
  _routes['messages'], _routes['account'], _routes['create-post']
];

export const mobileRoutes: Route[] = [
  _routes[''], _routes['search'], _routes['create-post'],
  _routes['messages'], _routes['account']
]
