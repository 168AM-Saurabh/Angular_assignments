import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-assignment12',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './assignment12.component.html',
  styleUrl: './assignment12.component.css'
})
export class Assignment12Component {
	public fbobj = new FormBuilder();
//    validUsernamePattern = "[a-zA-Z]";
    validPhoneePattern = "^[0-9]{10}$";
    validEmailPattern = "^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$";
    validCitynamePattern = "^[a-zA-Z]{4,}$";
    validZipCodePattern = "^[0-9]{5}$";

    
    formDemo = this.fbobj.group({
        firstname :['', [Validators.required,Validators.pattern('[a-zA-Z]*')] ],
        lastname :['', [Validators.required,Validators.pattern('[a-zA-Z]*')] ],
        email :['', [Validators.required, Validators.minLength(3),Validators.pattern(this.validEmailPattern)] ],
        phone :['', [Validators.required,Validators.pattern(this.validPhoneePattern)] ],
        city :['', [Validators.required,Validators.pattern(this.validCitynamePattern)] ],
        state :['', [Validators.pattern(this.validCitynamePattern)] ],
        zipcode :['', [Validators.pattern(this.validZipCodePattern)] ],
        comments :['', [Validators.minLength(30)] ]
    
    });
   
}
