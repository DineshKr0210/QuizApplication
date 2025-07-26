import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {




  userForms : FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl(''),
    username:  new FormControl(''),
    email: new FormControl('')
  });

onSaveUser() {

  const obj = this.userForms.value;
}


}
