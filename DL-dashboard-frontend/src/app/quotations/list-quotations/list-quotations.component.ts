import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuotationService } from 'src/service/quotation.service';

@Component({
  selector: 'app-list-quotations',
  templateUrl: './list-quotations.component.html',
  styleUrls: ['./list-quotations.component.css']
})
export class ListQuotationsComponent implements OnInit {
  QuotationArray : any[] = [];
  isResultLoaded = false;
  showForm= false ;
  showForm1= false ;
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number = this.QuotationArray.length;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
  @Input() quotationItem: any; // Input for the item to be deleted
  pdfDownloadLink!: string ;
  constructor(private router: Router,private quotationService: QuotationService  ,private http: HttpClient ) { }

  ngOnInit(): void {
this.getAllQuotations();
this.fetchLastQuotationId();

  }
  darkOverlayVisible = false; // Control the visibility of the dark overlay

  id!:number;
  openForm(id : number){
    this.id=id;
    this.darkOverlayVisible = true; // Show the dark overlay

    // this.ClientToUpdate = studuent;
     this.showForm = true;
 
   }
 
   closeForm(){
     this.showForm = false;
     this.darkOverlayVisible = false; // Hide the dark overlay

   }

   openForm1(id : number){
    this.id=id;
    this.darkOverlayVisible = true; // Show the dark overlay

    // this.ClientToUpdate = studuent;
     this.showForm1 = true;
 
   }
 
   closeForm1(){
     this.showForm1 = false;
     this.darkOverlayVisible = false; // Hide the dark overlay

   }

  newquotation() {
		
		this.router.navigateByUrl('newQuotation');

	}
 lastQuotationId!: number;
  potentialNewQuotationId!: number; 

  
  fetchLastQuotationId() {
    this.quotationService.getLastId().subscribe(
      (response: any) => {
        this.lastQuotationId = response.lastId;
        this.calculatePotentialNewId();
      },
      (error) => {
        console.error('Error fetching last quotation ID:', error);
      }
    );
  }

  calculatePotentialNewId() {
    this.potentialNewQuotationId = this.lastQuotationId + 1;
    console.log(this.potentialNewQuotationId);
  }

  getAllQuotations(): void {
    this.quotationService.getQuotations().subscribe(
      (response: any) => {
        // Check if the response is an array and assign it to the clients property
        if (Array.isArray(response)) {
          this.QuotationArray = response;
          console.log(this.QuotationArray);
          this.filteredQuotationArray = [...this.QuotationArray];


        } else {
          console.error('Invalid API response:', response);
          console.log(response.id);
        }
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }


  setDelete(id: number)
  {
    this.http.delete("http://localhost:8085/api/quotation/delete"+ "/"+ id).subscribe((resultData: any)=>
    {
        console.log(id);
        this.getAllQuotations();
    });
    this.confirmed.emit();
    window.location.reload();


  }


  copyLink() {
    const linkSpan = document.getElementById('linkSpan') as HTMLSpanElement;

    if (linkSpan) {
      const textArea = document.createElement('textarea');
      textArea.value = linkSpan.innerText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }

  updatePdfDownloadLink(id: number): void {
    this.pdfDownloadLink = `http://localhost:8085/api/quotation/download/${id}`;
  }

  // Function to trigger the download
  downloadPdf(): void {
    window.location.href = this.pdfDownloadLink;
  }


 // Function to print the light PDF version
 printLightPDF(id: number): void {
  const url = `http://localhost:8085/api/quotation/print/light/${id}`;
  this.printPDF(url);
}

// Function to print the dark PDF version
printDarkPDF(id: number): void {
  const url = `http://localhost:8085/api/quotation/print/dark/${id}`;
  this.printPDF(url);
}

private printPDF(url: string): void {
  const newWindow = window.open(url, '_blank');
  if (newWindow) {
    newWindow.onload = () => {
      newWindow.print();
      newWindow.onafterprint = () => {
        newWindow.close();
      };
    };
  } else {
    alert('Popup blocked. Please allow popups for this site and try again.');
  }
}

filteredQuotationArray: any[] = [];


// Function to filter data based on service type, date range, and search query
filterData() {
  this.filteredQuotationArray = this.QuotationArray.filter(StudentItem => {
    const typeCondition =
      this.selectedType === '' ||
      this.selectedType === 'All' ||
      (this.selectedType === 'Branding' && StudentItem.branding == 1) ||
      (this.selectedType === 'UX UI Design' && StudentItem.design == 1) ||
      (this.selectedType === 'Web Dev' && StudentItem.web == 1) ||
      (this.selectedType === 'Mobile dev' && StudentItem.mobile == 1) ||
      (this.selectedType === 'Dashboard' && StudentItem.dashboard == 1) ||
      (this.selectedType === 'Web 3' && StudentItem.web3 == 1) ||
      (this.selectedType === 'Motion Design' && StudentItem.motion == 1);

    const dateCondition =
      this.selectedDate === '' || // If no date selected, include all records
      (this.selectedDate !== '' && new Date(StudentItem.creation_date) >= new Date(this.selectedDate)); // Check if creation date is greater than or equal to selected date

    const searchCondition =
      !this.searchQuery || // If no search query, include all records
      this.searchInProperties(StudentItem, this.searchQuery); // Check if the item matches the search query in relevant properties

    return typeCondition && dateCondition && searchCondition;
  });

  // After filtering, reset the current page to 1
  this.currentPage = 1;
}

// Function to search in relevant properties
searchInProperties(item: any, query: string): boolean {
  // Define an array of properties to search in, including 'name', 'description', and 'id'
  const propertiesToSearchIn = ['name', 'auteur', 'id', 'ClientName', 'Societe']; // Add all relevant properties

  // Loop through the properties and check if the query matches any of them
  for (const property of propertiesToSearchIn) {
    if (
      item[property] !== undefined && // Check if the property exists
      item[property] !== null &&      // Check if the property is not null
      item[property].toString().toLowerCase().includes(query.toLowerCase())
    ) {
      return true; // Return true if a match is found in any property
    }
  }

  return false; // Return false if no match is found in any property
}

searchQuery: string = '';

selectedType: string = '';
selectedDate: string = ''; // Selected date range


}
