import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8085/api/client';

  searchClients(name: string) {
    return this.http.get<any[]>(`${this.baseUrl}client/${name}`);
  }
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  private apiUrl = 'http://localhost:8085/api/client/add'; // Replace with your Node.js server URL


  addClient(ClientData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ClientData);
  }

  private Url = 'http://localhost:8085'; // Replace with your Node.js server URL

  login(name: string, lastname: string) {
    return this.http.post(`${this.Url}/login`, { name, lastname });
  }
}
