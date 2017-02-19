import { AbstractControl } from '@angular/forms'
export function customValidator(control:AbstractControl){
    if(control.value == 'Dean'){
      return {custom:true}
    }
    else{
      return null
    }
    
  }