import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void {
    console.log("this.contactForm.value");
  }
}