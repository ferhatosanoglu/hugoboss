import { Component, OnInit } from '@angular/core';
import { Item, Period, Section, Events, NgxTimeSchedulerService } from 'ngx-time-scheduler';
import * as moment from 'moment';
import { P1Service } from '../../../utils';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  events: Events = new Events();
  periods!: Period[];
  sections!: Section[];
  items!: Item[];

  constructor(
    private service: NgxTimeSchedulerService,
    private _p1Service: P1Service,
  ) { }
  p1!: any;
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
      name: 'P1',
      id: 1
    },
    {
      name: 'P2',
      id: 2
    },
    {
      name: 'P3',
      id: 3
    },];
    this.items = []


    this.p1 = await this._p1Service.listAsync();

    for (let x = 0; x < this.p1.length; x++) {
      if (this.p1[x]['DataList'].TESLIM_TARIHI == this.p1[x + 1]['DataList'].TESLIM_TARIHI) {

      }
      else {
        this.items.push({
          id: this.p1[x]['DataList'].ORDER_KOD,
          sectionID: 1,
          name: this.p1[x]['DataList'].URUN_GRUP_AD,
          start: moment(this.p1[x]['DataList'].TESLIM_TARIHI).subtract(this.p1[0]['DataList'].MODEL_SURE - 24, 'h').startOf('day'),
          end: moment(this.p1[x]['DataList'].TESLIM_TARIHI).endOf('day'),
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

