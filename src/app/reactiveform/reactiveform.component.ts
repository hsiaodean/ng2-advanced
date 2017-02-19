import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl} from '@angular/forms';
import { customValidator} from "../shared/customValidator";
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      group1:this.fb.array([
        this.fb.control('Dean 1',[Validators.required, Validators.minLength(2)]),
        this.fb.control('Dean 2',[Validators.required, Validators.minLength(2)]),
        this.fb.control('Dean 3',[Validators.required, Validators.minLength(2)]),
        ['Dean 4', [Validators.required, Validators.minLength(3),customValidator]]

      ])
     
    })
  }

  ngOnInit() {
    //(<FormArray>this.form.controls['group1']).controls[0].valid 等價 this.form.get('group1.0').valid
    //console.log((<FormArray>this.form.controls['group1']).controls[0].valid)
    // console.log(this.form.get('group1.0').valid)

    let group1:FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length,this.fb.control("Dean 5", [Validators.required, Validators.minLength(3)]));
  }

  getFieldInvalid(fieldName,prefix=""){
    var value = this.form.get(prefix+fieldName)
    return value.invalid && value.dirty;
  }

  // customValidator(control:AbstractControl){
  //   console.log(control.value)
  //   if(control.value == 'Dean'){
  //     return {custom:true}
  //   }
  //   else{
  //     return null
  //   }

  // }

}
