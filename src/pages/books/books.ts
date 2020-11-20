import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {SingleBookPage} from "./single-book/single-book";

@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})

export class BooksPage {

  booksList = [
    {
      name: 'Le livre de la jungle',
      description: [
        'description : C\'est un livre sur le petit moogli',
        'Auteur : Jean Castex'
      ]
    },
    {
      name: '20 mille lieux sous les mers',
      description: [
        'description : C\'est un livre sur atlantide',
        'Auteur : Jules Verne'
      ]
    },
    {
      name: 'Inconnu à cette adresse',
      description: [
        'description : C\'est un livre sur la guerre',
        'auteur : Jeremy Marchal'
      ]
    }
  ];

  constructor(private navCtrl: NavController){

  }
  onLoadBook(book : {name: string, description: string[]}){
    this.navCtrl.push(SingleBookPage, {book: book})
  }
}
