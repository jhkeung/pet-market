import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      inputAddress: ['', Validators.required],
      inputCity: ['', Validators.required],
      inputState: ['', Validators.required],
      inputZip: ['', Validators.required],
      petName: ['', Validators.required],
      petBreed: ['', Validators.required],
      petId: ['', Validators.required],
      subscribe: 'true'
    });
  }

  onSubmit() {
    this.form.reset();
  }
}
