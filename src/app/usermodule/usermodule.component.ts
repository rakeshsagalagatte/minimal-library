import { Component, OnInit } from '@angular/core';
import { UserOwnedService } from '../userServices/user-owned.service';

@Component({
  selector: 'app-usermodule',
  standalone: true,
  imports: [],
  templateUrl: './usermodule.component.html',
  styleUrl: './usermodule.component.css'
})
export class UsermoduleComponent implements OnInit {

  userid: any;
  userProfile: any;
  constructor(private userDet: UserOwnedService, ) { }

  ngOnInit() {
    if (sessionStorage) {
      this.userid = sessionStorage.getItem("userid");
      if (this.userid != null) { }
    }
    this.get(this.userid);



  }



  get(id: number) {
    this.userDet.getUser(id)
      .subscribe(data => this.userProfile = data);

  }

  resetSession() {
    sessionStorage.removeItem("userid");

  }

}
