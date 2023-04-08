import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Spring } from './spring.service';
import { Empobj } from '../dynamicform/Empobj';
import { CountryService } from '../dynamicform/Countryapi.service';


@Component({
  selector: 'app-dynamicformedit',
  templateUrl: './dynamicformedit.component.html',
  styleUrls: ['./dynamicformedit.component.css']
})
export class DynamicformeditComponent implements OnInit{

  constructor( private fb : FormBuilder, private countryService :CountryService,private spring: Spring)
  {

  }
  
  id=1;
  public myobject:any;
  public obj: any;
  countries: any[] = [];
  countryname : any[]=[];
  ngOnInit()
  {
    this.countryService.getCountries().subscribe(
      data => {
        // this.countries = data.sort((a, b) => a - b);;
        this.countries=data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        
        this.countryname=this.countries.map(obj => obj.name.common);
        
      },
      error => {
        console.log("this is error",error);
      }
    );
    this.spring.getallreq(1).subscribe(data =>{console.log(data)});
    this.spring.getreq(this.id).subscribe(
      data => {
        // this.countries = data.sort((a, b) => a - b);;
        console.log(data);
        this.obj=data;
        console.log(this.obj);
        this.registrationForm.patchValue({
          userName:this.obj.name,
          email:this.obj.email,
          countryCode : "+91",
          phone:this.obj.contact,
          dob :this.obj.dob,
          gender:this.obj.gender,
          designation :this.obj.designation,
          manager:this.obj.manager,
          Address:{
          street:this.obj.address,
          postalCode: "411039",
          city : "pune",
          state : "Maharashtra",
          country : "India"
        }

        })  
      },
      error => {
        console.log(error);
      }
    );
    
  }

  countryCodes = [
    { value: '+1', label: '+1 (United States)' },
    { value: '+44', label: '+44 (United Kingdom)' },
    { value: '+91', label: '+91 (India)' },
    // Add more country codes as needed
  ];
  //made using formbuilder
  registrationForm = this.fb.group({
  userName : ['',Validators.required],
    email : ['',Validators.email],
    countryCode :[''],
    phone : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    dob : [''],
    gender:[''],
    designation :[''],
    manager :[''],
    Address : this.fb.group({
      street : [''],
      postalCode: [''],
      city : [''],
      state : [''],
      country: ['']})


})

onSubmit()
{
  console.log(this.registrationForm.value);
  alert("Employee Details modified");
  const obj  =this.registrationForm.value;
  
  const empobj= new Empobj(obj.userName,obj.email,obj.phone?.toString(),obj.dob,obj.gender,obj.designation,obj.manager,obj.Address?.street)
  this.spring.sendPutRequest(empobj,this.id);
}

  //this is with formgroup and formcontrol
  // registrationForm = new FormGroup({
  //   userName : new FormControl(''),
  //   email : new FormControl(''),
  //   phone : new FormControl(''),
  //   Address : new FormGroup({
  //     street : new FormControl(''),
  //     postalCode: new FormControl(''),
  //     city : new FormControl(''),
  //     state : new FormControl('')
  //   })
  // });


  loadApidata()
  {
    console.log("inside");
   this.registrationForm.patchValue({
    userName:"atharv",
    email:"atharvkad9922@gmail.com",
    countryCode : "+91",
    phone:"7083387528",
    dob :"02-02-2000",
    gender:"Male",
    designation :"Software Engineer trainee",
    manager:'VB',
    Address:{
      street:"alandi road",
      postalCode: "411039",
      city : "pune",
      state : "Maharashtra"
    }
  
   }) 
   
   
  }
  
  states: string[] = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
  designation: string[]=["Senior Software Engineer","Software Engineer Intern","Automation Engineer","Administration and operation","Vendor","Software Engineer","Technical Manager","People Manager","Devops Engineer","Technical Lead"]

}
