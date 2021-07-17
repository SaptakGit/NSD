import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginbtn:boolean;
  logoutbtn:boolean;
  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false; 
      this.logoutbtn=true
    }
    else{
      this.loginbtn=true;
      this.logoutbtn=false
    }
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout()
  {
    this.dataService.deleteToken();
    window.location.href = '';
  }

  ngOnInit(): void { 
  }

  

}
