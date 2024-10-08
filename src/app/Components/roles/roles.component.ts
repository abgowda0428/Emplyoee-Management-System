import { HttpClient } from '@angular/common/http';
import { Component,inject,Inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Irole } from '../../Module/Interfaces/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleslist :Irole[] = [];
  http = inject(HttpClient)

ngOnInit(): void {
  this.getallroles
}

getallroles(){
  this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
    this.roleslist = res.data;
    
  })
}























  first_name:String = "Shravana U Naik";
  last_name = "Polar";
  Mobile_number : Number = 8217665338;
  isActive : boolean = false;
  inputtype:string = "radio"
  selectedState : string ="";

showAlert(){
  alert("Welcome to Angular Toutrial")
}

showAlerttwo(message:string){
  alert(message)
}







}
