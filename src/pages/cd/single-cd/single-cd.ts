import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-cd',
  templateUrl: 'single-cd.html',
})

export class SingleCdPage implements OnInit {

  name: string;

  constructor(public navParams: NavParams) {
  }

  ngOnInit(){
    this.name = this.navParams.get('cdsName');
  }
}

