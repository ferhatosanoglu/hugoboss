
import { Component, OnInit } from '@angular/core';
import { Item, Period, Section, Events, NgxTimeSchedulerService } from 'ngx-time-scheduler';
import * as moment from 'moment';
import { P2Service } from '../../../utils';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {
  events: Events = new Events();
  periods!: Period[];
  sections!: Section[];
  items!: Item[];

  constructor(
    private service: NgxTimeSchedulerService,
    private _p2Service: P2Service,
  ) { }
  p2!: any;
  async ngOnInit() {
    this.periods = [
      {
        name: '1 ay',
        timeFrameHeaders: ['DD'],
        classes: 'buttonday',
        timeFrameOverall: 1440 * 16,
        timeFramePeriod: 1440,
      }];

    this.sections = [{
      name: 'P2',
      id: 2
    }];
    this.items = []


    this.p2 = await this._p2Service.listAsync();

    for (let x = 0; x < this.p2.length; x++) {
      if (this.p2[x]['DataList'].TESLIM_TARIHI == this.p2[x + 1]['DataList'].TESLIM_TARIHI || this.p2[x]['DataList'].URUN_GRUP_AD == this.p2[x + 1]['DataList'].URUN_GRUP_AD) {

      }
      else {
        this.items.push({
          id: this.p2[x]['DataList'].ORDER_KOD,
          sectionID: 2,
          name: this.p2[x]['DataList'].URUN_GRUP_AD,
          start: moment(this.p2[x]['DataList'].TESLIM_TARIHI).subtract(this.p2[0]['DataList'].MODEL_SURE - 24, 'h').startOf('day'),
          end: moment(this.p2[x]['DataList'].TESLIM_TARIHI).endOf('day'),
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

