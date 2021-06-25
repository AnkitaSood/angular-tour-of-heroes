import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DoggoService} from '../services/doggo.service';
import {Doggo} from '../models/doggo';
import {faStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doggos: Doggo[] = [];
  faStar = faStar;

  constructor(
    private router: Router,
    private doggoService: DoggoService) {
  }

  ngOnInit(): void {
    this.doggoService.getdoggos()
      .subscribe(doggos => this.doggos = doggos.slice(1, 5));
  }

  gotoDetail(doggo: Doggo): void {
    const link = ['/detail', doggo.id];
    this.router.navigate(link);
  }
}
