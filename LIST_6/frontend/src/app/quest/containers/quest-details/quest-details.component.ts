import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestService } from '../../services';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.scss']
})
export class QuestDetailsComponent implements OnInit {

  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: QuestService) { }

  ngOnInit(): void {
    this.service.summary(this.getQuest()).subscribe(res => {
      this.data = res.data;
    });
  }

  getQuest(): number {
    const id = + this.route.snapshot.paramMap.get('id');
    return id;
  }
}
