import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:any = [
    {"name": "Rahul", "city": "Delhi"}
  ]

  constructor() { }

  ngOnInit() {
    

  }

  getData() {
    console.log("function called");
  }

}
