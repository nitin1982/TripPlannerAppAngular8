import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../security/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.isLoggedInSub.subscribe(val => this.loggedIn = val);
  }

  Logout(){
    this.loggedIn = false;
    this.userService.logOut();        
    this.router.navigateByUrl('Home');
}

ResetPassword(){
    this.router.navigate(['ResetPassword']);
}

toggleMenu(drpDwnMenu){
    if(drpDwnMenu.className == "dropdown-menu dropdown-menu-right"){
        drpDwnMenu.className = "show dropdown-menu dropdown-menu-right";
    } else{
        drpDwnMenu.className = "dropdown-menu dropdown-menu-right";
    }
}

toggleNav(collapsiblenav){         
    if(collapsiblenav.className == "collapse navbar-collapse"){
        collapsiblenav.className = "show navbar-collapse";
    } else{
        collapsiblenav.className = "collapse navbar-collapse";
    }
}
}
