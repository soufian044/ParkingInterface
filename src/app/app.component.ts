import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parking_spots = [];

  constructor(db: AngularFireDatabase) {
    db.list('parkingSlots').snapshotChanges(['child_changed', 'child_added', 'child_removed', 'child_moved']).subscribe(actions => {
      this.parking_spots = [];
      actions.forEach(action => {
        this.parking_spots.push(action.payload.toJSON());
      });
    });
  }

  getClass(spot) {
    if (parseFloat(spot['score']) >= 0.70) {
      return 'containerOccupied'
    } else {
      return 'container'
    }
  }
}
