import { Injectable, computed, inject, signal } from '@angular/core';
import { Contact } from '../models/contacrt.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts = signal<Contact[]>([
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '555-1234',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '555-5678',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-8765',
    },
    {
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      phone: '555-4321',
    },
    {
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      phone: '555-6789',
    },
    {
      name: 'Diana Evans',
      email: 'diana.evans@example.com',
      phone: '555-9876',
    },
    {
      name: 'Ethan Harris',
      email: 'ethan.harris@example.com',
      phone: '555-3456',
    },
    {
      name: 'Fiona Clark',
      email: 'fiona.clark@example.com',
      phone: '555-6543',
    },
    {
      name: 'George Adams',
      email: 'george.adams@example.com',
      phone: '555-7890',
    },
    {
      name: 'Hannah Wilson',
      email: 'hannah.wilson@example.com',
      phone: '555-0987',
    },
    {
      name: 'Isaac Martinez',
      email: 'isaac.martinez@example.com',
      phone: '555-2345',
    },
    {
      name: 'Jasmine Lewis',
      email: 'jasmine.lewis@example.com',
      phone: '555-5432',
    },
    {
      name: 'Kyle Walker',
      email: 'kyle.walker@example.com',
      phone: '555-6781',
    },
    {
      name: 'Laura Young',
      email: 'laura.young@example.com',
      phone: '555-8761',
    },
    {
      name: 'Michael Scott',
      email: 'michael.scott@example.com',
      phone: '555-3210',
    },
    {
      name: 'Natalie King',
      email: 'natalie.king@example.com',
      phone: '555-4320',
    },
    {
      name: 'Oliver Wright',
      email: 'oliver.wright@example.com',
      phone: '555-2109',
    },
    {
      name: 'Paula Hall',
      email: 'paula.hall@example.com',
      phone: '555-3450',
    },
    {
      name: 'Quincy Lopez',
      email: 'quincy.lopez@example.com',
      phone: '555-6540',
    },
    {
      name: 'Rachel Allen',
      email: 'rachel.allen@example.com',
      phone: '555-7892',
    },
  ]);
  constructor() {}
  router = inject(Router);

  totalContacts = computed(()=> this.contacts().length)
maxContact = computed(()=> this.totalContacts() >= 20)
  addContact(newContact: Contact) {
    setTimeout(() => {
      this.contacts.update((contacts) => [newContact, ...contacts]);
      this.router.navigate(['']);
    }, 1000);
  }

  deleteContact(contact: Contact) {
    setTimeout(() => {
      this.contacts.update((contacts) =>
        contacts.filter((c) => c.email !== contact.email)
      );
    }, 1000);
  }
}
