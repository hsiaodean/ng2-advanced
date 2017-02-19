import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type:string;

  constructor(private router:Router, private route:ActivatedRoute) { 

  }

  parentParams$:any

  ngOnInit() {
    // console.log(this.route.snapshot.params['type'])
    // this.type = this.route.snapshot.params['type']

    this.route.params.subscribe(params => this.type = params['type'])

    console.log(this.route.params.subscribe(params => console.log(params)))

    console.log(this.route.queryParams.subscribe(params => console.log(params)))
    
  }

  goCards(type){
    // this.router.navigateByUrl('/cards/'+type)
    // this.router.navigate(["/cards", type])
    //相對連結
    this.router.navigate(['..', type], {relativeTo:this.route})
  }


}
