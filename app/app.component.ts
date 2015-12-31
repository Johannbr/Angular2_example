import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ListRemoved} from './components/removed/removed.component';
import {HomeComponent} from './components/home/home.component';
import {MyNavBar} from './shared/navbar/navbar.component';
// import {My404} from 'app/components/404/404.component';

@Component({
  selector: 'my-app',
  template:`<h2>{{title}}</h2>
  <my-navbar></my-navbar>`,
  directives:[MyNavBar]
})
@RouteConfig([
  {path:'/', name: 'Home', component: HomeComponent},
  {path:'/removed', name: 'Removed', component: ListRemoved}
  // {path:'!', name: 'My404', component: My404, useAsDefault:true},
])
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Angular 2 example by Johann';
  }
}
