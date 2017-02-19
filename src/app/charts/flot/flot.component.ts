import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit, OnDestroy {

  constructor(private router:Router, private route:ActivatedRoute) { }

  parentParms$:Subscription;

  ngOnInit() {
    console.log('onInit');
    this.parentParms$ = this.route.parent.params.subscribe(params => console.log(params['username']))
    // console.log(this.route.parent.snapshot.params['username'])
    
    
  }

  ngOnDestroy(){
    console.log('onDestroy');
    if(this.parentParms$)
      this.parentParms$.unsubscribe();
  }

}
