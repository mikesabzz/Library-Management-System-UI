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
		this.apiService.get().subscribe(
			(data) => {
				this.data = data;
				this.filteredData = this.data;
			},
			(error) => {
				console.error(error);
			}
		);
	}

	searchBooks(searchQuery: string): void {
		if (searchQuery.trim() === '') {
		  this.filteredData = this.data;
		} 
		else {
			for (let key in this.filteredData) {
				let item = this.filteredData[key];
				this.filteredData = item.title.toLowerCase().includes(searchQuery.toLowerCase())
			  }
		}
	  }
	generateImageUrl(itemId: number): string {
		itemId++;
		return `https://picsum.photos/seed/${itemId}/300/400`;
	  }
}
