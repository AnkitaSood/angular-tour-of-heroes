import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doggo } from '../models/doggo';
import {DoggoService} from '../services/doggo.service';


@Component({
  selector: 'my-doggos',
  templateUrl: './doggos.component.html',
  styleUrls: ['./doggos.component.scss']
})
export class DoggosComponent implements OnInit {
  doggos: Doggo[];
  selecteddoggo: Doggo;
  addingdoggo = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private doggoService: DoggoService) {}

  getdoggos(): void {
    this.doggoService
      .getdoggos()
      .subscribe(
        doggos => (this.doggos = doggos),
        error => (this.error = error)
      )
  }

  adddoggo(): void {
    this.addingdoggo = true;
    this.selecteddoggo = null;
  }

  close(saveddoggo: Doggo): void {
    this.addingdoggo = false;
    if (saveddoggo) {
      this.getdoggos();
    }
  }

  deletedoggo(doggo: Doggo, event: any): void {
    event.stopPropagation();
    this.doggoService.delete(doggo).subscribe(res => {
      this.doggos = this.doggos.filter(h => h !== doggo);
      if (this.selecteddoggo === doggo) {
        this.selecteddoggo = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.getdoggos();
  }

  onSelect(doggo: Doggo): void {
    this.selecteddoggo = doggo;
    this.addingdoggo = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selecteddoggo.id]);
  }
}
