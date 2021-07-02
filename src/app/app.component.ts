import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Cwl} from './cwl.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  resData:Cwl;
  answer = '';
  title = 'Angular App';
  @ViewChild('f') signUpForm: NgForm;
  clanTownHall = [];
  constructor() {}
  ngOnInit() {}
  onSubmit() {
    this.resData = JSON.parse(this.answer);
    console.log(this.resData);
    console.log(this.signUpForm);
    console.log(this.resData.clans[1].members[1].townHallLevel);
    this.resData.clans.forEach((clan) => {
      let townHall = {
        name: clan.name,
        '14': 0,
        '13': 0,
        '12': 0,
        '11': 0,
        '10': 0,
      };
      clan.members.forEach((member) => {
        switch (member.townHallLevel) {
          case 14:
            townHall[14] += 1;
            break;
          case 13:
            townHall[13] += 1;
            break;
          case 12:
            townHall[12] += 1;
            break;
          case 11:
            townHall[11] += 1;
            break;
          case 10:
            townHall[10] += 1;
            break;
        }
      });
      this.clanTownHall.push(townHall);
    });
    console.log(this.clanTownHall);
    this.signUpForm.reset();
  }
}
