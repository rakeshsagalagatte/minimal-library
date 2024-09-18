import { Component, OnInit } from '@angular/core';
import { AdminMembersService } from '../../adminservices/admin-members.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private memberSer: AdminMembersService, private router: Router) { }
  public user: any;
  public members: any[] = [];
  public temp: any;

  userSubmit(form: NgForm) {
    this.user = form.value;
    // console.log(this.user);
    // console.log(this.user.username);
    // console.log(this.user.password);
    this.temp = false;
    console.log(this.temp);

    this.members.forEach(member => {
      if (member.umail == this.user.username) {
        if (member.upassword == this.user.password) {
          console.log("Success!!");

          console.log(member.id);

          alert("You have been successfully logged in...");

          //local storage
          sessionStorage.setItem("userid", member.id);
          this.router.navigate(['user/profile']);
          this.temp = true;
          form.reset();

        }
        else {
          alert("Invalid password...");
          this.temp = true;

        }
      } else {
        form.reset();
      }

    });
    if (this.temp == false) {
      alert("Invalid user id or password...");

    }
  }


  get() {
    this.memberSer.getMember()
      .subscribe(data => this.members = data);
  }


  ngOnInit() {
    this.get();

  }

}

