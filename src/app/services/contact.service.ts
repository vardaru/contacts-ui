import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  public selectedContact: Contact;
  private contactsUrl = 'http://localhost:8080/api/v1/all';
  private saveUrl = 'http://localhost:8080/api/v1/save';
  public editing: boolean = false;
  public contacts: Contact[] = [];
  errorMessage: string;

  constructor(private http: Http) {
  }

  loadContacts() {
    this.getContacts()
      .subscribe(
      contacts => this.contacts = contacts,
      error => this.errorMessage = <any>error);
  }

  saveOrUpdate() {
    if (!this.selectedContact.id) {
      this.contacts.push(this.selectedContact);
    }
    this.postData(this.selectedContact)
      .subscribe(res => this.contacts = res.json())
      ;
  }

  addNewContact() {
    this.selectedContact = new Contact();
    this.editing = true;
  }

  private getContacts(): Observable<Contact[]> {
    return this.http.get(this.contactsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(JSON.stringify(body));
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(error.message || error);
  }

  private postData(contact: Contact): Observable<any> {
    const body = JSON.stringify(contact);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.saveUrl, body, { headers: headers });
  }

}
