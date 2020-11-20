import {Component} from "@angular/core";
import {BooksPage} from "../books/books";
import {CdPage} from "../cd/cd";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage{

  booksPage = BooksPage;
  cdsPage = CdPage;
}
