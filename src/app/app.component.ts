import { Component, effect, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ContactsService } from './services/contacts.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatSnackBarModule
  ],
  template: `
    <mat-toolbar
      color="primary"
      style="display: flex; justify-content: space-between;"
    >
      <span>My total contact ({{totalContacts()}})</span>

      <button mat-icon-button routerLink="/add" routerLinkActive="active" [disabled]="_maxContact()">
        <mat-icon class="mat-18">add_circle</mat-icon>
      </button>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  contactServicee = inject(ContactsService)

  totalContacts = this.contactServicee.totalContacts
_maxContact = this.contactServicee.maxContact
snackBar = inject(MatSnackBar)


constructor(){

effect(()=>{


if(this.contactServicee.maxContact()){

  this.snackBar.open("you have reached your limit!!!","close")
}


})


}
}
