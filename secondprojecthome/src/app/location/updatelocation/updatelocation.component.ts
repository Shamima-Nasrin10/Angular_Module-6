import { Component, OnInit } from '@angular/core';
import { Location } from '../location.model';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrl: './updatelocation.component.css'
})
export class UpdatelocationComponent implements OnInit {

  id: string = "";
  location: Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.location = new Location();
    this.id = this.route.snapshot.params['id'];
    this.locationService.getById(this.id)

      .subscribe({
        next: res => {
          this.location = res;
          console.log(res);
        },

        error: error => {
          console.log(error);
        }
      });
  }

  updateLocation() {
    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: res => {
          this.location=new Location();
          this.router.navigate(['location']);

        },
        error: error => {
          console.log(error);
        }
      })
  }

}
