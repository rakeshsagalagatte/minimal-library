import { Component, OnInit } from '@angular/core';
import { AdminMembersService } from '../../adminservices/admin-members.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent  implements OnInit {

  myrr: any;
  constructor(private memberSer: AdminMembersService) {
    this.memberSer.getMembyId(1).subscribe(data => {
      this.myrr = data;


      console.log(this.myrr);
    });

  }


  ngOnInit() {
    
  }

}

