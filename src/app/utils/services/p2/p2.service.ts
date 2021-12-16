import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service'

@Injectable({
  providedIn: 'root'
})
export class P2Service {

  constructor(
    private _apiFetchService: ApiFetchService,
  ) { }
  async listAsync() {
    return await this._apiFetchService.requestAsync(
      'GET',
      'p2',
      null!,
    );
  }
}
