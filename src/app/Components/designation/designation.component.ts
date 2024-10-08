import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [RolesComponent,DesignationComponent],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {

}
