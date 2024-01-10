import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { UserService } from '../user-dialog/user.service';
import { User } from '../user-dialog/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	data: any;
	filteredData: any;
	searchQuery: string = '';
	reserveButton: boolean[] = [];

	constructor(private apiService: ApiService, private userService: UserService, public dialog: MatDialog) {}

	ngOnInit(): void {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		this.apiService.get().subscribe(
			(data) => {
	  		this.data = data.books;
	  		this.filteredData = this.data.map((book: any) => ({ ...book, availability: '' }));
	  		console.log(this.filteredData);
		},
		(error) => {
	  		console.error(error);
		}
  		);
	}

	searchBooks(searchQuery: string): void {
		if (searchQuery.trim() === '') {
		  this.filteredData = this.data.map((book: any) => ({ ...book, availability: '' }));
		} else {
			this.filteredData = this.data.filter((item: { title: string; }) =>
			  item.title.toLowerCase().includes(searchQuery.toLowerCase())
			  ).map((book: any) => ({ ...book, availability: '' }));
		  }
	  }
	  reload() {
		this.searchQuery = '';
		this.filteredData = this.data.map((book: any) => ({ ...book, availability: '' }));
	  }
	generateImageUrl(itemId: number): string {
		itemId++;
		return `https://picsum.photos/seed/${itemId}/300/400`;
	  }
	checkAvailability(userId: number, index: number): void {
		if(userId === null){
			this.filteredData[index].availability = "It's available";
			this.reserveButton[index] = true;
		} else {
			this.userService.getUsers().subscribe((users: User[]) => {
			  const foundUser = users.find(user => user.id === userId);
			  if (foundUser) {
				const fullName = `${foundUser.firstName} ${foundUser.lastName}`;
				this.filteredData[index].availability = `It's taken by ${fullName}`;
			  } else {
				this.filteredData[index].availability = "It's taken by an unknown user";
			  }
			  this.reserveButton[index] = false;
			});
		  }
	}
	trackByIndex(index: number, item: any): number {
		return index;
	  }
	reservePopUp(index: number): void{
		const dialogRef = this.dialog.open(UserDialogComponent, {
			data: { index: index },
		  });
		
		  dialogRef.afterClosed().subscribe((result: User)=> {
			console.log(index);
			if (result) {
				console.log(result);
				this.userService.addUser(result).subscribe((addedUser: User) => {
				  this.filteredData[index].availability = `It's taken by ${addedUser.firstName} ${addedUser.lastName}`;
				  this.reserveButton[index] = false;
				});
			  }
		  });
	}
}
