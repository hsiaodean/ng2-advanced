import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  parentParams$:any
  
  ngOnInit() {
    this.parentParams$ = this.route.parent.params.subscribe(params=> console.log(params['username']))
  }

  ngOnDestroy(){
    if(this.parentParams$)
      this.parentParams$.unsubscribe()
  }

}
