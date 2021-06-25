import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Doggo } from '../models/doggo';
import {DoggoService} from '../services/doggo.service';


@Component({
  selector: 'my-doggo-detail',
  templateUrl: './doggo-detail.component.html',
  styleUrls: ['./doggo-detail.component.scss']
})
export class DoggoDetailComponent implements OnInit {
  @Input() doggo: Doggo;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private doggoService: DoggoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.doggoService.getdoggo(id).subscribe(doggo => (this.doggo = doggo));
      } else {
        this.navigated = false;
        this.doggo = new Doggo();
      }
    });
  }

  save(): void {
    this.doggoService.save(this.doggo).subscribe(doggo => {
      this.doggo = doggo; // saved doggo, w/ id if new
      this.goBack(doggo);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedDoggo: Doggo = null): void {
    this.close.emit(savedDoggo);
    if (this.navigated) {
      window.history.back();
    }
  }
}
