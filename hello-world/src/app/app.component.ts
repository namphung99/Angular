import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // document.querySelector('app-root');  <app-root></app-root>
  // angular sử dụng tag name?
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chào mọi người mình là Nam';
  url = 'https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/p843x403/182058870_3542920792658039_487289717658253479_n.png?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=pQJhvm6IXKYAX-LdaDF&_nc_oc=AQlzJFOR5nKYYO2XLshYPygaXmASjcvIkJNst--L6UqjPltN8zA75hmXKUp0LQh3Rlc&_nc_ht=scontent-xsp1-3.xx&oh=03bdb2a9e6e567e62b2678965080b287&oe=60F31172'
  textColor = 'orange'

  withBorder = true;

  onToggleBorder(){
    this.withBorder = !this.withBorder;
  }
}

// Data Binding
// 1. PropertyBinding : Components => Template
// 2. EventBiding : Template => Component
