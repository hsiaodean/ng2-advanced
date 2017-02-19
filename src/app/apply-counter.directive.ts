import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  //加上apply-counter的directive 且要有class="pt0"的element才會有效果
  selector: '.pt0[apply-counter]'
})
export class ApplyCounterDirective {

  //property binding的概念 變template的值
  @HostBinding('class.bg-success')
  bgClass=false
  
  //event binding 綁定component 的event
  @HostListener('click', ['$event'])
  myClick(){
    this.bgClass = !this.bgClass
  }
  
  constructor() { 
    setTimeout(()=>{
      this.bgClass = true;
      console.log(this.bgClass)
    },3000 )
  }

}
