import { Component, OnInit, Input} from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'contacteditor',
  templateUrl: 'contacteditor.component.html',
  styleUrls: ['contacteditor.component.css'],
  directives: [MdButton,MdInput, MD_CARD_DIRECTIVES],
})
export class ContacteditorComponent implements OnInit {
  @Input() contact: Contact = new Contact();
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    console.log('ContactEditor onInitied....');
  }

  onSubmit(){
    console.log("Submiting form...");
    this.contactService.saveOrUpdate();
    this.contactService.editing=false;
  }

  onCancel(){
    console.log("Cancel form submission...");
    this.contactService.editing=false;
  }
}
