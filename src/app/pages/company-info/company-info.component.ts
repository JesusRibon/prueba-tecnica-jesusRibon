import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  company: any = {};
  contact: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('../../../assets/json/info.json').subscribe((data: any) => {
      this.company = data.company;
      this.contact = data.contact;
    });
  }
}
