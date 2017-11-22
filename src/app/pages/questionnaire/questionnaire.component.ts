import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  UserOrderingParam = {
    Ask: "",
    PeoPleNum: "",
    Menus: [],
    OrderPeopleType: 0
  };
  constructor() { }

  ngOnInit() {
  }
  submit() {
    console.log('submit click');
  }
}
