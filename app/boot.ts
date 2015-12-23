import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {UserManager} from './shared/user/user-manager';
import {MyRandom} from './shared/user/user-random';
import {MyNavBar} from './shared/navbar/navbar.component';

bootstrap(AppComponent,[UserManager, MyRandom]);
