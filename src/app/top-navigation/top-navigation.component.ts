import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../domain';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  @Input() store: Store;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
