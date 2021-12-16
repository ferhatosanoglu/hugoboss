import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service'

@Injectable({
  providedIn: 'root'
})
export class P12Service {

  constructor(
    private _apiFetchService: ApiFetchService,
  ) { }
  async listAsync() {
    return await this._apiFetchService.requestAsync(
      'GET',
      'p12',
      null!,
    );
  }
}
