import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
  ],
  template: `
    <div class="container">
      <h2>Add new contact!</h2>
      <div class="form">
        <mat-form-field>
          <input matInput [(ngModel)]="name" placeholder="Nam" />
        </mat-form-field>
        <mat-form-field>
          <input matInput [(ngModel)]="email" placeholder="Email" />
        </mat-form-field>
        <mat-form-field>
          <input matInput [(ngModel)]="phone" placeholder="Phone" />
        </mat-form-field>
      </div>
      <div class="actions">
        <button mat-raised-button color="primary" (click)="save()">Save</button>
        <button mat-raised-button routerLink="/">Back</button>
      </div>
    </div>
  `,
  styles: [
    `
      .actinos {
        display: flex;
        gap: 8px;
      }
      .container {
        padding: 24px;
      }
      .form {
        display: flex;
        gap: 8px;
        flex-direction: column;
      }
    `,
  ],
})
export class AddContactComponent {
  name = '';
  email = '';
  phone = '';

  contactService = inject(ContactsService)
  save() {
    const data = { name: this.name, email: this.email, phone: this.phone };
    this.contactService.addContact(data)
  }
}
