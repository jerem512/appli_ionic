import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {SingleBookPage} from "../books/single-book/single-book";
import {SingleCdPage} from "./single-cd/single-cd";

@Component({
  selector: 'cd-books',
  templateUrl: 'cd.html'
})

export class CdPage {
  cdsList = [
    {
      name: 'Avicii - My feelings for you',
      description: 'C\'est un super titre'
    },
    {
      name: 'Sean Paul - temperature',
      description: 'C\'est un super titre'
    },
    {
      name: '50 cent - P.I.M.P',
      description: 'C\'est un super titre'
    }
  ];

  constructor(private navCtrl: NavController){

  }
  onLoadCd(name: string){
    this.navCtrl.push(SingleCdPage, {cdsName: name})
  }
}
