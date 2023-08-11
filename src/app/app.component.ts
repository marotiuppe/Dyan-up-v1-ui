import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dyan-Up';
  loadPage:any='login';
  isLogin:any=false;
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.loadPage = e.url.toString().substr(1);
        if(this.loadPage == ""){
          this.loadPage="login";
        }
        if(this.loadPage != "" && this.loadPage != "login"){
          this.isLogin=true;
        }
        console.log(this.loadPage);
        sessionStorage.setItem("loadPage",this.loadPage);
      }
    });
  }
}
