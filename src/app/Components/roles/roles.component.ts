import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

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
