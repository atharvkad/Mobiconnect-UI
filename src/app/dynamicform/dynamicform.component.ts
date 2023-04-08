import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {CountryService} from './Countryapi.service'
import {Spring} from './spring.service'
import { Empobj } from './Empobj';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit{

  constructor( private fb : FormBuilder, private countryService :CountryService, private spring: Spring)
  {

  }

  
  
  object : any ;
  ngOnInit() {
    this.countryService.getCountries().subscribe(
      data => {
        // this.countries = data.sort((a, b) => a - b);;
        this.countries=data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        
        this.countryname=this.countries.map(obj => obj.name.common);
        
      },
      error => {
        console.log(error);
      }
    );
    //Modified for post request 
    
    
  }

  countries: any[] = [];
  countryname : any[]=[];
  
  //made using formbuilder
  registrationForm = this.fb.group({
  userName : ['',Validators.required],
    email : ['',Validators.email],
    countryCode :[''],
    phone : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    dob :[''],
    gender:[''],
    designation :[''],
    manager :[''],
    Address : this.fb.group({
      street : [''],
      postalCode: [''],
      city : [''],
      state : [''],
      country :['']})})



onSubmit()
{
  // console.log(t);
  alert("Employee Registered");
  console.log(this.registrationForm.value);
  const obj  =this.registrationForm.value;
  
  //date experiment
  // let dateString : string | null | undefined;
  // dateString = obj.dob;
  // const myDate = "0000-00-00"
  // if(dateString){
  //   const dateParts = dateString.split('-');
  // const year = parseInt(dateParts[0], 10);
  // const month = parseInt(dateParts[1], 10);
  // const day = parseInt(dateParts[2], 10);
  // const myDate = new Date(year, month - 1, day).toISOString().slice(0, 10);
  // }
  
  

  const empobj= new Empobj(obj.userName,obj.email,obj.phone?.toString(),obj.dob,obj.gender,obj.designation,obj.manager,obj.Address?.street)
  
  
  
   this.spring.sendPostRequest(empobj);
  
}

loadApidata()
{
   console.log("inside");
   this.registrationForm.setValue({
    userName:"atharv",
    email:"atharvkad9922@gmail.com",
    countryCode : "+91",
    phone:"7083387528",
    dob : "2023-04-12",
    gender:"Male",
    designation :"Software Engineer Intern",
    manager:'VB',
    Address:{
      street:"alandi road",
      postalCode: "411039",
      city : "pune",
      state : "Maharashtra",
      country :"Iceland"
    }  
   }) 
     
}

  designation: string[]=["Senior Software Engineer","Software Engineer Intern","Automation Engineer","Administration and operation","Vendor","Software Engineer","Technical Manager","People Manager","Devops Engineer","Technical Lead"]
  countryCodes = [{ value: '+1', label: '+1 (United States)' },{ value: '+44', label: '+44 (United Kingdom)' },{ value: '+91', label: '+91 (India)' },];
  


}

