import { Pipe, PipeTransform } from '@angular/core';
import { Link, LinkSection } from '../../domain';

@Pipe({
  name: 'linkSection'
})
export class LinkSectionPipe implements PipeTransform {

  transform(value: Link[], section: LinkSection): Link[] {
    return value.filter((link: Link) => link.section === section);
  }

}
