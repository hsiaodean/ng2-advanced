import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = fb.group({
      name:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit() {
  }

  getFieldInvalid(fieldName){
    var value = this.form.controls[fieldName];
    return value.invalid && value.dirty;
  }

}
