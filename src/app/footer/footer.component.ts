import { Component, Input, OnInit } from '@angular/core';
import { Link, LinkSection } from '../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() links: Link[];
  @Input() brand: string;

  LinkSection = LinkSection;

  constructor() { }

  ngOnInit(): void {
  }

}
