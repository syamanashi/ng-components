import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ss-hacker-status',
  template: `
    <div class="status-pulse">
      <span class="pulse" [ngClass]="color"></span>
      <span class="dot" [ngClass]="color"></span>
    </div>
  `,
  styleUrls: ['./hacker-status.component.scss'],
})
export class HackerStatusComponent implements OnInit {
  @Input() status: 'safe' | 'warning' | 'danger';
  color: string;

  constructor() {}

  ngOnInit() {
    this.color = this.statusToColor(this.status);
  }

  statusToColor(status: 'safe' | 'warning' | 'danger') {
    switch (status) {
      case 'danger':
        return 'red';
      case 'safe':
        return 'green';
      case 'warning':
        return 'yellow';
      default:
        return 'green';
    }
  }
}
