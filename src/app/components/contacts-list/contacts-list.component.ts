import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import { ContactsService } from '../../services/contacts.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Contact } from '../../models/contacrt.model';
@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [MatListModule,CommonModule,MatIconModule,MatButtonModule],
template: `

  <mat-list >
      <mat-list-item *ngFor="let contact of contacts()">
          <h2 matListItemTitle>{{contact.name}}</h2>
          <p matListItemLine>{{contact.email}}</p>
          <button matListItemMeta mat-icon-button (click)="deleteContact(contact)">
            <mat-icon aria-label="label">delete</mat-icon>
          </button>
      </mat-list-item>
  </mat-list>



  `,
  styles: []
})
export class ContactsListComponent {

  contactService = inject(ContactsService)

  contacts = this.contactService.contacts
deleteContact(contact: Contact){

this.contactService.deleteContact(contact)

}
}
