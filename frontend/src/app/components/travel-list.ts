import {Component, Input} from '@angular/core';
import { Travel } from 'src/api-module';

@Component({
  selector: 'travel-list',
  styleUrls: ['travel-list.scss'],
  templateUrl: 'travel-list.html',
})
export class TravelList {
  @Input() travels: Travel[];
}
