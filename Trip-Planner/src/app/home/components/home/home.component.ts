import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../security/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = true;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {    
    this.userService.checkUserLoggedInOrNot().subscribe(val => {  
      this.loggedIn = (val != null);    
      if (val) {
        if (!this.userService.redirectUrl){
          this.userService.redirectUrl = 'AffiliatesPerformance';        
        }
        this.router.navigate([this.userService.redirectUrl]);
      }
    });
  }

}
