import {Component, OnInit, Input} from '@angular/core';
import {Contact} from '../contact';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() myContact: Contact;


  constructor() {
  }

  ngOnInit() {
  }

  toggleAtivateContact(event: MatSlideToggleChange): void {
    console.log('isActive', event.checked);
    // add code to activate or deactivate contact
  }
}