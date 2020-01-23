import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  values :any;

  constructor(private httpclient : HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }

  getvalues()
  {
    this.httpclient.get('http://localhost:1337/mentors/2').subscribe(response => {
      this.values = response;

    }), error => {
      console.log(error);
    }
    
  }


}
