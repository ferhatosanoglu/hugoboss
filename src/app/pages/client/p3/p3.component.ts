
import { Component, OnInit } from '@angular/core';
import { Item, Period, Section, Events, NgxTimeSchedulerService } from 'ngx-time-scheduler';
import * as moment from 'moment';
import { P23Service } from '../../../utils';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.scss']
})
export class P3Component implements OnInit {
  events: Events = new Events();
  periods!: Period[];
  sections!: Section[];
  items!: Item[];

  constructor(
    private service: NgxTimeSchedulerService,
    private _p23Service: P23Service,
  ) { }
  p3!: any;
  async ngOnInit() {


    this.periods = [
      {
        name: '1 Sene',
        timeFrameHeaders: ['MMM'],
        classes: 'button',
        timeFrameOverall: 1440 * 365,
        timeFramePeriod: 1440,
      },
      {
        name: '1 ay',
        timeFrameHeaders: ['MMM YYYY', 'DD'],
        classes: 'button',
        timeFrameOverall: 1440 * 16,
        timeFramePeriod: 1440,
      }];

    this.sections = [{
      name: 'P3',
      id: 3
    }];
    this.items = []


    this.p3 = await this._p23Service.listAsync();

    for (let x = 0; x < this.p3.length; x++) {
      if (this.p3[x]['DataList'].TESLIM_TARIHI == this.p3[x + 1]['DataList'].TESLIM_TARIHI) {

      }
      else {
        this.items.push({
          id: this.p3[x]['DataList'].ORDER_KOD,
          sectionID: 1,
          name: this.p3[x]['DataList'].URUN_GRUP_AD,
          start: moment(this.p3[x]['DataList'].TESLIM_TARIHI).subtract(this.p3[0]['DataList'].MODEL_SURE - 24, 'h').startOf('day'),
          end: moment(this.p3[x]['DataList'].TESLIM_TARIHI).endOf('day'),
          classes: ''
        })
      }
    }
  }

  popItem() {
    this.service.itemPop();
  }

  removeItem() {
    this.service.itemRemove(4);
  }

}

