import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	title = 'test';
	timeEntries: any[] = []; // Declare the timeEntries array

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.getTimeEntries();
	}

	getTimeEntries() {
		const apiUrl = 'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==';

		this.http.get(apiUrl).subscribe(
            (data: any) => {
              this.timeEntries = data; // Assign retrieved data to timeEntries
              console.log(this.timeEntries); // Check if data is populated
            },
            (error: any) => {
              console.log('Error occurred:', error);
            }
          );
          
	}
}
