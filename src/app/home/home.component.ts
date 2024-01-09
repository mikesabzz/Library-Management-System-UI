import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	data: any;
	filteredData: any;
	searchQuery: string = '';

	constructor(private apiService: ApiService) {}

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
	checkAvailability(userId: number, index: number) {
		if(userId === null){
			this.filteredData[index].availability = "It's available";
		} else {
			this.filteredData[index].availability = "Its taken by [Name]";
		}
	}
	trackByIndex(index: number, item: any): number {
		return index;
	  }
}
