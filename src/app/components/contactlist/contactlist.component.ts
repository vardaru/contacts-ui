import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { AppComponent } from '../../app.component';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'contactlist',
  templateUrl: 'contactlist.component.html',
  styleUrls: ['contactlist.component.css'],
  directives:[MD_CARD_DIRECTIVES]
})
export class ContactlistComponent implements OnInit {

  @Output() editContactEvent = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {
    this.contactService.loadContacts();
  }

  ngOnInit() {}      

  onSelect(c: Contact) {
    console.log(c);
    this.contactService.selectedContact = c;
    this.editContactEvent.emit(c);
  }
}
