import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trip Planner';
  fixedFooterFlag: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    //console.log(this.activatedRoute.routeConfig.component.name);
    this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })).subscribe(val => val.data.subscribe(com => {
        switch (com.CompName) {
          case "Home":
            this.fixedFooterFlag = true;
            break;
          default:
            this.fixedFooterFlag = false;
            break;
        }
      }));
  }
}
