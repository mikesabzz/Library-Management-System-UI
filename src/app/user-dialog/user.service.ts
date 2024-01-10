import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', libraryCardNumber: '123' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', libraryCardNumber: '456' },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<User> {
    const existingUser = this.users.find((u) => 
        u.firstName.toLowerCase() === user.firstName.toLowerCase() &&
        u.lastName.toLowerCase() === user.lastName.toLowerCase() &&
        u.libraryCardNumber === user.libraryCardNumber
    );
    if (existingUser) {
        user.id = existingUser.id;
      } else {
        user.id = this.users.length + 1;
        this.users.push(user);
      }
  
      return of(user);
  }
}
