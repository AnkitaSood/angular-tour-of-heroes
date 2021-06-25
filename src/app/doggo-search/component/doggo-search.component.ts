import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { Doggo } from '../../models/doggo';
import { doggoSearchService } from '../doggo-search.service';

@Component({
  selector: 'my-doggo-search',
  templateUrl: './doggo-search.component.html',
  styleUrls: ['./doggo-search.component.scss'],
  providers: [doggoSearchService]
})
export class DoggoSearchComponent implements OnInit {
  doggos: Observable<Doggo[]>;
  faSearch = faSearch;
  private searchTerms = new Subject<string>();

  constructor(
    private doggoSearchService: doggoSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.doggos = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
              this.doggoSearchService.search(term)
            : // or the observable of empty doggos if no search term
              of<Doggo[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Doggo[]>([]);
      })
    );
  }

  gotoDetail(doggo: Doggo): void {
    const link = ['/detail', doggo.id];
    this.router.navigate(link);
  }
}
