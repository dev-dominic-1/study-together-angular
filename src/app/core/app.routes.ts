import {Route, Routes} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {AccountComponent} from "../account/account.component";
import {SearchComponent} from "../search/search.component";
import {NotificationsComponent} from "../notifications/notifications.component";
import {MessagesComponent} from "../messages/messages.component";
import {CreatePostComponent} from "../create-post/create-post.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      icon: 'home',
      text: 'Home',
    }
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      icon: 'search',
      text: 'Search',
      disabled: true
    }
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      icon: 'notifications',
      text: 'Notifications',
      disabled: true
    }
  },
  {
    path: 'messages',
    component: MessagesComponent,
    data: {
      icon: 'chat',
      text: 'Messages',
      disabled: true
    }
  },
  {
    path: 'account',
    component: AccountComponent,
    data: {
      icon: 'account_circle',
      text: 'Account',
      loginRequired: true,
    }
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
    data: {
      icon: 'add_box',
      text: 'Create Post',
      disabled: false,
    }
  }
];
