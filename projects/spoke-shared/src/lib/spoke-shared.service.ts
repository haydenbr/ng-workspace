import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpokeSharedService {

  constructor() {}

  getTheStuff = () => 'shared service works!';
}
