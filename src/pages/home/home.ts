import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BooksPage} from "../books/books";
import {CdPage} from "../cd/cd";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  BookPage = BooksPage;
  CdPage = CdPage;

  constructor(public navCtrl: NavController) {

  }

}
