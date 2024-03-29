import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {
  firstName: string = '';
  lastName: string = '';
  libraryCardNumber: string = '';
  libraryCardNumberTaken: boolean = false;

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  submitForm(): void {
    const newUser = {id: 0, firstName: this.firstName, lastName: this.lastName, libraryCardNumber: this.libraryCardNumber };

    this.userService.addUser(newUser).subscribe((addedUser: User) => {
      newUser.id = addedUser.id;
      this.dialogRef.close(newUser);
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
