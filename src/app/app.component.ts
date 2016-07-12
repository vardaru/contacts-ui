import { Component } from '@angular/core';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { ContacteditorComponent } from './components/contacteditor/contacteditor.component';
import { ContactService } from './services/contact.service';
import { Contact } from './models/contact.model';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ContactlistComponent, ContacteditorComponent, MdToolbar, MD_SIDENAV_DIRECTIVES, MdIcon, MdButton],
  providers: [MdIconRegistry],
})
export class AppComponent {

  constructor(private contactService: ContactService) { }

  editContact(contact: Contact) {
    console.log('ContacteditEvent fired with payload : ' + JSON.stringify(contact));
    this.contactService.selectedContact = contact;
    this.contactService.editing = true;
  }

   onAddNewContact(){
    this.contactService.addNewContact();
  }
}
