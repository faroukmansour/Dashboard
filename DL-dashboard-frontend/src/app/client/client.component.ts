import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  
  ClientArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  name: string ="";
  lastname: string="";
  date_creation: Date | undefined;
  Nquotations!: number ;
  Nprojects!: number ;
  in_progress!: number ;
  growth!: number ;
  pending_payments!: number ;
  clients: any[] = [];

  currentStudentID = "";
  constructor(private http: HttpClient ,private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClient();

  }
  getAllClient(): void {
    this.clientService.getClients().subscribe(
      (response: any) => {
        // Check if the response is an array and assign it to the clients property
        if (Array.isArray(response)) {
          this.clients = response;
        } else {
          console.error('Invalid API response:', response);
        }
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }


  setDelete(data: any)
  {
    this.http.delete("http://localhost:8085/api/client/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Client Deletedddd")
        this.getAllClient();
    });
  }
}
