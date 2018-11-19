import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.scss']
})
export class QuestDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  id: Number;

  ngOnInit(): void {
    this.getQuest();
  }

  getQuest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
  }
}
