import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuotationService } from 'src/service/quotation.service';

@Component({
  selector: 'app-edit-quotations',
  templateUrl: './edit-quotations.component.html',
  styleUrls: ['./edit-quotations.component.css']
})
export class EditQuotationsComponent implements OnInit {
  value!: string ;
  value1!: string ;
  value2!: string ;
  value3!: string ;
  value4!: string ;
  BrandingValue!: string ;
  BrandingValue1!: string ;
  BrandingValue2!: string ;
  WebValue!: string ;
  WebValue1!: string ;
  WebValue2!: string ;
  MobileValue!: string ;
  MobileValue1!: string ;
  MobileValue2!: string ;
  DashboardValue!: string ;
  DashboardValue1!: string ;
  DashboardValue2!: string ;
  Web3Value!: string ;
  Web3Value1!: string ;
  Web3Value2!: string ;
  MotionValue!: string ;
  MotionValue1!: string ;
  MotionValue2!: string ;

  quotation: any;
  id!: number;
  name!: string;
  ClientName!:string;
  selectedTemplate!: string;
  creation_date!:string;
  societe!:string;
  tva!:string;
  reduction!:string;
  auteur!:string;
  branding!:string;
  web!:string;
  design!:string;
  web3!:string;
  mobile!:string;
  dashboard!:string;
  motion!:string;
  TempsBranding	:string='';
  TempsDesign	:string='';
  TempsWeb	:string='';
  TempsMobile	:string='';
  TempsWeb3:string='';
  TempsDashboard:string='';
  TempsMotion	:string='';
  
  TarifBranding:string='';
  TarifDesign:string='';
  TarifWeb:string='';
  TarifMobile:string='';
  TarifWeb3:string='';
  TarifDashboard:string='';
  TarifMotion:string='';




  label!: string;
  label1!: string;
  label2!: string;
  label3!: string;
  label4!: string;
  brandingLabel!: string;
  brandingLabel1!: string;
  brandingLabel2!: string;
  webLabel!: string;
  webLabel1!: string;
  webLabel2!: string;
  MobileLabel!: string;
  MobileLabel1!: string;
  MobileLabel2!: string;
  DashboardLabel!: string;
  DashboardLabel1!: string;
  DashboardLabel2!: string;
  Web3Label!: string;
  Web3Label1!: string;
  Web3Label2!: string;
  MotionLabel!: string;
  MotionLabel1!: string;
  MotionLabel2!: string;

  checkboxes: any[] = []
  checkboxes1: any[] = []
  checkboxes2: any[] = []
  checkboxes3: any[] = []
  checkboxes4: any[] = []
  brandingcheckboxes: any[] = []
  brandingcheckboxes1: any[] = []
  brandingcheckboxes2: any[] = []
  webcheckboxes: any[] = []
  webcheckboxes1: any[] = []
  webcheckboxes2: any[] = []
  mobilecheckboxes: any[] = []
  mobilecheckboxes1: any[] = []
  mobilecheckboxes2: any[] = []
  dashboardcheckboxes: any[] = []
  dashboardcheckboxes1: any[] = []
  dashboardcheckboxes2: any[] = []
  web3checkboxes: any[] = []
  web3checkboxes1: any[] = []
  web3checkboxes2: any[] = []
  motioncheckboxes: any[] = []
  motioncheckboxes1: any[] = []
  motioncheckboxes2: any[] = []
  




  commentaire!:string;
  users: string[] = ['Achraf Azaiez', 'User 2', 'User 3']; 

  clientSelected: boolean = false;
  selectedClient: any;
  fullName: string = ''; // To store the concatenated name

  showForm= false ;
  showForm1= false ;
  showForm2 = false;
  showForm3 = false;
  showForm4 = false;
  showForm5 = false;
  showForm6 = false;
  brandingshowForm = false;
  brandingshowForm1 = false;
  brandingshowForm2 = false;
  webshowForm = false;
  webshowForm1 = false;
  webshowForm2 = false;
  mobileshowForm = false;
  mobileshowForm1 = false;
  mobileshowForm2 = false;
  dashboardshowForm = false;
  dashboardshowForm1 = false;
  dashboardshowForm2 = false;
  web3showForm = false;
  web3showForm1 = false;
  web3showForm2 = false;
  motionshowForm = false;
  motionshowForm1 = false;
  motionshowForm2 = false;


  check = true;

  selectedDate!: Date;

  clients: any[] = [];
  searchTerm: string = '';
  filteredClients: any[] = [];
  form: FormGroup;

  lastname: string = '';
  adress: string = '';
  pays!: string ;
  email: string = '';
  phone_number!: number ;
  code_postal!: number ;
  constructor(
    private route: ActivatedRoute,
    private quotationService: QuotationService,
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      checkboxes: this.formBuilder.array([]),
    });

   }
  ngOnInit() {

  
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.qotationId = this.id;
      console.log("qotationId",this.qotationId);
      this.getQuotation();
      this.retrieveCheckboxesBrandingLabel();
    });
    this.getAllClients();
    this.fetchLastQuotationId();
    this.retrieveCheckboxes1();
    this.retrieveCheckboxes2();
    this.retrieveCheckboxes3();
    this.retrieveCheckboxes4();

    this.retrieveCheckboxes();

    this.retrieveCheckboxesBrandingLabel1();
    this.retrieveCheckboxesBrandingLabel2();
    this.retrieveCheckboxesWebLabel();
    this.retrieveCheckboxesWebLabel1();
    this.retrieveCheckboxesWebLabel2();
    this.retrieveCheckboxesMobileLabel();
    this.retrieveCheckboxesMobileLabel1();
    this.retrieveCheckboxesMobileLabel2();
    this.retrieveCheckboxesDashboardLabel();
    this.retrieveCheckboxesDashboardLabel1();
    this.retrieveCheckboxesDashboardLabel2();
    this.retrieveCheckboxesWeb3Label();
    this.retrieveCheckboxesWeb3Label1();
    this.retrieveCheckboxesWeb3Label2();
    this.retrieveCheckboxesMotionLabel();
    this.retrieveCheckboxesMotionLabel1();
    this.retrieveCheckboxesMotionLabel2();






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



  getQuotation() {
    this.quotationService.getQuotation(this.id).subscribe(
      (quotation) => {
        this.quotation = quotation;
        this.selectedTemplate=quotation.name;
        this.ClientName=quotation.ClientName;
        this.auteur=quotation.auteur;
        this.societe=quotation.societe;
        this.commentaire=quotation.commentaire;
        this.tva=quotation.tva;
        this.reduction=quotation.reduction;
this.branding=quotation.branding;
this.web=quotation.web;
this.design=quotation.design;
this.web3=quotation.web3;
this.mobile=quotation.mobile;
this.dashboard=quotation.dashboard;
this.motion=quotation.motion;

this.TarifBranding=quotation.TarifBranding;
this.TarifDashboard=quotation.TarifDashboard;
this.TarifDesign=quotation.TarifDesign;
this.TarifMobile=quotation.TarifMobile;
this.TarifMotion=quotation.TarifMotion;
this.TarifWeb=quotation.TarifWeb;
this.TarifWeb3=quotation.TarifWeb3;
this.TempsBranding=quotation.TempsBranding;
this.TempsDashboard=quotation.TempsDashboard;
this.TempsDesign=quotation.TempsDesign;
this.TempsMobile=quotation.TempsMobile;
this.TempsMotion=quotation.TempsMotion;
this.TempsWeb=quotation.TempsWeb;
this.TempsWeb3=quotation.TempsWeb3;
this.Design1=quotation.Design1;
this.Design2=quotation.Design2;
this.Design3=quotation.Design3;
this.Design4=quotation.Design4;
this.Design5=quotation.Design5;
this.Design11=quotation.Design11;
this.Design12=quotation.Design12;
this.Design13=quotation.Design13;
this.Design14=quotation.Design14;
this.Design15=quotation.Design15;
this.Design21=quotation.Design21;
this.Design22=quotation.Design22;
this.Design23=quotation.Design23;
this.Design24=quotation.Design24;
this.Design25=quotation.Design25;
this.Design31=quotation.Design31;
this.Design32=quotation.Design32;
this.Design33=quotation.Design33;
this.Design34=quotation.Design34;
this.Design35=quotation.Design35;
this.Design41=quotation.Design41;
this.Design42=quotation.Design42;
this.Design43=quotation.Design43;
this.Design44=quotation.Design44;
this.Design45=quotation.Design45;
this.Design51=quotation.Design51;
this.Design52=quotation.Design52;
this.Design53=quotation.Design53;
this.Design54=quotation.Design54;
this.Design55=quotation.Design55;
this.Dashboard1=quotation.Dashboard1;
this.Dashboard2=quotation.Dashboard2;
this.Dashboard3=quotation.Dashboard3;

this.Dashboard11=quotation.Dashboard11;
this.Dashboard12=quotation.Dashboard12;
this.Dashboard13=quotation.Dashboard13;
this.Dashboard14=quotation.Dashboard14;
this.Dashboard15=quotation.Dashboard15;
this.Dashboard21=quotation.Dashboard21;
this.Dashboard22=quotation.Dashboard22;
this.Dashboard23=quotation.Dashboard23;
this.Dashboard24=quotation.Dashboard24;
this.Dashboard25=quotation.Dashboard25;
this.Dashboard31=quotation.Dashboard31;
this.Dashboard32=quotation.Dashboard32;
this.Dashboard33=quotation.Dashboard33;
this.Dashboard34=quotation.Dashboard34;
this.Dashboard35=quotation.Dashboard35;

this.Branding1=quotation.Branding1;
this.Branding2=quotation.Branding2;
this.Branding3=quotation.Branding3;
this.Branding11=quotation.Branding11;
this.Branding12=quotation.Branding12;
this.Branding13=quotation.Branding13;
this.Branding14=quotation.Branding14;
this.Branding15=quotation.Branding15;
this.Branding21=quotation.Branding21;
this.Branding22=quotation.Branding22;
this.Branding23=quotation.Branding23;
this.Branding24=quotation.Branding24;
this.Branding25=quotation.Branding25;
this.Branding31=quotation.Branding31;
this.Branding32=quotation.Branding32;
this.Branding33=quotation.Branding33;
this.Branding34=quotation.Branding34;
this.Branding35=quotation.Branding35;
this.Web1=quotation.Web1;
this.Web2=quotation.Web2;
this.Webb3=quotation.Webb3;
this.Web11=quotation.Web11;
this.Web12=quotation.Web12;
this.Web13=quotation.Web13;
this.Web14=quotation.Web14;
this.Web15=quotation.Web15;
this.Web21=quotation.Web21;
this.Web22=quotation.Web22;
this.Web23=quotation.Web23;
this.Web24=quotation.Web24;
this.Web25=quotation.Web25;
this.Web31=quotation.Web31;
this.Web32=quotation.Web32;
this.Web33=quotation.Web33;
this.Web34=quotation.Web34;
this.Web35=quotation.Web35;
this.Mobile1=quotation.Mobile1;
this.Mobile2=quotation.Mobile2;
this.Mobile3=quotation.Mobile3;
this.Mobile11=quotation.Mobile11;
this.Mobile12=quotation.Mobile12;
this.Mobile13=quotation.Mobile13;
this.Mobile14=quotation.Mobile14;
this.Mobile15=quotation.Mobile15;
this.Mobile21=quotation.Mobile21;
this.Mobile22=quotation.Mobile22;
this.Mobile23=quotation.Mobile23;
this.Mobile24=quotation.Mobile24;
this.Mobile25=quotation.Mobile25;
this.Mobile31=quotation.Mobile31;
this.Mobile32=quotation.Mobile32;
this.Mobile33=quotation.Mobile33;
this.Mobile34=quotation.Mobile34;
this.Mobile35=quotation.Mobile35;
this.Motion1=quotation.Motion1;
this.Motion2=quotation.Motion2;
this.Motion3=quotation.Motion3;
this.Motion11=quotation.Motion11;
this.Motion12=quotation.Motion12;
this.Motion13=quotation.Motion13;
this.Motion14=quotation.Motion14;
this.Motion15=quotation.Motion15;
this.Motion21=quotation.Motion21;
this.Motion22=quotation.Motion22;
this.Motion23=quotation.Motion23;
this.Motion24=quotation.Motion24;
this.Motion25=quotation.Motion25;
this.Motion31=quotation.Motion31;
this.Motion32=quotation.Motion32;
this.Motion33=quotation.Motion33;
this.Motion34=quotation.Motion34;
this.Motion35=quotation.Motion35;
this.Webbb1=quotation.Webbb1;
this.Webbb2=quotation.Webbb2;
this.Webbb3=quotation.Webbb3;
this.Webbb11=quotation.Webbb11;
this.Webbb12=quotation.Webbb12;
this.Webbb13=quotation.Webbb13;
this.Webbb14=quotation.Webbb14;
this.Webbb15=quotation.Webbb15;
this.Webbb21=quotation.Webbb21;
this.Webbb22=quotation.Webbb22;
this.Webbb23=quotation.Webbb23;
this.Webbb24=quotation.Webbb24;
this.Webbb25=quotation.Webbb25;
this.Webbb31=quotation.Webbb31;
this.Webbb32=quotation.Webbb32;
this.Webbb33=quotation.Webbb33;
this.Webbb34=quotation.Webbb34;
this.Webbb35=quotation.Webbb35;



const isoDate = quotation.creation_date;
const utcDate = new Date(isoDate); // Convert ISO date to JavaScript Date object
const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000); // Convert to local time
this.creation_date = localDate.toISOString().substr(0, 10);

        console.log(quotation.creation_date);
        console.log("Dashboard1",quotation.Dashboard1);
        console.log("Dashboard1",quotation.Dashboard2);
        console.log("Dashboard1",quotation.Dashboard3);
        console.log("nameeeeeee",quotation.name);






      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateQuotation() {
    const quotationData = {
      name: this.selectedTemplate, // Use 'selectedTemplate' for the 'name' field
      ClientName: this.ClientName, // Use 'ClientName' for the 'ClientName' field
      societe:this.societe,
      commentaire:this.commentaire,
      auteur:this.auteur,
      creation_date:this.creation_date,
      reduction:this.reduction,
      tva:this.tva,
      branding:this.branding,
      web:this.web,
      design:this.design,
      dashboard:this.dashboard,
      mobile:this.mobile,
      motion:this.motion,
      web3:this.web3,
      TarifBranding:this.TarifBranding,
      TarifDashboard:this.TarifDashboard,
      TarifDesign:this.TarifDesign,
      TarifMobile:this.TarifMobile,
      TarifMotion:this.TarifMotion,
      TarifWeb:this.TarifWeb,
      TarifWeb3:this.TarifWeb3,
      TempsBranding:this.TempsBranding,
      TempsDashboard:this.TempsDashboard,
      TempsDesign:this.TempsDesign,
      TempsMobile:this.TempsMobile,
      TempsMotion:this.TempsMotion,
      TempsWeb:this.TempsWeb,
      TempsWeb3:this.TempsWeb3,

      Design1:this.Design1,
      Design2:this.Design2,
      Design3:this.Design3,
      Design4:this.Design4,
      Design5:this.Design5,

      Design11:this.Design11,
      Design12:this.Design12,
      Design13:this.Design13,
      Design14:this.Design14,
      Design15:this.Design15,
      Design21:this.Design21,
      Design22:this.Design22,
      Design23:this.Design23,
      Design24:this.Design24,
      Design25:this.Design25,
      Design31:this.Design31,
      Design32:this.Design32,
      Design33:this.Design33,
      Design34:this.Design34,
      Design35:this.Design35,
      Design41:this.Design41,
      Design42:this.Design42,
      Design43:this.Design43,
      Design44:this.Design44,
      Design45:this.Design45,
      Design51:this.Design51,
      Design52:this.Design52,
      Design53:this.Design53,
      Design54:this.Design54,
      Design55:this.Design55,
      Dashboard1:this.Dashboard1,
      Dashboard2:this.Dashboard2,
      Dashboard3:this.Dashboard3,

      Dashboard11:this.Dashboard11,
      Dashboard12:this.Dashboard12,
      Dashboard13:this.Dashboard13,
      Dashboard14:this.Dashboard14,
      Dashboard15:this.Dashboard15,
      Dashboard21:this.Dashboard21,
      Dashboard22:this.Dashboard22,
      Dashboard23:this.Dashboard23,
      Dashboard24:this.Dashboard24,
      Dashboard25:this.Dashboard25,
      Dashboard31:this.Dashboard31,
      Dashboard32:this.Dashboard32,
      Dashboard33:this.Dashboard33,
      Dashboard34:this.Dashboard34,
      Dashboard35:this.Dashboard35,

      Branding1:this.Branding1,
      Branding2:this.Branding2,
      Branding3:this.Branding3,
      Branding11:this.Branding11,
      Branding12:this.Branding12,
      Branding13:this.Branding13,
      Branding14:this.Branding14,
      Branding15:this.Branding15,
      Branding21:this.Branding21,
      Branding22:this.Branding22,
      Branding23:this.Branding23,
      Branding24:this.Branding24,
      Branding25:this.Branding25,
      Branding31:this.Branding31,
      Branding32:this.Branding32,
      Branding33:this.Branding33,
      Branding34:this.Branding34,
      Branding35:this.Branding35,
      Web1: this.Web1,
      Web2: this.Web2,
      Webb3: this.Webb3,
      Web11: this.Web11,
      Web12: this.Web12,
      Web13: this.Web13,
      Web14: this.Web14,
      Web15: this.Web15,
      Web21: this.Web21,
      Web22: this.Web22,
      Web23: this.Web23,
      Web24: this.Web24,
      Web25: this.Web25,
      Web31: this.Web31,
      Web32: this.Web32,
      Web33: this.Web33,
      Web34: this.Web34,
      Web35: this.Web35,

      Mobile1: this.Mobile1,
      Mobile2: this.Mobile2,
      Mobile3: this.Mobile3,
      Mobile11: this.Mobile11,
      Mobile12: this.Mobile12,
      Mobile13: this.Mobile13,
      Mobile14: this.Mobile14,
      Mobile15: this.Mobile15,
      Mobile21: this.Mobile21,
      Mobile22: this.Mobile22,
      Mobile23: this.Mobile23,
      Mobile24: this.Mobile24,
      Mobile25: this.Mobile25,
      Mobile31: this.Mobile31,
      Mobile32: this.Mobile32,
      Mobile33: this.Mobile33,
      Mobile34: this.Mobile34,
      Mobile35: this.Mobile35,

      Motion1:this.Motion1,
      Motion2:this.Motion2,
      Motion3:this.Motion3,
      Motion11:this.Motion11,
      Motion12:this.Motion12,
      Motion13:this.Motion13,
      Motion14:this.Motion14,
      Motion15:this.Motion15,
      Motion21:this.Motion21,
      Motion22:this.Motion22,
      Motion23:this.Motion23,
      Motion24:this.Motion24,
      Motion25:this.Motion25,
      Motion31:this.Motion31,
      Motion32:this.Motion32,
      Motion33:this.Motion33,
      Motion34:this.Motion34,
      Motion35:this.Motion35,

      Webbb1:this.Webbb1,
      Webbb2:this.Webbb2,
      Webbb3:this.Webbb3,
      Webbb11:this.Webbb11,
      Webbb12:this.Webbb12,
      Webbb13:this.Webbb13,
      Webbb14:this.Webbb14,
      Webbb15:this.Webbb15,
      Webbb21:this.Webbb21,
      Webbb22:this.Webbb22,
      Webbb23:this.Webbb23,
      Webbb24:this.Webbb24,
      Webbb25:this.Webbb25,
      Webbb31:this.Webbb31,
      Webbb32:this.Webbb32,
      Webbb33:this.Webbb33,
      Webbb34:this.Webbb34,
      Webbb35:this.Webbb35,



    };
  
    this.quotationService.updateQuotation(this.id, quotationData).subscribe(
      (response) => {
        console.log('Quotation updated successfully:', response);
        
        // You can handle success (e.g., show a success message, redirect to another page)
      },
      (error) => {
        console.error('Error updating quotation:', error);
        // Handle the error (e.g., show an error message)
      }
    );
  }

  filterClients() {
    if (this.searchTerm.trim() === '') {
      this.filteredClients = [];
    } else {
      this.filteredClients = this.clients.filter((client) => {
        return client.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
  openForm(){
    
   // this.ClientToUpdate = studuent;
    this.showForm = true;

  }

  closeForm(){
    this.showForm = false;
  }

  openForm1(){
    
    // this.ClientToUpdate = studuent;
     this.showForm1 = true;
 
   }
 
   closeForm1(){
     this.showForm1 = false;
   }

  getAllClients(): void {
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


  addClient() {
    const ClientData = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      phone_number: this.phone_number,
      adress: this.adress,
      code_postal: this.code_postal,
      pays: this.pays,      
    };

    this.clientService.addClient(ClientData).subscribe(
      (response) => {
        console.log('Client added successfully:', response);
        // You can handle success (e.g., show a success message, redirect to another page)
      },
      (error) => {
        console.error('Error adding Client:', error);
        // Handle the error (e.g., show an error message)
      }
    );
  }

  
  selectClient(client: any) {
    this.selectedClient = { ...client }; // Create a copy of the client object to prevent modification of the original data
    this.clientSelected = true;
    this.searchTerm = client.name + ' ' + client.lastname; // Concatenate the name and last name in the input
    this.ClientName = this.searchTerm; // Update the selected name
  }

  clearSelection() {
    this.clientSelected = false;
    this.selectedClient = null;
    this.searchTerm = '';
    this.ClientName = ''; // Clear the selected name when the selection is cleared
  }


  Design1: boolean = false;
  Design2: boolean = false;
  Design3: boolean = false;
  Design4: boolean = false;
  Design5: boolean = false;

  Design11: boolean = false;
  Design12: boolean = false;
  Design13: boolean = false;
  Design14: boolean = false;
  Design15: boolean = false;
  Design21: boolean = false;
  Design22: boolean = false;
  Design23: boolean = false;
  Design24: boolean = false;
  Design25: boolean = false;
  Design31: boolean = false;
  Design32: boolean = false;
  Design33: boolean = false;
  Design34: boolean = false;
  Design35: boolean = false;
  Design41: boolean = false;
  Design42: boolean = false;
  Design43: boolean = false;
  Design44: boolean = false;
  Design45: boolean = false;
  Design51: boolean = false;
  Design52: boolean = false;
  Design53: boolean = false;
  Design54: boolean = false;
  Design55: boolean = false;



  Dashboard1: boolean = false;
  Dashboard2: boolean = false;
  Dashboard3: boolean = false;

  Dashboard11: boolean = false;
  Dashboard12: boolean = false;
  Dashboard13: boolean = false;
  Dashboard14: boolean = false;
  Dashboard15: boolean = false;
  Dashboard21: boolean = false;
  Dashboard22: boolean = false;
  Dashboard23: boolean = false;
  Dashboard24: boolean = false;
  Dashboard25: boolean = false;
  Dashboard31: boolean = false;
  Dashboard32: boolean = false;
  Dashboard33: boolean = false;
  Dashboard34: boolean = false;
  Dashboard35: boolean = false;

  Branding1: boolean = false;
  Branding2: boolean = false;
  Branding3: boolean = false;
  Branding11: boolean = false;
  Branding12: boolean = false;
  Branding13: boolean = false;
  Branding14: boolean = false;
  Branding15: boolean = false;
  Branding21: boolean = false;
  Branding22: boolean = false;
  Branding23: boolean = false;
  Branding24: boolean = false;
  Branding25: boolean = false;
  Branding31: boolean = false;
  Branding32: boolean = false;
  Branding33: boolean = false;
  Branding34: boolean = false;
  Branding35: boolean = false;
  Web1: boolean = false;
  Web2: boolean = false;
  Webb3: boolean = false;
  Web11: boolean = false;
  Web12: boolean = false;
  Web13: boolean = false;
  Web14: boolean = false;
  Web15: boolean = false;
  Web21: boolean = false;
  Web22: boolean = false;
  Web23: boolean = false;
  Web24: boolean = false;
  Web25: boolean = false;
  Web31: boolean = false;
  Web32: boolean = false;
  Web33: boolean = false;
  Web34: boolean = false;
  Web35: boolean = false;
  Mobile1: boolean = false;
  Mobile2: boolean = false;
  Mobile3: boolean = false;
  Mobile11: boolean = false;
  Mobile12: boolean = false;
  Mobile13: boolean = false;
  Mobile14: boolean = false;
  Mobile15: boolean = false;
  Mobile21: boolean = false;
  Mobile22: boolean = false;
  Mobile23: boolean = false;
  Mobile24: boolean = false;
  Mobile25: boolean = false;
  Mobile31: boolean = false;
  Mobile32: boolean = false;
  Mobile33: boolean = false;
  Mobile34: boolean = false;
  Mobile35: boolean = false;
  Motion1: boolean = false;
  Motion2: boolean = false;
  Motion3: boolean = false;
  Motion11: boolean = false;
  Motion12: boolean = false;
  Motion13: boolean = false;
  Motion14: boolean = false;
  Motion15: boolean = false;
  Motion21: boolean = false;
  Motion22: boolean = false;
  Motion23: boolean = false;
  Motion24: boolean = false;
  Motion25: boolean = false;
  Motion31: boolean = false;
  Motion32: boolean = false;
  Motion33: boolean = false;
  Motion34: boolean = false;
  Motion35: boolean = false;
  Webbb1: boolean = false;
  Webbb2: boolean = false;
  Webbb3: boolean = false;
  Webbb11: boolean = false;
  Webbb12: boolean = false;
  Webbb13: boolean = false;
  Webbb14: boolean = false;
  Webbb15: boolean = false;
  Webbb21: boolean = false;
  Webbb22: boolean = false;
  Webbb23: boolean = false;
  Webbb24: boolean = false;
  Webbb25: boolean = false;
  Webbb31: boolean = false;
  Webbb32: boolean = false;
  Webbb33: boolean = false;
  Webbb34: boolean = false;
  Webbb35: boolean = false;




  
  onCheckboxChange(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.checkboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label1: checkbox.label1
        };
  
  
        this.quotationService.updateCheckboxvalue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         value2: null,
         label2: checkbox.label2
        };
  
  
        this.quotationService.updateCheckboxvalue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes3) {
        checkbox.checked = false;
        const checkboxData = {
          
         value3: null,
         label3: checkbox.label3
        };
  
  
        this.quotationService.updateCheckboxvalue3(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes4) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label4: checkbox.label4
        };
  
  
        this.quotationService.updateCheckboxvalue4(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Design2 = false;
      this.Design21 = false;
      this.Design22 = false;
      this.Design23 = false;
      this.Design24 = false;
      this.Design25 = false;

      this.Design3 = false;
      this.Design31 = false;
      this.Design32 = false;
      this.Design33 = false;
      this.Design34 = false;
      this.Design35 = false;

      this.Design4 = false;
      this.Design41 = false;
      this.Design42 = false;
      this.Design43 = false;
      this.Design44 = false;
      this.Design45 = false;

      this.Design5 = false;
      this.Design51 = false;
      this.Design52 = false;
      this.Design53 = false;
      this.Design54 = false;
      this.Design55 = false;


    } else if (switchNumber === 2) {
      for (const checkbox of this.checkboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         value: null,
         label: checkbox.label
        };
  
  
        this.quotationService.updateCheckboxvalue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         value2: null,
         label2: checkbox.label2
        };
  
  
        this.quotationService.updateCheckboxvalue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes3) {
        checkbox.checked = false;
        const checkboxData = {
          
         value3: null,
         label3: checkbox.label3
        };
  
  
        this.quotationService.updateCheckboxvalue3(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes4) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label4: checkbox.label4
        };
  
  
        this.quotationService.updateCheckboxvalue4(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Design1 = false;
      this.Design11 = false;
      this.Design12 = false;
      this.Design13 = false;
      this.Design14 = false;
      this.Design15 = false;

      this.Design3 = false;
      this.Design31 = false;
      this.Design32 = false;
      this.Design33 = false;
      this.Design34 = false;
      this.Design35 = false;

      this.Design4 = false;
      this.Design41 = false;
      this.Design42 = false;
      this.Design43 = false;
      this.Design44 = false;
      this.Design45 = false;

      this.Design5 = false;
      this.Design51 = false;
      this.Design52 = false;
      this.Design53 = false;
      this.Design54 = false;
      this.Design55 = false;

    } else if (switchNumber === 3) {
      for (const checkbox of this.checkboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label1: checkbox.label1
        };
  
  
        this.quotationService.updateCheckboxvalue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         value: null,
         label: checkbox.label
        };
  
  
        this.quotationService.updateCheckboxvalue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes3) {
        checkbox.checked = false;
        const checkboxData = {
          
         value3: null,
         label3: checkbox.label3
        };
  
  
        this.quotationService.updateCheckboxvalue3(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes4) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label4: checkbox.label4
        };
  
  
        this.quotationService.updateCheckboxvalue4(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Design1 = false;
      this.Design11 = false;
      this.Design12 = false;
      this.Design13 = false;
      this.Design14 = false;
      this.Design15 = false;

      this.Design2 = false;
      this.Design21 = false;
      this.Design22 = false;
      this.Design23 = false;
      this.Design24 = false;
      this.Design25 = false;

      this.Design4 = false;
      this.Design41 = false;
      this.Design42 = false;
      this.Design43 = false;
      this.Design44 = false;
      this.Design45 = false;

      this.Design5 = false;
      this.Design51 = false;
      this.Design52 = false;
      this.Design53 = false;
      this.Design54 = false;
      this.Design55 = false;

    } else if (switchNumber === 4) {
      for (const checkbox of this.checkboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label1: checkbox.label1
        };
  
  
        this.quotationService.updateCheckboxvalue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         value2: null,
         label2: checkbox.label2
        };
  
  
        this.quotationService.updateCheckboxvalue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         value: null,
         label: checkbox.label
        };
  
  
        this.quotationService.updateCheckboxvalue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes4) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label4: checkbox.label4
        };
  
  
        this.quotationService.updateCheckboxvalue4(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Design1 = false;
      this.Design11 = false;
      this.Design12 = false;
      this.Design13 = false;
      this.Design14 = false;
      this.Design15 = false;

      this.Design2 = false;
      this.Design21 = false;
      this.Design22 = false;
      this.Design23 = false;
      this.Design24 = false;
      this.Design25 = false;

      this.Design3 = false;
      this.Design31 = false;
      this.Design32 = false;
      this.Design33 = false;
      this.Design34 = false;
      this.Design35 = false;

      this.Design5 = false;
      this.Design51 = false;
      this.Design52 = false;
      this.Design53 = false;
      this.Design54 = false;
      this.Design55 = false;

    } else if (switchNumber === 5) {
      for (const checkbox of this.checkboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         value1: null,
         label1: checkbox.label1
        };
  
  
        this.quotationService.updateCheckboxvalue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         value2: null,
         label2: checkbox.label2
        };
  
  
        this.quotationService.updateCheckboxvalue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes3) {
        checkbox.checked = false;
        const checkboxData = {
          
         value3: null,
         label3: checkbox.label3
        };
  
  
        this.quotationService.updateCheckboxvalue3(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.checkboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         value: null,
         label: checkbox.label
        };
  
  
        this.quotationService.updateCheckboxvalue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Design1 = false;
      this.Design11 = false;
      this.Design12 = false;
      this.Design13 = false;
      this.Design14 = false;
      this.Design15 = false;

      this.Design2 = false;
      this.Design3 = false;
      this.Design31 = false;
      this.Design32 = false;
      this.Design33 = false;
      this.Design34 = false;
      this.Design35 = false;

      this.Design4 = false;
      this.Design41 = false;
      this.Design42 = false;
      this.Design43 = false;
      this.Design44 = false;
      this.Design45 = false;

    }

  }

  onCheckboxBranding(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.brandingcheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
          BrandingValue1: null,
          brandingLabel1: checkbox.brandingLabel1
        };
  
  
        this.quotationService.updateCheckboxBrandingValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.brandingcheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          BrandingValue2: null,
          brandingLabel2: checkbox.brandingLabel2
        };
  
  
        this.quotationService.updateCheckboxBrandingValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Branding2 = false;
      this.Branding3 = false;
      this.Branding21 = false;
      this.Branding22 = false;
      this.Branding23 = false;
      this.Branding24 = false;
      this.Branding25 = false;
      this.Branding31 = false;
      this.Branding32 = false;
      this.Branding33 = false;
      this.Branding34 = false;
      this.Branding35 = false;
    } else if (switchNumber === 2) {
      for (const checkbox of this.brandingcheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
          BrandingValue: null,
          brandingLabel: checkbox.brandingLabel
        };
  
  
        this.quotationService.updateCheckboxBrandingValue(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.brandingcheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          BrandingValue2: null,
          brandingLabel2: checkbox.brandingLabel2
        };
  
  
        this.quotationService.updateCheckboxBrandingValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Branding1 = false;
      this.Branding3 = false;
      this.Branding11 = false;
      this.Branding12 = false;
      this.Branding13 = false;
      this.Branding14 = false;
      this.Branding15 = false;
      this.Branding31 = false;
      this.Branding32 = false;
      this.Branding33 = false;
      this.Branding34 = false;
      this.Branding35 = false;



    } else if (switchNumber === 3) {
      for (const checkbox of this.brandingcheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          BrandingValue: null,
          brandingLabel: checkbox.brandingLabel
        };
  
  
        this.quotationService.updateCheckboxBrandingValue(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.brandingcheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          BrandingValue1: null,
          brandingLabel1: checkbox.brandingLabel1
        };
  
  
        this.quotationService.updateCheckboxBrandingValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Branding1 = false;
      this.Branding2 = false;
      this.Branding11 = false;
      this.Branding12 = false;
      this.Branding13 = false;
      this.Branding14 = false;
      this.Branding15 = false;
      this.Branding21 = false;
      this.Branding22 = false;
      this.Branding23 = false;
      this.Branding24 = false;
      this.Branding25 = false;

    }
  }

  onCheckboxWeb(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.webcheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
          WebValue1: null,
          webLabel1: checkbox.webLabel1
        };
  
  
        this.quotationService.updateCheckboxWebValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.webcheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
          WebValue2: null,
          webLabel2: checkbox.webLabel2
        };
  
  
        this.quotationService.updateCheckboxWebValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Web2 = false;
      this.Webb3 = false;
      this.Web21 = false;
      this.Web22 = false;
      this.Web23 = false;
      this.Web24 = false;
      this.Web25 = false;
      this.Web31 = false;
      this.Web32 = false;
      this.Web33 = false;
      this.Web34 = false;
      this.Web35 = false;

    } else if (switchNumber === 2) {
      for (const checkbox of this.webcheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
          WebValue: null,
          webLabel: checkbox.webLabel
        };
  
  
        this.quotationService.updateCheckboxWebValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.webcheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
          WebValue2: null,
          webLabel2: checkbox.webLabel2
        };
  
  
        this.quotationService.updateCheckboxWebValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Web1 = false;
      this.Webb3 = false;
      this.Web11 = false;
      this.Web12 = false;
      this.Web13 = false;
      this.Web14 = false;
      this.Web15 = false;
      this.Web31 = false;
      this.Web32 = false;
      this.Web33 = false;
      this.Web34 = false;
      this.Web35 = false;
    } else if (switchNumber === 3) {
      for (const checkbox of this.webcheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
          WebValue: null,
          webLabel: checkbox.webLabel
        };
  
  
        this.quotationService.updateCheckboxWebValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.webcheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
          WebValue1: null,
          webLabel1: checkbox.webLabel1
        };
  
  
        this.quotationService.updateCheckboxWebValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
            console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Web1 = false;
      this.Web2 = false;
      this.Web11 = false;
      this.Web12 = false;
      this.Web13 = false;
      this.Web14 = false;
      this.Web15 = false;
      this.Web21 = false;
      this.Web22 = false;
      this.Web23 = false;
      this.Web24 = false;
      this.Web25 = false;
    }
  }

  onCheckboxMobile(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.mobilecheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         MobileValue1: null,
          MobileLabel1: checkbox.MobileLabel1
        };
  
  
        this.quotationService.updateCheckboxMobileValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.mobilecheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         MobileValue2: null,
          MobileLabel2: checkbox.MobileLabel2
        };
  
  
        this.quotationService.updateCheckboxMobileValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Mobile2 = false;
      this.Mobile3 = false;
      this.Mobile21 = false;
      this.Mobile22 = false;
      this.Mobile23 = false;
      this.Mobile24 = false;
      this.Mobile25 = false;
      this.Mobile31 = false;
      this.Mobile32 = false;
      this.Mobile33 = false;
      this.Mobile34 = false;
      this.Mobile35 = false;



    } else if (switchNumber === 2) {
      for (const checkbox of this.mobilecheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         MobileValue: null,
          MobileLabel: checkbox.MobileLabel
        };
  
  
        this.quotationService.updateCheckboxMobileValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.mobilecheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         MobileValue2: null,
          MobileLabel2: checkbox.MobileLabel2
        };
  
  
        this.quotationService.updateCheckboxMobileValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Mobile1 = false;
      this.Mobile3 = false;
      this.Mobile11 = false;
      this.Mobile12 = false;
      this.Mobile13 = false;
      this.Mobile14 = false;
      this.Mobile15 = false;
      this.Mobile31 = false;
      this.Mobile32 = false;
      this.Mobile33 = false;
      this.Mobile34 = false;
      this.Mobile35 = false;


    } else if (switchNumber === 3) {
      for (const checkbox of this.mobilecheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         MobileValue1: null,
          MobileLabel1: checkbox.MobileLabel1
        };
  
  
        this.quotationService.updateCheckboxMobileValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.mobilecheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         MobileValue: null,
          MobileLabel: checkbox.MobileLabel
        };
  
  
        this.quotationService.updateCheckboxMobileValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Mobile1 = false;
      this.Mobile2 = false;
      this.Mobile21 = false;
      this.Mobile22 = false;
      this.Mobile23 = false;
      this.Mobile24 = false;
      this.Mobile25 = false;
      this.Mobile11 = false;
      this.Mobile12 = false;
      this.Mobile13 = false;
      this.Mobile14 = false;
      this.Mobile15 = false;
    }
  }
  onCheckboxWeb3(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.web3checkboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         Web3Value1: null,
          Web3Label1: checkbox.Web3Label1
        };
  
  
        this.quotationService.updateCheckboxWeb3Value1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.web3checkboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         Web3Value2: null,
          Web3Label2: checkbox.Web3Label2
        };
  
  
        this.quotationService.updateCheckboxWeb3Value2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Webbb2 = false;
      this.Webbb3 = false;
      this.Webbb21 = false;
      this.Webbb22 = false;
      this.Webbb23 = false;
      this.Webbb24 = false;
      this.Webbb25 = false;
      this.Webbb31 = false;
      this.Webbb32 = false;
      this.Webbb33 = false;
      this.Webbb34 = false;
      this.Webbb35 = false;


    } else if (switchNumber === 2) {
      for (const checkbox of this.web3checkboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         Web3Value: null,
          Web3Label: checkbox.Web3Label
        };
  
  
        this.quotationService.updateCheckboxWeb3Value(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.web3checkboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         Web3Value2: null,
          Web3Label2: checkbox.Web3Label2
        };
  
  
        this.quotationService.updateCheckboxWeb3Value2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Webbb1 = false;
      this.Webbb3 = false;
      this.Webbb11 = false;
      this.Webbb12 = false;
      this.Webbb13 = false;
      this.Webbb14 = false;
      this.Webbb15 = false;
      this.Webbb31 = false;
      this.Webbb32 = false;
      this.Webbb33 = false;
      this.Webbb34 = false;
      this.Webbb35 = false;

    } else if (switchNumber === 3) {
      for (const checkbox of this.web3checkboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         Web3Value1: null,
          Web3Label1: checkbox.Web3Label1
        };
  
  
        this.quotationService.updateCheckboxWeb3Value1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.web3checkboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         Web3Value: null,
          Web3Label: checkbox.Web3Label
        };
  
  
        this.quotationService.updateCheckboxWeb3Value(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Webbb1 = false;
      this.Webbb2 = false;
      this.Webbb11 = false;
      this.Webbb12 = false;
      this.Webbb13 = false;
      this.Webbb14 = false;
      this.Webbb15 = false;
      this.Webbb21 = false;
      this.Webbb22 = false;
      this.Webbb23 = false;
      this.Webbb24 = false;
      this.Webbb25 = false;
    }
  }

  onCheckboxMotion(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.motioncheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         MotionValue1: null,
          MotionLabel1: checkbox.MotionLabel1
        };
  
  
        this.quotationService.updateCheckboxMotionValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.motioncheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         MotionValue2: null,
          MotionLabel2: checkbox.MotionLabel2
        };
  
  
        this.quotationService.updateCheckboxMotionValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Motion2 = false;
      this.Motion3 = false;
      this.Motion21 = false;
      this.Motion22 = false;
      this.Motion23 = false;
      this.Motion24 = false;
      this.Motion25 = false;
      this.Motion31 = false;
      this.Motion32 = false;
      this.Motion33 = false;
      this.Motion34 = false;
      this.Motion35 = false;
    } else if (switchNumber === 2) {
      for (const checkbox of this.motioncheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         MotionValue: null,
          MotionLabel: checkbox.MotionLabel
        };
  
  
        this.quotationService.updateCheckboxMotionValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.motioncheckboxes2) {
        checkbox.checked = false;
        const checkboxData = {
          
         MotionValue2: null,
          MotionLabel2: checkbox.MotionLabel2
        };
  
  
        this.quotationService.updateCheckboxMotionValue2(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Motion1 = false;
      this.Motion3 = false;
      this.Motion11 = false;
      this.Motion12 = false;
      this.Motion13 = false;
      this.Motion14 = false;
      this.Motion15 = false;
      this.Motion31 = false;
      this.Motion32 = false;
      this.Motion33 = false;
      this.Motion34 = false;
      this.Motion35 = false;
    } else if (switchNumber === 3) {
      for (const checkbox of this.motioncheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         MotionValue1: null,
          MotionLabel1: checkbox.MotionLabel1
        };
  
  
        this.quotationService.updateCheckboxMotionValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      for (const checkbox of this.motioncheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         MotionValue: null,
          MotionLabel: checkbox.MotionLabel
        };
  
  
        this.quotationService.updateCheckboxMotionValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
      this.Motion1 = false;
      this.Motion2 = false;
      this.Motion11 = false;
      this.Motion12 = false;
      this.Motion13 = false;
      this.Motion14 = false;
      this.Motion15 = false;
      this.Motion21 = false;
      this.Motion22 = false;
      this.Motion23 = false;
      this.Motion24 = false;
      this.Motion25 = false;
    }
  }

  onCheckbox(switchNumber: number) {
    if (switchNumber === 1) {
      for (const checkbox of this.dashboardcheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         DashboardValue1: null,
         DashboardLabel1: checkbox.DashboardLabel1
        };
  
  
        this.quotationService.updateCheckboxDashboardValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
        for (const checkbox of this.dashboardcheckboxes2) {
          checkbox.checked = false;
          const checkboxData = {
            
           DashboardValue2: null,
           DashboardLabel2: checkbox.DashboardLabel2
          };
    
    
          this.quotationService.updateCheckboxDashboardValue2(this.qotationId, checkboxData).subscribe(
            (response) => {
            },
            (error) => {
              console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
            }
          );
        }
      this.Dashboard2 = false;
      this.Dashboard3 = false;
      this.Dashboard31 = false;
      this.Dashboard32 = false;
      this.Dashboard33 = false;
      this.Dashboard34 = false;
      this.Dashboard35 = false;
      this.Dashboard21 = false;
      this.Dashboard22 = false;
      this.Dashboard23 = false;
      this.Dashboard24 = false;
      this.Dashboard25 = false;

    } 
    else if (switchNumber === 2) {
      for (const checkbox of this.dashboardcheckboxes) {
        checkbox.checked = false;
        const checkboxData = {
          
         DashboardValue: null,
         DashboardLabel: checkbox.DashboardLabel
        };
  
  
        this.quotationService.updateCheckboxDashboardValue(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
        for (const checkbox of this.dashboardcheckboxes2) {
          checkbox.checked = false;
          const checkboxData = {
            
           DashboardValue2: null,
           DashboardLabel2: checkbox.DashboardLabel2
          };
    
    
          this.quotationService.updateCheckboxDashboardValue2(this.qotationId, checkboxData).subscribe(
            (response) => {
            },
            (error) => {
              console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
            }
          );
        }
      this.Dashboard1 = false;
      this.Dashboard3 = false;
      this.Dashboard11 = false;
      this.Dashboard12 = false;
      this.Dashboard13 = false;
      this.Dashboard14 = false;
      this.Dashboard15 = false;
      this.Dashboard31 = false;
      this.Dashboard32 = false;
      this.Dashboard33 = false;
      this.Dashboard34 = false;
      this.Dashboard35 = false;

    }
     else if (switchNumber === 3) {
      for (const checkbox of this.dashboardcheckboxes1) {
        checkbox.checked = false;
        const checkboxData = {
          
         DashboardValue1: null,
         DashboardLabel1: checkbox.DashboardLabel1
        };
  
  
        this.quotationService.updateCheckboxDashboardValue1(this.qotationId, checkboxData).subscribe(
          (response) => {
          },
          (error) => {
            console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          }
        );
      }
        for (const checkbox of this.dashboardcheckboxes) {
          checkbox.checked = false;
          const checkboxData = {
            
           DashboardValue: null,
           DashboardLabel: checkbox.DashboardLabel
          };
    
    
          this.quotationService.updateCheckboxDashboardValue(this.qotationId, checkboxData).subscribe(
            (response) => {
            },
            (error) => {
              console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
            }
          );
        }
      this.Dashboard1 = false;
      this.Dashboard2 = false;
      this.Dashboard11 = false;
      this.Dashboard12 = false;
      this.Dashboard13 = false;
      this.Dashboard14 = false;
      this.Dashboard15 = false;
      this.Dashboard21 = false;
      this.Dashboard22 = false;
      this.Dashboard23 = false;
      this.Dashboard24 = false;
      this.Dashboard25 = false;

    }

  }

  get checkboxArray() {
    return this.form.get('checkboxes') as FormArray;
  }

  addCheckbox() {
    this.checkboxes.push({ label: 'New Checkbox Label', value: false });
  }

  addCheckbox1() {
    this.checkboxes1.push({ label1: 'New Checkbox Label', value: false });

  }
  addCheckbox2() {
    this.checkboxes2.push({ label2: 'New Checkbox Label', value: false });
  }
  addCheckbox3() {
    this.checkboxes3.push({ label3: 'New Checkbox Label', value: false });

  }
  addCheckbox4() {
    this.checkboxes4.push({ label4: 'New Checkbox Label', value: false });


  }

  addCheck() {
    this.checkboxes.push({ label: 'New Checkbox Label', value: false });
    this.checkboxes1.push({ label1: 'New Checkbox Label', value: false });
    this.checkboxes3.push({ label3: 'New Checkbox Label', value: false });
    this.checkboxes4.push({ label4: 'New Checkbox Label', value: false });
    this.checkboxes2.push({ label2: 'New Checkbox Label', value: false });

    this.brandingcheckboxes.push({ brandingLabel: 'New Checkbox Label', value: false });
    this.brandingcheckboxes1.push({ brandingLabel1: 'New Checkbox Label', value: false });
    this.brandingcheckboxes2.push({ brandingLabel2: 'New Checkbox Label', value: false });

    this.webcheckboxes.push({ webLabel: 'New Checkbox Label', value: false });
    this.webcheckboxes1.push({ webLabel1: 'New Checkbox Label', value: false });
    this.webcheckboxes2.push({ webLabel2: 'New Checkbox Label', value: false });

    this.mobilecheckboxes.push({ MobileLabel: 'New Checkbox Label', value: false });
    this.mobilecheckboxes1.push({ MobileLabel1: 'New Checkbox Label', value: false });
    this.mobilecheckboxes2.push({ MobileLabel2: 'New Checkbox Label', value: false });

    this.dashboardcheckboxes.push({ DashboardLabel: 'New Checkbox Label', value: false });
    this.dashboardcheckboxes1.push({ DashboardLabel1: 'New Checkbox Label', value: false });
    this.dashboardcheckboxes2.push({ DashboardLabel2: 'New Checkbox Label', value: false });

    this.web3checkboxes.push({ Web3Label: 'New Checkbox Label', value: false });
    this.web3checkboxes1.push({ Web3Label1: 'New Checkbox Label', value: false });
    this.web3checkboxes2.push({ Web3Label2: 'New Checkbox Label', value: false });

    this.motioncheckboxes.push({ MotionLabel: 'New Checkbox Label', value: false });
    this.motioncheckboxes1.push({ MotionLabel1: 'New Checkbox Label', value: false });
    this.motioncheckboxes2.push({ MotionLabel2: 'New Checkbox Label', MotionValue2: false });



  }

  removeCheckbox(index: number) {
    this.checkboxArray.removeAt(index);
  }



  addInput() {
    this.quotationService.addCheckbox(this.label).subscribe(
      () => {
        // Refresh the checkboxes after adding
        this.retrieveCheckboxes();
        this.closeForm2();
      },
      (error) => {
        console.error('Error adding checkbox', error);
      }
    );
  }

  addcheck() {
    this.quotationService.addCheckbox(this.label).subscribe(
      () => {
        // Refresh the checkboxes after adding
        this.retrieveCheckboxes();
        this.closeForm2();
      },
      (error) => {
        console.error('Error adding checkbox', error);
      }
    );
  }

  addInput1() {
    this.quotationService.addCheckbox1(this.label1).subscribe(
      () => {
        // Refresh the checkboxes after adding
        this.retrieveCheckboxes1();
        this.closeForm3();
       






      },
      (error) => {
        console.error('Error adding checkbox', error);
      }
    );
  }
  qotationId!:number;
  addInput2() {
const Data ={
  label:this.label,
  label1:this.label1,
  label3:this.label3,
  label4:this.label4,

  label2:this.label2,
  brandingLabel:this.brandingLabel,
  brandingLabel1:this.brandingLabel1,
  brandingLabel2:this.brandingLabel2,
  webLabel:this.webLabel,
  webLabel1:this.webLabel1,
  webLabel2:this.webLabel2,
  MobileLabel:this.MobileLabel,
  MobileLabel1:this.MobileLabel1,
  MobileLabel2:this.MobileLabel2,
  DashboardLabel:this.DashboardLabel,
  DashboardLabel1:this.DashboardLabel1,
  DashboardLabel2:this.DashboardLabel2,
  Web3Label:this.Web3Label,
  Web3Label1:this.Web3Label1,
  Web3Label2:this.Web3Label2,
  MotionLabel:this.MotionLabel,
  MotionLabel1:this.MotionLabel1,
  MotionLabel2:this.MotionLabel2,
  value:this.value,
  qotationId:this.id,

}

    this.quotationService.addCheck(Data).subscribe(
      () => {
        // Refresh the checkboxes after adding
        this.retrieveCheckboxesBrandingLabel();
        this.retrieveCheckboxesBrandingLabel1();
        this.retrieveCheckboxesBrandingLabel2();
        this.retrieveCheckboxesWeb3Label();
        this.retrieveCheckboxesWeb3Label1();
        this.retrieveCheckboxesWeb3Label2();
        this.retrieveCheckboxesWebLabel();
        this.retrieveCheckboxesWebLabel1();
        this.retrieveCheckboxesWebLabel2();
        this.retrieveCheckboxesMobileLabel();
        this.retrieveCheckboxesMobileLabel1();
        this.retrieveCheckboxesMobileLabel2();
        this.retrieveCheckboxesDashboardLabel();
        this.retrieveCheckboxesDashboardLabel1();
        this.retrieveCheckboxesDashboardLabel2();
        this.retrieveCheckboxesMotionLabel();
        this.retrieveCheckboxesMotionLabel1();
        this.retrieveCheckboxesMotionLabel2();
        this.retrieveCheckboxes2();
        this.retrieveCheckboxes();
        this.retrieveCheckboxes1();
        this.retrieveCheckboxes3();
        this.retrieveCheckboxes4();







        this.closeFormbranding();
        this.closeFormbranding1();
        this.closeFormbranding2();

        this.closeFormweb();
        this.closeFormweb1();
        this.closeFormweb2();

        this.closeFormmobile();
        this.closeFormmobile1();
        this.closeFormmobile2();

        this.closeFormdashboard();
        this.closeFormdashboard1();
        this.closeFormdashboard2();

        this.closeFormweb3();
        this.closeFormweb31();
        this.closeFormweb32();

        this.closeFormmotion();
        this.closeFormmotion1();
        this.closeFormmotion2();

        this.closeForm4();
        this.closeForm3();
        this.closeForm5();
        this.closeForm6();

        this.closeForm2();
        this.label='';
        this.label1='';
        this.label2='';
        this.label3='';
        this.label4='';
        this.brandingLabel='';
        this.brandingLabel1='';
        this.brandingLabel2='';
        this.webLabel='';
        this.webLabel1='';
        this.webLabel2='';
        this.Web3Label='';
        this.Web3Label1='';
        this.Web3Label2='';
        this.MobileLabel='';
        this.MobileLabel1='';
        this.MobileLabel2='';
        this.DashboardLabel='';
        this.DashboardLabel1='';
        this.DashboardLabel2='';
        this.MotionLabel='';
        this.MotionLabel1='';
        this.MotionLabel2='';

      },
      (error) => {
        console.error('Error adding checkbox', error);
      }
    );
  }

  addInput3() {
    this.quotationService.addCheckbox3(this.label3).subscribe(
      () => {
        // Refresh the checkboxes after adding
        this.retrieveCheckboxes3();
        this.closeForm5();
      },
      (error) => {
        console.error('Error adding checkbox', error);
      }
    );
  }

  addInput4() {
    this.quotationService.addCheckbox4(this.label4).subscribe(
      () => {
        // Refresh the checkboxes after adding
        this.retrieveCheckboxes4();
        this.closeForm6();
      },
      (error) => {
        console.error('Error adding checkbox', error);
      }
    );
  }

  retrieveCheckboxes() {
    this.quotationService.getCheckboxes(this.qotationId).subscribe(
      (data: any) => {
        this.checkboxes = data;
        console.log("checkboxes", this.checkboxes);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }
  data : any;
  retrieveCheckboxesBrandingLabel() {

    this.quotationService.getCheckboxesbrandingLabel(this.qotationId).subscribe(
      (data) => {
        this.data=data;
        this.brandingcheckboxes = data;
        console.log("brandingcheckboxes", this.brandingcheckboxes1);

        this.preCheckCheckboxes();

      },
      
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  preCheckCheckboxes() {

    this.brandingcheckboxes.forEach((checkbox) => {
      checkbox.checked = this.brandingcheckboxes.some((item) => item.brandingLabel === checkbox.brandingLabel  && item.BrandingValue === '1');
    });
    this.brandingcheckboxes1.forEach((checkbox) => {
      checkbox.checked = this.brandingcheckboxes1.some((item) => item.brandingLabel1 === checkbox.brandingLabel1  && item.BrandingValue1 === '1');
    }); 
    this.brandingcheckboxes2.forEach((checkbox) => {
      checkbox.checked = this.brandingcheckboxes2.some((item) => item.brandingLabel2 === checkbox.brandingLabel2  && item.BrandingValue2 === '1');
    });
    this.checkboxes.forEach((checkbox) => {
      checkbox.checked = this.checkboxes.some((item) => item.label === checkbox.label  && item.value === '1');
    });
    this.checkboxes1.forEach((checkbox) => {
      checkbox.checked = this.checkboxes1.some((item) => item.label1 === checkbox.label1  && item.value1 === '1');
    }); this.checkboxes2.forEach((checkbox) => {
      checkbox.checked = this.checkboxes2.some((item) => item.label2 === checkbox.label2  && item.value2 === '1');
    }); this.checkboxes3.forEach((checkbox) => {
      checkbox.checked = this.checkboxes3.some((item) => item.label3 === checkbox.label3  && item.value3 === '1');
    }); this.checkboxes4.forEach((checkbox) => {
      checkbox.checked = this.checkboxes4.some((item) => item.label4 === checkbox.label4  && item.value4 === '1');
    });
    this.webcheckboxes.forEach((checkbox) => {
      checkbox.checked = this.webcheckboxes.some((item) => item.webLabel === checkbox.webLabel  && item.WebValue === '1');
    });
    this.webcheckboxes1.forEach((checkbox) => {
      checkbox.checked = this.webcheckboxes1.some((item) => item.webLabel1 === checkbox.webLabel1  && item.WebValue1 === '1');
    }); this.webcheckboxes2.forEach((checkbox) => {
      checkbox.checked = this.webcheckboxes2.some((item) => item.webLabel2 === checkbox.webLabel2  && item.WebValue2 === '1');
    });
    this.mobilecheckboxes.forEach((checkbox) => {
      checkbox.checked = this.mobilecheckboxes.some((item) => item.MobileLabel === checkbox.MobileLabel  && item.MobileValue === '1');
    });
    this.mobilecheckboxes1.forEach((checkbox) => {
      checkbox.checked = this.mobilecheckboxes1.some((item) => item.MobileLabel1 === checkbox.MobileLabel1  && item.MobileValue1 === '1');
    });  this.mobilecheckboxes2.forEach((checkbox) => {
      checkbox.checked = this.mobilecheckboxes2.some((item) => item.MobileLabel2 === checkbox.MobileLabel2  && item.MobileValue2 === '1');
    });
    this.dashboardcheckboxes.forEach((checkbox) => {
      checkbox.checked = this.dashboardcheckboxes.some((item) => item.DashboardLabel === checkbox.DashboardLabel  && item.DashboardValue === '1');
    });
    this.dashboardcheckboxes1.forEach((checkbox) => {
      checkbox.checked = this.dashboardcheckboxes1.some((item) => item.DashboardLabel1 === checkbox.DashboardLabel1  && item.DashboardValue1 === '1');
    });this.dashboardcheckboxes2.forEach((checkbox) => {
      checkbox.checked = this.dashboardcheckboxes2.some((item) => item.DashboardLabel2 === checkbox.DashboardLabel2  && item.DashboardValue2 === '1');
    });
    this.web3checkboxes.forEach((checkbox) => {
      checkbox.checked = this.web3checkboxes.some((item) => item.Web3Label === checkbox.Web3Label  && item.Web3Value === '1');
    });
    this.web3checkboxes1.forEach((checkbox) => {
      checkbox.checked = this.web3checkboxes1.some((item) => item.Web3Label1 === checkbox.Web3Label1  && item.Web3Value1 === '1');
    }); this.web3checkboxes2.forEach((checkbox) => {
      checkbox.checked = this.web3checkboxes2.some((item) => item.Web3Label2 === checkbox.Web3Label2  && item.Web3Value2 === '1');
    });
    this.motioncheckboxes.forEach((checkbox) => {
      checkbox.checked = this.motioncheckboxes.some((item) => item.MotionLabel === checkbox.MotionLabel  && item.MotionValue === '1');
    });
    this.motioncheckboxes1.forEach((checkbox) => {
      checkbox.checked = this.motioncheckboxes1.some((item) => item.MotionLabel1 === checkbox.MotionLabel1  && item.MotionValue1 === '1');
    });this.motioncheckboxes2.forEach((checkbox) => {
      checkbox.checked = this.motioncheckboxes2.some((item) => item.MotionLabel2 === checkbox.MotionLabel2  && item.MotionValue2 === '1');
    });

  }
  

  retrieveCheckboxesBrandingLabel1() {
    this.quotationService.getCheckboxesbrandingLabel1(this.qotationId).subscribe(
      (data: any) => {
        this.brandingcheckboxes1 = data;
        console.log("checkboxes", this.brandingcheckboxes1);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesBrandingLabel2() {
    this.quotationService.getCheckboxesbrandingLabel2(this.qotationId).subscribe(
      (data: any) => {
        this.brandingcheckboxes2 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesWebLabel() {
    this.quotationService.getCheckboxeswebLabel(this.qotationId).subscribe(
      (data: any) => {
        this.webcheckboxes = data;
        console.log("webcheckboxes",this.webcheckboxes);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesWebLabel1() {
    this.quotationService.getCheckboxeswebLabel1(this.qotationId).subscribe(
      (data: any) => {
        this.webcheckboxes1 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesWebLabel2() {
    this.quotationService.getCheckboxeswebLabel2(this.qotationId).subscribe(
      (data: any) => {
        this.webcheckboxes2 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesMobileLabel() {
    this.quotationService.getCheckboxesMobileLabel(this.qotationId).subscribe(
      (data: any) => {
        this.mobilecheckboxes = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesMobileLabel1() {
    this.quotationService.getCheckboxesMobileLabel1(this.qotationId).subscribe(
      (data: any) => {
        this.mobilecheckboxes1 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesMobileLabel2() {
    this.quotationService.getCheckboxesMobileLabel2(this.qotationId).subscribe(
      (data: any) => {
        this.mobilecheckboxes2 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesDashboardLabel() {
    this.quotationService.getCheckboxesDashboardLabel(this.qotationId).subscribe(
      (data: any) => {
        this.dashboardcheckboxes = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesDashboardLabel1() {
    this.quotationService.getCheckboxesDashboardLabel1(this.qotationId).subscribe(
      (data: any) => {
        this.dashboardcheckboxes1 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesDashboardLabel2() {
    this.quotationService.getCheckboxesDashboardLabel2(this.qotationId).subscribe(
      (data: any) => {
        this.dashboardcheckboxes2 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesWeb3Label() {
    this.quotationService.getCheckboxesWeb3Label(this.qotationId).subscribe(
      (data: any) => {
        this.web3checkboxes = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesWeb3Label1() {
    this.quotationService.getCheckboxesWeb3Label1(this.qotationId).subscribe(
      (data: any) => {
        this.web3checkboxes1 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesWeb3Label2() {
    this.quotationService.getCheckboxesWeb3Label2(this.qotationId).subscribe(
      (data: any) => {
        this.web3checkboxes2 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesMotionLabel() {
    this.quotationService.getCheckboxesMotionLabel(this.qotationId).subscribe(
      (data: any) => {
        this.motioncheckboxes = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesMotionLabel1() {
    this.quotationService.getCheckboxesMotionLabel1(this.qotationId).subscribe(
      (data: any) => {
        this.motioncheckboxes1 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxesMotionLabel2() {
    this.quotationService.getCheckboxesMotionLabel2(this.qotationId).subscribe(
      (data: any) => {
        this.motioncheckboxes2 = data;
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxes1() {
    this.quotationService.getCheckboxes1(this.qotationId).subscribe(
      (data: any) => {
        this.checkboxes1 = data;
        console.log("checkboxes", this.checkboxes);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxes2() {
    this.quotationService.getCheckboxes2(this.qotationId).subscribe(
      (data: any) => {
        this.checkboxes2 = data;
        console.log("checkboxes2", this.checkboxes2);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxes3() {
    this.quotationService.getCheckboxes3(this.qotationId).subscribe(
      (data: any) => {
        this.checkboxes3 = data;
        console.log("checkboxes", this.checkboxes);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  retrieveCheckboxes4() {
    this.quotationService.getCheckboxes4(this.qotationId).subscribe(
      (data: any) => {
        this.checkboxes4 = data;
        console.log("checkboxes4", this.checkboxes4);
        this.preCheckCheckboxes();

      },
      (error) => {
        console.error('Error retrieving checkboxes', error);
      }
    );
  }

  openForm2() {

    // this.ClientToUpdate = studuent;
    this.showForm2 = true;

  }

  closeForm2() {
    this.showForm2 = false;
  }


  openForm3() {

    // this.ClientToUpdate = studuent;
    this.showForm3 = true;

  }

  closeForm3() {
    this.showForm3 = false;
  }
  openForm4() {

    // this.ClientToUpdate = studuent;
    this.showForm4 = true;

  }

  closeForm4() {
    this.showForm4 = false;
  }
  openForm5() {

    // this.ClientToUpdate = studuent;
    this.showForm5 = true;

  }

  closeForm5() {
    this.showForm5 = false;
  }
  openForm6() {

    // this.ClientToUpdate = studuent;
    this.showForm6 = true;

  }

  closeForm6() {
    this.showForm6 = false;
  }

  openFormbranding() {

    // this.ClientToUpdate = studuent;
    this.brandingshowForm = true;

  }

  closeFormbranding() {
    this.brandingshowForm = false;
  }

  openFormbranding1() {

    // this.ClientToUpdate = studuent;
    this.brandingshowForm1 = true;

  }

  closeFormbranding1() {
    this.brandingshowForm1 = false;
  }

  openFormbranding2() {

    // this.ClientToUpdate = studuent;
    this.brandingshowForm2 = true;

  }

  closeFormbranding2() {
    this.brandingshowForm2 = false;
  }

  openFormweb() {

    // this.ClientToUpdate = studuent;
    this.webshowForm = true;

  }

  closeFormweb() {
    this.webshowForm = false;
  }

  openFormweb1() {

    // this.ClientToUpdate = studuent;
    this.webshowForm1 = true;

  }

  closeFormweb1() {
    this.webshowForm1 = false;
  }

  openFormweb2() {

    // this.ClientToUpdate = studuent;
    this.webshowForm2 = true;

  }

  closeFormweb2() {
    this.webshowForm2 = false;
  }

  openFormmobile() {

    // this.ClientToUpdate = studuent;
    this.mobileshowForm = true;

  }

  closeFormmobile() {
    this.mobileshowForm = false;
  }

  openFormmobile1() {

    // this.ClientToUpdate = studuent;
    this.mobileshowForm1 = true;

  }

  closeFormmobile1() {
    this.mobileshowForm1 = false;
  }

  openFormmobile2() {

    // this.ClientToUpdate = studuent;
    this.mobileshowForm2 = true;

  }

  closeFormmobile2() {
    this.mobileshowForm2 = false;
  }

  openFormdashboard() {

    // this.ClientToUpdate = studuent;
    this.dashboardshowForm = true;

  }

  closeFormdashboard() {
    this.dashboardshowForm = false;
  }

  openFormdashboard1() {

    // this.ClientToUpdate = studuent;
    this.dashboardshowForm1 = true;

  }

  closeFormdashboard1() {
    this.dashboardshowForm1 = false;
  }
  openFormdashboard2() {

    // this.ClientToUpdate = studuent;
    this.dashboardshowForm2 = true;

  }

  closeFormdashboard2() {
    this.dashboardshowForm2 = false;
  }

  openFormweb3() {

    // this.ClientToUpdate = studuent;
    this.web3showForm = true;

  }

  closeFormweb3() {
    this.web3showForm = false;
  }

  

  openFormweb31() {

    // this.ClientToUpdate = studuent;
    this.web3showForm1 = true;

  }

  closeFormweb31() {
    this.web3showForm1 = false;
  }

  openFormweb32() {

    // this.ClientToUpdate = studuent;
    this.web3showForm2 = true;

  }

  closeFormweb32() {
    this.web3showForm2 = false;
  }

  openFormmotion() {

    // this.ClientToUpdate = studuent;
    this.motionshowForm = true;

  }

  closeFormmotion() {
    this.motionshowForm = false;
  }
  openFormmotion1() {

    // this.ClientToUpdate = studuent;
    this.motionshowForm1 = true;

  }

  closeFormmotion1() {
    this.motionshowForm1 = false;
  }

  openFormmotion2() {

    // this.ClientToUpdate = studuent;
    this.motionshowForm2 = true;

  }

  closeFormmotion2() {
    this.motionshowForm2 = false;
  }


  updateCheckboxBrandingValue() {
    for (const checkbox of this.brandingcheckboxes) {
      const checkboxData = {
        BrandingValue: checkbox.checked ? 1 : null, 
        brandingLabel: checkbox.brandingLabel
      };
  
      console.log('Data to Submit:', checkboxData);
  
      this.quotationService.updateCheckboxBrandingValue(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox ${checkbox.brandingLabel} updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);        }
      );
    }
  }
  
  

  updateCheckboxBrandingValue1() {
    for (const checkbox of this.brandingcheckboxes1) {
      const checkboxData = {
        BrandingValue1: checkbox.checked ? 1 : null, // Set to 1 for checked checkbox, null for unchecked checkbox
        brandingLabel1: checkbox.brandingLabel1
      };
  
      console.log('Data to Submit:', checkboxData);
  
      // Trigger the update for the current checkbox
      this.quotationService.updateCheckboxBrandingValue1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox ${checkbox.brandingLabel1} updated successfully.`);
          // Handle success if needed
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          // Handle the error (e.g., show an error message)
        }
      );
    }
  }

  updateCheckboxBrandingValue2() {
    for (const checkbox of this.brandingcheckboxes2) {
      const checkboxData = {
        BrandingValue2: checkbox.checked ? 1 : null, // Set to 1 for checked checkbox, null for unchecked checkbox
        brandingLabel2: checkbox.brandingLabel2
      };
  
      console.log('Data to Submit:', checkboxData);
  
      // Trigger the update for the current checkbox
      this.quotationService.updateCheckboxBrandingValue2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox ${checkbox.brandingLabel2} updated successfully.`);
          // Handle success if needed
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
          // Handle the error (e.g., show an error message)
        }
      );
    }
  }

  updateCheckboxvalue() {
    for (const checkbox of this.checkboxes) {
      const checkboxData = {
        value: checkbox.checked ? 1 : null, 
        label: checkbox.label
      };
  
      this.quotationService.updateCheckboxvalue(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox ${checkbox.brandingLabel2} updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxvalue1() {
    for (const checkbox of this.checkboxes1) {
      const checkboxData = {
        value1: checkbox.checked ? 1 : null, 
        label1: checkbox.label1
      };
  
      this.quotationService.updateCheckboxvalue1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxvalue2() {
    for (const checkbox of this.checkboxes2) {
      const checkboxData = {
        value2: checkbox.checked ? 1 : null, 
        label2: checkbox.label2
      };
  
      this.quotationService.updateCheckboxvalue2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxvalue3() {
    for (const checkbox of this.checkboxes3) {
      const checkboxData = {
        value3: checkbox.checked ? 1 : null, 
        label3: checkbox.label3
      };
  
      this.quotationService.updateCheckboxvalue3(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxvalue4() {
    for (const checkbox of this.checkboxes4) {
      const checkboxData = {
        value4: checkbox.checked ? 1 : null, 
        label4: checkbox.label4
      };
  
      this.quotationService.updateCheckboxvalue4(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxWebValue() {
    for (const checkbox of this.webcheckboxes) {
      const checkboxData = {
        WebValue: checkbox.checked ? 1 : null, 
        webLabel: checkbox.webLabel
      };
  
      this.quotationService.updateCheckboxWebValue(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxWebValue1() {
    for (const checkbox of this.webcheckboxes1) {
      const checkboxData = {
        WebValue1: checkbox.checked ? 1 : null, 
        webLabel1: checkbox.webLabel1
      };
  
      this.quotationService.updateCheckboxWebValue1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxWebValue2() {
    for (const checkbox of this.webcheckboxes2) {
      const checkboxData = {
        WebValue2: checkbox.checked ? 1 : null, 
        webLabel2: checkbox.webLabel2
      };
  
      this.quotationService.updateCheckboxWebValue2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxMobileValue() {
    for (const checkbox of this.mobilecheckboxes) {
      const checkboxData = {
        MobileValue: checkbox.checked ? 1 : null, 
        MobileLabel: checkbox.MobileLabel
      };
  
      this.quotationService.updateCheckboxMobileValue(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxMobileValue1() {
    for (const checkbox of this.mobilecheckboxes1) {
      const checkboxData = {
        MobileValue1: checkbox.checked ? 1 : null, 
        MobileLabel1: checkbox.MobileLabel1
      };
  
      this.quotationService.updateCheckboxMobileValue1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxMobileValue2() {
    for (const checkbox of this.mobilecheckboxes2) {
      const checkboxData = {
        MobileValue2: checkbox.checked ? 1 : null, 
        MobileLabel2: checkbox.MobileLabel2
      };
  
      this.quotationService.updateCheckboxMobileValue2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }

  updateCheckboxDashboardValue() {
    for (const checkbox of this.dashboardcheckboxes) {
      const checkboxData = {
        DashboardValue: checkbox.checked ? 1 : null, 
        DashboardLabel: checkbox.DashboardLabel
      };
  
      this.quotationService.updateCheckboxDashboardValue(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxDashboardValue1() {
    for (const checkbox of this.dashboardcheckboxes1) {
      const checkboxData = {
        DashboardValue1: checkbox.checked ? 1 : null, 
        DashboardLabel1: checkbox.DashboardLabel1
      };
  
      this.quotationService.updateCheckboxDashboardValue1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxDashboardValue2() {
    for (const checkbox of this.dashboardcheckboxes2) {
      const checkboxData = {
        DashboardValue2: checkbox.checked ? 1 : null, 
        DashboardLabel2: checkbox.DashboardLabel2
      };
  
      this.quotationService.updateCheckboxDashboardValue2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }

  updateCheckboxWeb3Value() {
    for (const checkbox of this.web3checkboxes) {
      const checkboxData = {
        Web3Value: checkbox.checked ? 1 : null, 
        Web3Label: checkbox.Web3Label
      };
  
      this.quotationService.updateCheckboxWeb3Value(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxWeb3Value1() {
    for (const checkbox of this.web3checkboxes1) {
      const checkboxData = {
        Web3Value1: checkbox.checked ? 1 : null, 
        Web3Label1: checkbox.Web3Label1
      };
  
      this.quotationService.updateCheckboxWeb3Value1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxWeb3Value2() {
    for (const checkbox of this.web3checkboxes2) {
      const checkboxData = {
        Web3Value2: checkbox.checked ? 1 : null, 
        Web3Label2: checkbox.Web3Label2
      };
  
      this.quotationService.updateCheckboxWeb3Value2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }

  updateCheckboxMotionValue() {
    for (const checkbox of this.motioncheckboxes) {
      const checkboxData = {
        MotionValue: checkbox.checked ? 1 : null, 
        MotionLabel: checkbox.MotionLabel
      };
  
      this.quotationService.updateCheckboxMotionValue(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxMotionValue1() {
    for (const checkbox of this.motioncheckboxes1) {
      const checkboxData = {
        MotionValue1: checkbox.checked ? 1 : null, 
        MotionLabel1: checkbox.MotionLabel1
      };
  
      this.quotationService.updateCheckboxMotionValue1(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }
  updateCheckboxMotionValue2() {
    for (const checkbox of this.motioncheckboxes2) {
      const checkboxData = {
        MotionValue2: checkbox.checked ? 1 : null, 
        MotionLabel2: checkbox.MotionLabel2
      };
  
      this.quotationService.updateCheckboxMotionValue2(this.qotationId, checkboxData).subscribe(
        (response) => {
          console.log(`Checkbox updated successfully.`);
        },
        (error) => {
          console.error(`Error updating checkbox ${checkbox.brandingLabel}:`, error);
        }
      );
    }
  }


 

}
