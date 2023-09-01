import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private apiUrl = 'http://localhost:8085/api/quotation/add'; // Replace with your Node.js server URL

  constructor(private http: HttpClient) {}

  addQuotation(quotationData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, quotationData);
  }

  addCheck(Data: any): Observable<any> {
    return this.http.post<any>('http://localhost:8085/api/checkboxes', Data);
  }

  private baseUrl = 'http://localhost:8085/api/quotation';
  private baseUrl1 = 'http://localhost:8085';

 
  getLastId() {
    return this.http.get<number>(this.baseUrl1 + '/lastid');
  }
  getQuotations(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  
  getQuotation(id: number) {
    return this.http.get<any>(`${this.baseUrl}/edit/${id}`);
  }

  updateQuotation(id: number,quotationData: any ) {
    return this.http.put<any>(`${this.baseUrl}/edit/${id}`, quotationData);
  }

  updateCheckboxBrandingValue(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/BrandingValue/${qotationId}`, checkboxData);
  }
  updateCheckboxBrandingValue1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/BrandingValue1/${qotationId}`, checkboxData);
  }
  updateCheckboxBrandingValue2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/BrandingValue2/${qotationId}`, checkboxData);
  }
  updateCheckboxvalue(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/value/${qotationId}`, checkboxData);
  }
  updateCheckboxvalue1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/value1/${qotationId}`, checkboxData);
  } updateCheckboxvalue2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/value2/${qotationId}`, checkboxData);
  } updateCheckboxvalue3(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/value3/${qotationId}`, checkboxData);
  } updateCheckboxvalue4(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/value4/${qotationId}`, checkboxData);
  }
  updateCheckboxWebValue(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/WebValue/${qotationId}`, checkboxData);
  }
  updateCheckboxWebValue1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/WebValue1/${qotationId}`, checkboxData);
  } updateCheckboxWebValue2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/WebValue2/${qotationId}`, checkboxData);
  }
  updateCheckboxMobileValue(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/MobileValue/${qotationId}`, checkboxData);
  }
  updateCheckboxMobileValue1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/MobileValue1/${qotationId}`, checkboxData);
  } updateCheckboxMobileValue2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/MobileValue2/${qotationId}`, checkboxData);
  }
  updateCheckboxDashboardValue(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/DashboardValue/${qotationId}`, checkboxData);
  }
  updateCheckboxDashboardValue1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/DashboardValue1/${qotationId}`, checkboxData);
  }updateCheckboxDashboardValue2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/DashboardValue2/${qotationId}`, checkboxData);
  }
  updateCheckboxWeb3Value(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/Web3Value/${qotationId}`, checkboxData);
  }
  updateCheckboxWeb3Value1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/Web3Value1/${qotationId}`, checkboxData);
  }updateCheckboxWeb3Value2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/Web3Value2/${qotationId}`, checkboxData);
  }
  updateCheckboxMotionValue(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/MotionValue/${qotationId}`, checkboxData);
  }
  updateCheckboxMotionValue1(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/MotionValue1/${qotationId}`, checkboxData);
  }updateCheckboxMotionValue2(qotationId: number, checkboxData: any) {
    return this.http.put<any>(`http://localhost:8085/api/checkbox/MotionValue2/${qotationId}`, checkboxData);
  }

   // Function to add a new checkbox to the server
   addCheckbox(label: string) {
    return this.http.post('http://localhost:8085/api/checkboxes', { label });
  }

   // Function to add a new checkbox to the server
   addCheckbox1(label1: string) {
    return this.http.post('http://localhost:8085/api/checkboxes1', { label1 });
  }
   // Function to add a new checkbox to the server
   addCheckbox2(label2: string) {
    return this.http.post('http://localhost:8085/api/checkboxes2', { label2 });
  }
   // Function to add a new checkbox to the server
   addCheckbox3(label3: string) {
    return this.http.post('http://localhost:8085/api/checkboxes3', { label3 });
  }
   // Function to add a new checkbox to the server
   addCheckbox4(label4: string) {
    return this.http.post('http://localhost:8085/api/checkboxes4', { label4 });
  }

  // Function to retrieve checkboxes from the serve
    getCheckboxes(qotationId: number) {
      return this.http.get(`http://localhost:8085/api/checkboxes/${qotationId}`);
    }
    
  

  getCheckboxes1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxes1/${qotationId}`);
  }
  getCheckboxes2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxes2/${qotationId}`);
  }
  getCheckboxes3(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxes3/${qotationId}`);
  }
  getCheckboxes4(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxes4/${qotationId}`);
  }

  getCheckboxesbrandingLabel(qotationId: number) {
    return this.http.get<any>(`http://localhost:8085/api/checkboxesbrandingLabel/${qotationId}`);
    

  }

  getCheckboxesbrandingLabel1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesbrandingLabel1/${qotationId}`);
  }

  getCheckboxesbrandingLabel2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesbrandingLabel2/${qotationId}`);
  }

  getCheckboxeswebLabel(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxeswebLabel/${qotationId}`);

  }

  getCheckboxeswebLabel1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxeswebLabel1/${qotationId}`);
  }

  getCheckboxeswebLabel2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxeswebLabel2/${qotationId}`);
  }

  getCheckboxesMobileLabel(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesMobileLabel/${qotationId}`);

  }

  getCheckboxesMobileLabel1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesMobileLabel1/${qotationId}`);
  }

  getCheckboxesMobileLabel2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesMobileLabel2/${qotationId}`);
  }

  getCheckboxesDashboardLabel(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesDashboardLabel/${qotationId}`);

  }

  getCheckboxesDashboardLabel1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesDashboardLabel1/${qotationId}`);
  }

  getCheckboxesDashboardLabel2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesDashboardLabel2/${qotationId}`);
  }

  getCheckboxesWeb3Label(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesWeb3Label/${qotationId}`);

  }

  getCheckboxesWeb3Label1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesWeb3Label1/${qotationId}`);
  }

  getCheckboxesWeb3Label2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesWeb3Label2/${qotationId}`);
  }

  getCheckboxesMotionLabel(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesMotionLabel/${qotationId}`);

  }

  getCheckboxesMotionLabel1(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesMotionLabel1/${qotationId}`);
  }

  getCheckboxesMotionLabel2(qotationId: number) {
    return this.http.get(`http://localhost:8085/api/checkboxesMotionLabel2/${qotationId}`);
  }
  
  
}
