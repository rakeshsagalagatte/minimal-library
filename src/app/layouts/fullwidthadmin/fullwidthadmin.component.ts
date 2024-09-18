import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullwidthadmin',
  standalone: true,
  imports: [],
  templateUrl: './fullwidthadmin.component.html',
  styleUrl: './fullwidthadmin.component.css'
})
export class FullwidthadminComponent  implements OnInit {

  constructor(private router: Router) { }
  toAdpg() {
    this.router.navigate(['books']);
  }

  ngOnInit() {
  }

}
