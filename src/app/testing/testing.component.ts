import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CountryService } from './test.service';
import { map } from 'rxjs/operators';
import { Spring } from './spring.service';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  countries: any[] = [];
  countryname : any[]=[];
  constructor(private countryService: CountryService, private spring : Spring) { }

  listo : any;
  ngOnInit() {
    this.countryService.getCountries().subscribe(
      data => {
        //this.countries=data.name.common;
        
        //this.countries = data.sort((a, b) => a - b);;
        this.countries=data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        // console.log("obj",this.countries);
        this.countryname=this.countries.map(obj => obj.name.common);
        // console.log("array",this.countryname);
      },
      error => {
        console.log(error);
      }
    );


  //   const body = {
  //     "name":"atharv","email":"atharvkad9922@gmail.com","contact":"7083387528","gender":"Male","designation":"Software Engineer Intern","manager":"VB","address":"alandi road"
  // };
      
  //   this.spring.sendPostRequest(body);
    this.spring.getreq().subscribe(data=>{console.log(data)},error => {
      console.log(error);
    });

    this.spring.getallreq().subscribe(data=>{this.listo=data});


    
  //   const mobody = {
  //     "name": "Basva kiran",
  //     "email": "Rakesh234@gmail.com",
  //     "contact": "7833335456545",
  //     "gender": "male",
  //     "dob": "2000-12-02",
  //     "designation": "developer",
  //     "address": "sangmner",
  //     "work_location": "pune",
  //     "date_of_joining": "2000-11-02",
  //     "date_of_exit": "2000-12-02",
  //     "manager": "vijay",
  //     "total_leaves": "1",
  //     "leave_balance": "4000",
  //     "privileged_leaves" : 3,
  //     "earned_leaves": 3,
  //     "sick_leaves" : 3,
  //     "privileged_leaves_balance" :3,
  //     "earned_leaves_balance" : 3,
  //     "sick_leaves_balance" :3
  // };
  //   this.spring.sendPutRequest(mobody);
  }
  
  
  
}
