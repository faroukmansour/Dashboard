const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const cors = require('cors');
const server = express();
server.use(bodyParser.json());
const PDFDocument = require('pdfkit');
const fs = require('fs');

//Establish the database connection
server.use(cors());

const db = mysql.createConnection({

  host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dl-dashboard'
});

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB"),error;
    } else {
      console.log("successfully Connected to DB");
    }
  });

//Establish the Port

  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....dddd!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8085");

    }
});

//Create client

server.post("/api/client/add", (req, res) => {
    let details = {
      name: req.body.name,
      email:req.body.email,
      lastname:req.body.lastname,
      phone_number:req.body.phone_number,
      code_postal:req.body.code_postal,
      adress:req.body.adress,
      pays:req.body.pays,

     
    };
    let sql = "INSERT INTO client SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Client created Failed" });
      } else {
        res.send({ status: true, message: "Client created successfully" });
      }
    });
  });



//view clients

server.get('/api/client', (req, res) => {
  const query = 'SELECT * FROM client'; // Replace 'clients' with your MySQL table name

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching client data from the database' });
    } else {
      res.json(results);
    }
  });
});


//Search the Records

server.get('/api/client/:name', (req, res) => {
  const name = req.params.name;
  const sql = "SELECT * FROM client WHERE name=?";
  db.query(sql, [name], function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      res.status(500).json({ error: 'Database connection error.' });
    } else {
      res.json({ status: true, data: result });
    }
  });
});



//Update the Records


  //Delete the Clients

  server.delete("/api/client/delete/:id", (req, res) => {
    let sql = "DELETE FROM client WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Client Deleted Failed" });
      } else {
        res.send({ status: true, message: "Client Deleted successfully" });
      }
    });
  });



  server.post("/api/quotation/add", async (req, res) => {
    try {
      const details = {
        name: req.body.name,
        ClientName: req.body.ClientName,
        creation_date: new Date(req.body.creation_date), // Convert to JavaScript Date object
        societe: req.body.societe,
        auteur: req.body.auteur,
        commentaire: req.body.commentaire,
        reduction: req.body.reduction,
        tva: req.body.tva,
        branding: req.body.branding ? '1' : null,
        design: req.body.design ? '1' : null,
        web: req.body.web ? '1' : null,
        mobile: req.body.mobile ? '1' : null,
        dashboard: req.body.dashboard ? '1' : null,
        web3: req.body.web3 ? '1' : null,
        motion: req.body.motion ? '1' : null,
        TempsBranding: req.body.TempsBranding,
        TempsDesign: req.body.TempsDesign,
        TempsWeb: req.body.TempsWeb,
        TempsMobile: req.body.TempsMobile,
        TempsWeb3: req.body.TempsWeb3,
        TempsDashboard: req.body.TempsDashboard,
        TempsMotion: req.body.TempsMotion,
        TarifBranding: req.body.TarifBranding,
        TarifDesign: req.body.TarifDesign,
        TarifWeb: req.body.TarifWeb,
        TarifMobile: req.body.TarifMobile,
        TarifWeb3: req.body.TarifWeb3,
        TarifDashboard: req.body.TarifDashboard,
        TarifMotion: req.body.TarifMotion,
        Design1: req.body.Design1 ? '1' : null,
        Design2: req.body.Design2 ? '1' : null,
        Design3: req.body.Design3 ? '1' : null,
        Design4: req.body.Design4 ? '1' : null,
        Design5: req.body.Design5 ? '1' : null,
        Design11: req.body.Design11 ? '1' : null,
        Design12: req.body.Design12 ? '1' : null,
        Design13: req.body.Design13 ? '1' : null,
        Design14: req.body.Design14 ? '1' : null,
        Design15: req.body.Design15 ? '1' : null,
        Design21: req.body.Design21 ? '1' : null,
        Design22: req.body.Design22 ? '1' : null,
        Design23: req.body.Design23 ? '1' : null,
        Design24: req.body.Design24 ? '1' : null,
        Design25: req.body.Design25 ? '1' : null,
        Design31: req.body.Design31 ? '1' : null,
        Design32: req.body.Design32 ? '1' : null,
        Design33: req.body.Design33 ? '1' : null,
        Design34: req.body.Design34 ? '1' : null,
        Design35: req.body.Design35 ? '1' : null,
        Design41: req.body.Design41 ? '1' : null,
        Design42: req.body.Design42 ? '1' : null,
        Design43: req.body.Design43 ? '1' : null,
        Design44: req.body.Design44 ? '1' : null,
        Design45: req.body.Design45 ? '1' : null,
        Design51: req.body.Design51 ? '1' : null,
        Design52: req.body.Design52 ? '1' : null,
        Design53: req.body.Design53 ? '1' : null,
        Design54: req.body.Design54 ? '1' : null,
        Design55: req.body.Design55 ? '1' : null,
        Dashboard11: req.body.Dashboard11 ? '1' : null,
        Dashboard12: req.body.Dashboard12 ? '1' : null,
        Dashboard13: req.body.Dashboard13 ? '1' : null,
        Dashboard14: req.body.Dashboard14 ? '1' : null,
        Dashboard15: req.body.Dashboard15 ? '1' : null,
        Dashboard21: req.body.Dashboard21 ? '1' : null,
        Dashboard22: req.body.Dashboard22 ? '1' : null,
        Dashboard23: req.body.Dashboard23 ? '1' : null,
        Dashboard24: req.body.Dashboard24 ? '1' : null,
        Dashboard25: req.body.Dashboard25 ? '1' : null,
        Dashboard31: req.body.Dashboard31 ? '1' : null,
        Dashboard32: req.body.Dashboard32 ? '1' : null,
        Dashboard33: req.body.Dashboard33 ? '1' : null,
        Dashboard34: req.body.Dashboard34 ? '1' : null,
        Dashboard35: req.body.Dashboard35 ? '1' : null,
        Dashboard1: req.body.Dashboard1 ? '1' : null,
        Dashboard2: req.body.Dashboard2 ? '1' : null,
        Dashboard3: req.body.Dashboard3 ? '1' : null,

        Branding1: req.body.Branding1 ? '1' : null,
        Branding2: req.body.Branding2 ? '1' : null,
        Branding3: req.body.Branding3 ? '1' : null,
        Branding11: req.body.Branding11 ? '1' : null,
        Branding12: req.body.Branding12 ? '1' : null,
        Branding13: req.body.Branding13 ? '1' : null,
        Branding14: req.body.Branding14 ? '1' : null,
        Branding15: req.body.Branding15 ? '1' : null,
        Branding21: req.body.Branding21 ? '1' : null,
        Branding22: req.body.Branding22 ? '1' : null,
        Branding23: req.body.Branding23 ? '1' : null,
        Branding24: req.body.Branding24 ? '1' : null,
        Branding25: req.body.Branding25 ? '1' : null,
        Branding31: req.body.Branding31 ? '1' : null,
        Branding32: req.body.Branding32 ? '1' : null,
        Branding33: req.body.Branding33 ? '1' : null,
        Branding34: req.body.Branding34 ? '1' : null,
        Branding35: req.body.Branding35 ? '1' : null,

        Web1: req.body.Web1 ? '1' : null,
        Web2: req.body.Web2 ? '1' : null,
        Webb3: req.body.Webb3 ? '1' : null,
        Web11: req.body.Web11 ? '1' : null,
        Web12: req.body.Web12 ? '1' : null,
        Web13: req.body.Web13 ? '1' : null,
        Web14: req.body.Web14 ? '1' : null,
        Web15: req.body.Web15 ? '1' : null,
        Web21: req.body.Web21 ? '1' : null,
        Web22: req.body.Web22 ? '1' : null,
        Web23: req.body.Web23 ? '1' : null,
        Web24: req.body.Web24 ? '1' : null,
        Web25: req.body.Web25 ? '1' : null,
        Web31: req.body.Web31 ? '1' : null,
        Web32: req.body.Web32 ? '1' : null,
        Web33: req.body.Web33 ? '1' : null,
        Web34: req.body.Web34 ? '1' : null,
        Web35: req.body.Web35 ? '1' : null,


        Mobile1: req.body.Mobile1 ? '1' : null,
        Mobile2: req.body.Mobile2 ? '1' : null,
        Mobile3: req.body.Mobile3 ? '1' : null,
        Mobile11: req.body.Mobile11 ? '1' : null,
        Mobile12: req.body.Mobile12 ? '1' : null,
        Mobile13: req.body.Mobile13 ? '1' : null,
        Mobile14: req.body.Mobile14 ? '1' : null,
        Mobile15: req.body.Mobile15 ? '1' : null,
        Mobile21: req.body.Mobile21 ? '1' : null,
        Mobile22: req.body.Mobile22 ? '1' : null,
        Mobile23: req.body.Mobile23 ? '1' : null,
        Mobile24: req.body.Mobile24 ? '1' : null,
        Mobile25: req.body.Mobile25 ? '1' : null,
        Mobile31: req.body.Mobile31 ? '1' : null,
        Mobile32: req.body.Mobile32 ? '1' : null,
        Mobile33: req.body.Mobile33 ? '1' : null,
        Mobile34: req.body.Mobile34 ? '1' : null,
        Mobile35: req.body.Mobile35 ? '1' : null,

        Motion1: req.body.Motion1 ? '1' : null,
        Motion2: req.body.Motion2 ? '1' : null,
        Motion3: req.body.Motion3 ? '1' : null,
        Motion11: req.body.Motion11 ? '1' : null,
        Motion12: req.body.Motion12 ? '1' : null,
        Motion13: req.body.Motion13 ? '1' : null,
        Motion14: req.body.Motion14 ? '1' : null,
        Motion15: req.body.Motion15 ? '1' : null,
        Motion21: req.body.Motion21 ? '1' : null,
        Motion22: req.body.Motion22 ? '1' : null,
        Motion23: req.body.Motion23 ? '1' : null,
        Motion24: req.body.Motion24 ? '1' : null,
        Motion25: req.body.Motion25 ? '1' : null,
        Motion31: req.body.Motion31 ? '1' : null,
        Motion32: req.body.Motion32 ? '1' : null,
        Motion33: req.body.Motion33 ? '1' : null,
        Motion34: req.body.Motion34 ? '1' : null,
        Motion35: req.body.Motion35 ? '1' : null,

        Webbb1: req.body.Webbb1 ? '1' : null,
        Webbb2: req.body.Webbb2 ? '1' : null,
        Webbb3: req.body.Webbb3 ? '1' : null,
        Webbb11: req.body.Webbb11 ? '1' : null,
        Webbb12: req.body.Webbb12 ? '1' : null,
        Webbb13: req.body.Webbb13 ? '1' : null,
        Webbb14: req.body.Webbb14 ? '1' : null,
        Webbb15: req.body.Webbb15 ? '1' : null,
        Webbb21: req.body.Webbb21 ? '1' : null,
        Webbb22: req.body.Webbb22 ? '1' : null,
        Webbb23: req.body.Webbb23 ? '1' : null,
        Webbb24: req.body.Webbb24 ? '1' : null,
        Webbb25: req.body.Webbb25 ? '1' : null,
        Webbb31: req.body.Webbb31 ? '1' : null,
        Webbb32: req.body.Webbb32 ? '1' : null,
        Webbb33: req.body.Webbb33 ? '1' : null,
        Webbb34: req.body.Webbb34 ? '1' : null,
        Webbb35: req.body.Webbb35 ? '1' : null,
        status: req.body.status,

      };
      details.creation_date = details.creation_date.toISOString().split("T")[0];

     // Insert new quotation into the quotations table
     let sqlInsertQuotation = "INSERT INTO quotation SET ?";
     await db.query(sqlInsertQuotation, details);
 
     // Extract the first name and last name from the ClientName
     const [name, lastname] = req.body.ClientName.split(" ");
 
     // Update the n°quotation value in the clients table based on the first name and last name
     let sqlUpdateClient = "UPDATE client SET Nquotations = Nquotations + 1 WHERE name = ? AND lastname = ?";
     await db.query(sqlUpdateClient, [name, lastname]);
 
     res.send({ status: true, message: "Quotation created successfully" });
   } catch (error) {
     console.error(error);
     res.send({ status: false, message: "Quotation creation failed" });
   }
  });
  
    

  


// Get a single quotation by ID
server.get("/api/quotation/edit/:id", (req, res) => {
  let id = req.params.id;

  let sql = "SELECT * FROM quotation WHERE id = ?"; // Assuming the primary key column is 'id'
  db.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Failed to fetch quotation" });
    } else {
      if (results.length > 0) {
        // Format the creation_date to 'YYYY-MM-DD'
        const formattedCreationDate = new Date(results[0].creation_date).toISOString().split("T")[0];

        // Create a new object with the formatted creation_date
        const formattedQuotation = {
          ...results[0],
          creation_date: formattedCreationDate
        };

        res.json(formattedQuotation);
      } else {
        res.status(404).json({ message: "Quotation not found" });
      }
    }
  });
});


server.put("/api/quotation/edit/:id", (req, res) => {
  let id = req.params.id;
  let {
    name,
    ClientName,
    creation_date,
    societe,
    auteur,
    commentaire,
    reduction,
    tva,
    branding ,
    design,
    web,
    mobile,
    dashboard,
    motion,
    web3,
    TarifBranding,
    TarifDesign,
    TarifWeb,
    TarifMobile,
    TarifWeb3,
    TarifDashboard,
    TarifMotion,
    TempsBranding,
    TempsDesign,
    TempsWeb,
    TempsMobile,
    TempsWeb3,
    TempsDashboard,
    TempsMotion,
    Design1,
    Design2,
    Design3,
    Design4,
    Design5,
    Design11,
    Design12,
    Design13,
    Design14,
    Design15,
    Design21,
    Design22,
    Design23,
    Design24,
    Design25,
    Design31,
    Design32,
    Design33,
    Design34,
    Design35,
    Design41,
    Design42,
    Design43,
    Design44,
    Design45,
    Design51,
    Design52,
    Design53,
    Design54,
    Design55,
    Dashboard1,
    Dashboard2,
    Dashboard3,
    Dashboard11,
    Dashboard12,
    Dashboard13,
    Dashboard14,
    Dashboard15,
    Dashboard21,
    Dashboard22,
    Dashboard23,
    Dashboard24,
    Dashboard25,
    Dashboard31,
    Dashboard32,
    Dashboard33,
    Dashboard34,
    Dashboard35,
    Branding1,
    Branding2,
    Branding3,
    Branding11,
    Branding12,
    Branding13,
    Branding14,
    Branding15,
    Branding21,
    Branding22,
    Branding23,
    Branding24,
    Branding25,
    Branding31,
    Branding32,
    Branding33,
    Branding34,
    Branding35,
    Web1,
    Web2,
    Webb3,
    Web11,
    Web12,
    Web13,
    Web14,
    Web15,
    Web21,
    Web22,
    Web23,
    Web24,
    Web25,
    Web31,
    Web32,
    Web33,
    Web34,
    Web35,
    Mobile1,
    Mobile2,
    Mobile3,
    Mobile11,
    Mobile12,
    Mobile13,
    Mobile14,
    Mobile15,
    Mobile21,
    Mobile22,
    Mobile23,
    Mobile24,
    Mobile25,
    Mobile31,
    Mobile32,
    Mobile33,
    Mobile34,
    Mobile35,
Motion1,
Motion2,
Motion3,
Motion11,
Motion12,
Motion13,
Motion14,
Motion15,
Motion21,
Motion22,
Motion23,
Motion24,
Motion25,
Motion31,
Motion32,
Motion33,
Motion34,
Motion35,
Webbb1,
Webbb2,
Webbb3,
Webbb11,
Webbb12,
Webbb13,
Webbb14,
Webbb15,
Webbb21,
Webbb22,
Webbb23,
Webbb24,
Webbb25,
Webbb31,
Webbb32,
Webbb33,
Webbb34,
Webbb35,





  } = req.body;

const sql = `
    UPDATE quotation 
    SET name = ?, ClientName = ?, creation_date = ?, societe = ?, auteur = ?, commentaire = ?, 
        reduction = ?, tva = ?, branding = ?, design = ?, web = ?, mobile = ?, web3 = ?, dashboard = ?, 
        motion = ?, TarifBranding = ?, TarifDesign = ?, TarifWeb = ?, TarifMobile = ?, TarifWeb3 = ?, 
        TarifDashboard = ?, TarifMotion = ?, TempsBranding = ?, TempsDesign = ?, TempsWeb = ?, 
        TempsMobile = ?, TempsWeb3 = ?, TempsDashboard = ?, TempsMotion = ?, Design1 = ?, Design2 = ?, 
        Design3 = ?, Design4 = ?, Design5 = ?, Design11 = ?, Design12 = ?, Design13 = ?, Design14 = ?, 
        Design15 = ?, Design21 = ?, Design22 = ?, Design23 = ?, Design24 = ?, Design25 = ?, Design31 = ?, 
        Design32 = ?, Design33 = ?, Design34 = ?, Design35 = ?, Design41 = ?, Design42 = ?, Design43 = ?, 
        Design44 = ?, Design45 = ?, Design51 = ?, Design52 = ?, Design53 = ?, Design54 = ?, Design55 = ?, 
        Dashboard1 = ?, Dashboard2 = ?, Dashboard3 = ?, Dashboard11 = ?, Dashboard12 = ?, Dashboard13 = ?, 
        Dashboard14 = ?, Dashboard15 = ?, Dashboard21 = ?, Dashboard22 = ?, Dashboard23 = ?, Dashboard24 = ?, 
        Dashboard25 = ?, Dashboard31 = ?, Dashboard32 = ?, Dashboard33 = ?, Dashboard34 = ?, Dashboard35 = ?, 
        Branding1 = ?, Branding2 = ?, Branding3 = ?, Branding11 = ?, Branding12 = ?, Branding13 = ?, Branding14 = ?, 
        Branding15 = ?, Branding21 = ?, Branding22 = ?, Branding23 = ?, Branding24 = ?, Branding25 = ?, Branding31 = ?, 
        Branding32 = ?, Branding33 = ?, Branding34 = ?, Branding35 = ?, Web1 = ?, Web2 = ?, Webb3 = ?, Web11 = ?, Web12 = ?,
        Web13 = ?, Web14 = ?, Web15 = ?, Web21 = ?, Web22 = ?, Web23 = ?, Web24 = ?, Web25 = ?, Web31 = ?, Web32 = ?,
        Web33 = ?, Web34 = ?, Web35 = ?, Mobile1 = ?, Mobile2 = ?, Mobile3 = ?, Mobile11 = ?, Mobile12 = ?, Mobile13 = ?, Mobile14 = ?,
        Mobile15 = ?, Mobile21 = ?, Mobile22 = ?, Mobile23 = ?, Mobile24 = ?, Mobile25 = ?, Mobile31 = ?, Mobile32 = ?, Mobile33 = ?, Mobile34 = ?,
        Mobile35 = ?, Motion1 = ?, Motion2 = ?, Motion3 = ?, Motion11 = ?, Motion12 = ?, Motion13 = ?, Motion14= ?, Motion15 = ?,
        Motion21 = ?, Motion22 = ?, Motion23 = ?, Motion24 = ?, Motion25 = ?, Motion31 = ?, Motion32 = ?, Motion33 = ?, Motion34 = ?, Motion35 = ?, Webbb1 = ?, 
        Webbb2 = ?, Webbb3 = ?, Webbb11 = ?, Webbb12 = ?, Webbb13 = ?, Webbb14 = ?, Webbb15 = ?, Webbb21 = ?, Webbb22 = ?,
        Webbb23 = ?, Webbb24 = ?, Webbb25 = ?, Webbb31 = ?, Webbb32 = ?, Webbb33 = ?, Webbb34 = ?, Webbb35 = ?
    WHERE id = ?;
`;
  let values = [
    name,
    ClientName,
    creation_date,
    societe,
    auteur,
    commentaire,
    reduction,
    tva,
    branding ? '1' : null,
    design ? '1' : null,
    web ? '1' : null,
    mobile ? '1' : null,
    web3 ? '1' : null,
    dashboard ? '1' : null,
    motion ? '1' : null,
    TarifBranding,
    TarifDesign,
    TarifWeb,
    TarifMobile,
    TarifWeb3,
    TarifDashboard,
    TarifMotion,
    TempsBranding,
    TempsDesign,
    TempsWeb,
    TempsMobile,
    TempsWeb3,
    TempsDashboard,
    TempsMotion,
    Design1 ? '1' : null,
    Design2 ? '1' : null,
    Design3 ? '1' : null,
    Design4 ? '1' : null,
    Design5 ? '1' : null,
    Design11 ? '1' : null,
    Design12 ? '1' : null,
    Design13 ? '1' : null,
    Design14 ? '1' : null,
    Design15 ? '1' : null,
    Design21 ? '1' : null,
    Design22 ? '1' : null,
    Design23 ? '1' : null,
    Design24 ? '1' : null,
    Design25 ? '1' : null,
    Design31 ? '1' : null,
    Design32 ? '1' : null,
    Design33 ? '1' : null,
    Design34 ? '1' : null,
    Design35 ? '1' : null,
    Design41 ? '1' : null,
    Design42 ? '1' : null,
    Design43 ? '1' : null,
    Design44 ? '1' : null,
    Design45 ? '1' : null,
    Design51 ? '1' : null,
    Design52 ? '1' : null,
    Design53 ? '1' : null,
    Design54 ? '1' : null,
    Design55 ? '1' : null,
    Dashboard1 ? '1' : null,
    Dashboard2 ? '1' : null,
    Dashboard3 ? '1' : null,
    Dashboard11 ? '1' : null,
    Dashboard12 ? '1' : null,
    Dashboard13 ? '1' : null,
    Dashboard14 ? '1' : null,
    Dashboard15 ? '1' : null,
    Dashboard21 ? '1' : null,
    Dashboard22 ? '1' : null,
    Dashboard23 ? '1' : null,
    Dashboard24 ? '1' : null,
    Dashboard25 ? '1' : null,
    Dashboard31 ? '1' : null,
    Dashboard32 ? '1' : null,
    Dashboard33 ? '1' : null,
    Dashboard34 ? '1' : null,
    Dashboard35 ? '1' : null,
    Branding1 ? '1' : null,
    Branding2 ? '1' : null,
    Branding3 ? '1' : null,
    Branding11 ? '1' : null,
    Branding12 ? '1' : null,
    Branding13 ? '1' : null,
    Branding14 ? '1' : null,
    Branding15 ? '1' : null,
    Branding21 ? '1' : null,
    Branding22 ? '1' : null,
    Branding23 ? '1' : null,
    Branding24 ? '1' : null,
    Branding25 ? '1' : null,
    Branding31 ? '1' : null,
    Branding32 ? '1' : null,
    Branding33 ? '1' : null,
    Branding34 ? '1' : null,
    Branding35 ? '1' : null,
    Web1 ? '1' : null,
    Web2 ? '1' : null,
    Webb3 ? '1' : null,
    Web11 ? '1' : null,
    Web12 ? '1' : null,
    Web13 ? '1' : null,
    Web14 ? '1' : null,
    Web15 ? '1' : null,
    Web21 ? '1' : null,
    Web22 ? '1' : null,
    Web23 ? '1' : null,
    Web24 ? '1' : null,
    Web25 ? '1' : null,
    Web31 ? '1' : null,
    Web32 ? '1' : null,
    Web33 ? '1' : null,
    Web34 ? '1' : null,
    Web35 ? '1' : null,
    Mobile1 ? '1' : null,
    Mobile2 ? '1' : null,
    Mobile3 ? '1' : null,
    Mobile11 ? '1' : null,
    Mobile12 ? '1' : null,
    Mobile13 ? '1' : null,
    Mobile14 ? '1' : null,
    Mobile15 ? '1' : null,
    Mobile21 ? '1' : null,
    Mobile22 ? '1' : null,
    Mobile23 ? '1' : null,
    Mobile24 ? '1' : null,
    Mobile25 ? '1' : null,
    Mobile31 ? '1' : null,
    Mobile32 ? '1' : null,
    Mobile33 ? '1' : null,
    Mobile34 ? '1' : null,
    Mobile35 ? '1' : null,
    Motion1 ? '1' : null,
    Motion2 ? '1' : null,
    Motion3 ? '1' : null,
    Motion11 ? '1' : null,
    Motion12 ? '1' : null,
    Motion13 ? '1' : null,
    Motion14 ? '1' : null,
    Motion15 ? '1' : null,
    Motion21 ? '1' : null,
    Motion22 ? '1' : null,
    Motion23 ? '1' : null,
    Motion24 ? '1' : null,
    Motion25 ? '1' : null,
    Motion31 ? '1' : null,
    Motion32 ? '1' : null,
    Motion33 ? '1' : null,
    Motion34 ? '1' : null,
    Motion35 ? '1' : null,
    Webbb1 ? '1' : null,
    Webbb2 ? '1' : null,
    Webbb3 ? '1' : null,
    Webbb11 ? '1' : null,
    Webbb12 ? '1' : null,
    Webbb13 ? '1' : null,
    Webbb14 ? '1' : null,
    Webbb15 ? '1' : null,
    Webbb21 ? '1' : null,
    Webbb22 ? '1' : null,
    Webbb23 ? '1' : null,
    Webbb24 ? '1' : null,
    Webbb25 ? '1' : null,
    Webbb31 ? '1' : null,
    Webbb32 ? '1' : null,
    Webbb33 ? '1' : null,
    Webbb34 ? '1' : null,
    Webbb35 ? '1' : null,

    id,
  ];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Quotation update failed:", error);
      res.status(500).json({ error: "Quotation update failed" });
    } else {
      res.json({ message: "Quotation updated successfully" });
    }
  });
});


    

  //view quotations

  server.get('/api/quotation', (req, res) => {
    const query = 'SELECT * FROM quotation';
  
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error fetching quotation data from the database' });
      } else {
        // Format the creation_date for each quotation in the results
        const formattedResults = results.map((quotation) => {
          const formattedCreationDate = new Date(quotation.creation_date).toISOString().split("T")[0];
          return {
            ...quotation,
            creation_date: formattedCreationDate
          };
        });
  
        res.json(formattedResults);
      }
    });
  });
  

 //Delete the quotation

 server.delete("/api/quotation/delete/:id", (req, res) => {
  let sql = "DELETE FROM quotation WHERE id=" + req.params.id + "";
  let query = db.query(sql, (error) => {
    if (error) {
      res.send({ status: false, message: "quotation Deleted Failed" });
    } else {
      res.send({ status: true, message: "quotation Deleted successfully" });
    }
  });
});


server.get('/lastid', (req, res) => {
  db.query('SELECT MAX(id) AS lastId FROM quotation', (error, results) => {
    if (error) {
      console.error('Error fetching last ID:', error);
      res.status(500).json({ error: 'Error fetching last ID' });
    } else {
      const lastId = results[0].lastId;
      res.json({ lastId });
    }
  });
});
  


// Database setup (using a hypothetical database library)

// Serve file based on quotation ID
server.get('/api/quotation/download/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Execute a MySQL query to retrieve quotation data
    const query = 'SELECT * FROM quotation WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).send('Internal server error.');
      }

      if (results.length === 0) {
        return res.status(404).send('Quotation not found.');
      }

      // Assuming you have a 'file_content' column in your quotations table
      const quotationData = results[0]; // Get the first (and presumably only) result

      const doc = new PDFDocument();

      // Generate a dynamic file name based on the quotation data
      const fileName = `quotation_${quotationData.id}.pdf`;

      // Set the filename for the downloaded file
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

      // Pipe the PDF content to the response
      doc.pipe(res);

      // Add content to the PDF
      doc.text(`Quotation ID: ${quotationData.id}`);
      doc.text(`Client: ${quotationData.ClientName}`);
      doc.text(`Auteur: ${quotationData.auteur}`);

      // Finalize the PDF document
      doc.end();
    });
  } catch (error) {
    console.error('Error generating file:', error);
    res.status(500).send('Internal server error.');
  }
});

/// Serve file based on quotation ID for printing a light version
server.get('/api/quotation/print/light/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Execute a MySQL query to retrieve quotation data specifically for printing a light version
    const query = 'SELECT * FROM quotation WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error querying database for printing a light version:', error);
        return res.status(500).send('Internal server error.');
      }

      if (results.length === 0) {
        return res.status(404).send('Quotation not found.');
      }

      // Assuming you have a 'file_content' column in your quotations table
      const quotationData = results[0]; // Get the first (and presumably only) result

      const doc = new PDFDocument();

      // Generate a dynamic file name based on the quotation data for printing a light version
      const fileName = `quotation_${quotationData.id}_light.pdf`;

      // Set the filename for the PDF
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename=${fileName}`); // Use 'inline' to display in the browser

      // Pipe the PDF content to the response
      doc.pipe(res);

      // Add content to the PDF for printing a light version
      doc.text(`Quotation ID (Light Version): ${quotationData.id}`);

      // Check if ClientName is not NULL before adding it to the PDF
      if (quotationData.ClientName !== null) {
        doc.text(`Client (Light Version): ${quotationData.ClientName}`);
      }

      // Check if auteur is not NULL before adding it to the PDF
      if (quotationData.auteur !== null) {
        doc.text(`Auteur (Light Version): ${quotationData.auteur}`);
      }

      // Finalize the PDF document
      doc.end();
    });
  } catch (error) {
    console.error('Error generating file for printing a light version:', error);
    res.status(500).send('Internal server error.');
  }
});

// Serve file based on quotation ID for printing a dark version
server.get('/api/quotation/print/dark/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Execute a MySQL query to retrieve quotation data specifically for printing a dark version
    const query = 'SELECT * FROM quotation WHERE id = ?';
    db.query(query, [id], (error, results) => {
      if (error) {
        console.error('Error querying database for printing a dark version:', error);
        return res.status(500).send('Internal server error.');
      }

      if (results.length === 0) {
        return res.status(404).send('Quotation not found.');
      }

      // Assuming you have a 'file_content' column in your quotations table
      const quotationData = results[0]; // Get the first (and presumably only) result

      const doc = new PDFDocument();

      // Generate a dynamic file name based on the quotation data for printing a dark version
      const fileName = `quotation_${quotationData.id}_dark.pdf`;

      // Set the filename for the PDF
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename=${fileName}`); // Use 'inline' to display in the browser

      // Set background color to black
      doc.rect(0, 0, doc.page.width, doc.page.height).fill('black');

      // Set text color to white
      doc.fill('white');

      // Pipe the PDF content to the response
      doc.pipe(res);

      // Add content to the PDF for printing a dark version
      doc.text(`Quotation ID (Dark Version): ${quotationData.id}`);
      doc.text(`Client (Dark Version): ${quotationData.ClientName}`);
      doc.text(`Auteur (Dark Version): ${quotationData.auteur}`);

      // Finalize the PDF document
      doc.end();
    });
  } catch (error) {
    console.error('Error generating file for printing a dark version:', error);
    res.status(500).send('Internal server error.');
  }
});


server.post('/login', (req, res) => {
  const { name, lastname } = req.body;
  const query = `SELECT * FROM client WHERE name = ? AND lastname = ?`;
  db.query(query, [name, lastname], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 1) {
      // Successful login
      res.json({ message: 'Login successful' });
    } else {
      // Invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});



// Define a route to save checkbox data
server.post("/api/checkboxes", async (req, res) => {
  try{
    const details ={
      label :req.body.label,
      label1 :req.body.label1,
      label2 :req.body.label2,
      label3 :req.body.label3,
      label4 :req.body.label4,
      brandingLabel :req.body.brandingLabel,
      brandingLabel1 :req.body.brandingLabel1,
      brandingLabel2 :req.body.brandingLabel2,
      webLabel :req.body.webLabel,
      webLabel1 :req.body.webLabel1,
      webLabel2 :req.body.webLabel2,
      MobileLabel :req.body.MobileLabel,
      MobileLabel1 :req.body.MobileLabel1,
      MobileLabel2 :req.body.MobileLabel2,
      DashboardLabel :req.body.DashboardLabel,
      DashboardLabel1 :req.body.DashboardLabel1,
      DashboardLabel2 :req.body.DashboardLabel2,
      Web3Label :req.body.Web3Label,
      Web3Label1 :req.body.Web3Label1,
      Web3Label2 :req.body.Web3Label2,
      MotionLabel :req.body.MotionLabel,
      MotionLabel1 :req.body.MotionLabel1,
      MotionLabel2 :req.body.MotionLabel2,
      qotationId :req.body.qotationId	,


    };
  

  // Insert the checkbox data into your database
  let sql = "INSERT INTO checkboxes SET ?";
  await db.query(sql, details);

  res.send({ status: true, message: "checkbox  data saved successfully" });
} catch (error) {
  console.error(error);
  res.send({ status: false, message: "Checkbox  data saved failed" });
}
});

// Define a route to save checkbox data
server.post('/api/checkboxes1', (req, res) => {
  const { label1 } = req.body;

  // Insert the checkbox data into your database
  const sql = 'INSERT INTO checkboxes (label1) VALUES (?)';
  db.query(sql, [label1], (err, result) => {
    if (err) {
      console.error("Error saving checkbox data", err);
      res.status(500).json({ message: 'Error saving checkbox data' });
    } else {
      console.log("Checkbox data saved successfully");
      res.status(200).json({ message: 'Checkbox data saved successfully' });
    }
  });
});

// Define a route to save checkbox data
server.post('/api/checkboxes2', (req, res) => {
  const { label2 } = req.body;

  // Insert the checkbox data into your database
  const sql = 'INSERT INTO checkboxes (label2) VALUES (?)';
  db.query(sql, [label2], (err, result) => {
    if (err) {
      console.error("Error saving checkbox data", err);
      res.status(500).json({ message: 'Error saving checkbox data' });
    } else {
      console.log("Checkbox data saved successfully");
      res.status(200).json({ message: 'Checkbox data saved successfully' });
    }
  });
});

// Define a route to save checkbox data
server.post('/api/checkboxes3', (req, res) => {
  const { label3 } = req.body;

  // Insert the checkbox data into your database
  const sql = 'INSERT INTO checkboxes (label3) VALUES (?)';
  db.query(sql, [label3], (err, result) => {
    if (err) {
      console.error("Error saving checkbox data", err);
      res.status(500).json({ message: 'Error saving checkbox data' });
    } else {
      console.log("Checkbox data saved successfully");
      res.status(200).json({ message: 'Checkbox data saved successfully' });
    }
  });
});

// Define a route to save checkbox data
server.post('/api/checkboxes4', (req, res) => {
  const { label4 } = req.body;

  // Insert the checkbox data into your database
  const sql = 'INSERT INTO checkboxes (label4) VALUES (?)';
  db.query(sql, [label4], (err, result) => {
    if (err) {
      console.error("Error saving checkbox data", err);
      res.status(500).json({ message: 'Error saving checkbox data' });
    } else {
      console.log("Checkbox data saved successfully");
      res.status(200).json({ message: 'Checkbox data saved successfully' });
    }
  });
});

// Define a route to retrieve checkbox data
server.get('/api/checkboxes/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE label IS NOT NULL AND label <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxes4/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE label4 IS NOT NULL AND label4 <> "" AND qotationId = ?; ';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxes1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE label1 IS NOT NULL AND label1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    

      res.status(200).json(rows);
    }
  });
});


server.get('/api/checkboxes2/:qotationId', (req, res) => {
  // Retrieve checkbox data from your database
  let qotationId = req.params.qotationId;

  const sql = 'SELECT * FROM checkboxes WHERE label2 IS NOT NULL AND label2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
      // Define a function to sort based on custom logic
     

      res.status(200).json(rows);
    }
  });
});


server.get('/api/checkboxes3/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE label3 IS NOT NULL AND label3 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    
      res.status(200).json(rows);
    }
  });
});


server.get('/api/checkboxesbrandingLabel/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE brandingLabel IS NOT NULL AND brandingLabel <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesbrandingLabel1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE brandingLabel1 IS NOT NULL AND brandingLabel1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
   
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesbrandingLabel2/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE brandingLabel2 IS NOT NULL AND brandingLabel2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxeswebLabel/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE WebLabel IS NOT NULL AND WebLabel <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxeswebLabel1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE WebLabel1 IS NOT NULL AND WebLabel1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxeswebLabel2/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE WebLabel2 IS NOT NULL AND WebLabel2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
   
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesMobileLabel/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE MobileLabel IS NOT NULL AND MobileLabel <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
   

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesMobileLabel1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE MobileLabel1 IS NOT NULL AND MobileLabel1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
      // Define a function to sort based on custom logic
    

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesMobileLabel2/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE MobileLabel2 IS NOT NULL AND MobileLabel2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesDashboardLabel/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE DashboardLabel IS NOT NULL AND DashboardLabel <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesDashboardLabel1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE DashboardLabel1 IS NOT NULL AND DashboardLabel1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {

      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesDashboardLabel2/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE DashboardLabel2 IS NOT NULL AND DashboardLabel2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
      
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesWeb3Label/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE Web3Label IS NOT NULL AND Web3Label <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
     
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesWeb3Label1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE Web3Label1 IS NOT NULL AND Web3Label1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesWeb3Label2/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE Web3Label2 IS NOT NULL AND Web3Label2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
     
      res.status(200).json(rows);
    }
  });
});

server.get('/api/checkboxesMotionLabel/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE MotionLabel IS NOT NULL AND MotionLabel <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
    

      res.status(200).json(rows);
    }
  });
});


server.get('/api/checkboxesMotionLabel1/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE MotionLabel1 IS NOT NULL AND MotionLabel1 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
   
      res.status(200).json(rows);
    }
  });
});


server.get('/api/checkboxesMotionLabel2/:qotationId', (req, res) => {
  let qotationId = req.params.qotationId;

  // Retrieve checkbox data from your database
  const sql = 'SELECT * FROM checkboxes WHERE MotionLabel2 IS NOT NULL AND MotionLabel2 <> "" AND qotationId = ?;';
  db.query(sql,[qotationId], (err, rows) => {
    if (err) {
      console.error("Error retrieving checkbox data", err);
      res.status(500).json({ message: 'Error retrieving checkbox data' });
    } else {
      res.status(200).json(rows);
    }
  });
});

server.put("/api/checkbox/BrandingValue/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { BrandingValue } = req.body; 
  let { brandingLabel } = req.body; 
  let sql = `UPDATE checkboxes SET BrandingValue = ?  WHERE qotationId = ? AND brandingLabel = ?`;
  let values = [BrandingValue  , qotationId , brandingLabel];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/BrandingValue1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { BrandingValue1 } = req.body; 
  let { brandingLabel1 } = req.body; 
  let sql = `UPDATE checkboxes SET BrandingValue1 = ?  WHERE qotationId = ? and brandingLabel1 = ?`;
  let values = [BrandingValue1  ? '1' : null, qotationId , brandingLabel1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/BrandingValue2/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { BrandingValue2 } = req.body; 
  let { brandingLabel2 } = req.body; 
  let sql = `UPDATE checkboxes SET BrandingValue2 = ?  WHERE qotationId = ? and brandingLabel2 = ?`;
  let values = [BrandingValue2  , qotationId , brandingLabel2];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/value/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { value } = req.body; 
  let { label } = req.body; 
  let sql = `UPDATE checkboxes SET value = ?  WHERE qotationId = ? and label = ?`;
  let values = [value  , qotationId , label];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/value1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { value1 } = req.body; 
  let { label1 } = req.body; 
  let sql = `UPDATE checkboxes SET value1 = ?  WHERE qotationId = ? and label1 = ?`;
  let values = [value1  , qotationId , label1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/value2/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { value2 } = req.body; 
  let { label2 } = req.body; 
  let sql = `UPDATE checkboxes SET value2 = ?  WHERE qotationId = ? and label2 = ?`;
  let values = [value2  , qotationId , label2];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/value3/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { value3 } = req.body; 
  let { label3 } = req.body; 
  let sql = `UPDATE checkboxes SET value3 = ?  WHERE qotationId = ? and label3 = ?`;
  let values = [value3  , qotationId , label3];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/value4/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { value4 } = req.body; 
  let { label4 } = req.body; 
  let sql = `UPDATE checkboxes SET value4 = ?  WHERE qotationId = ? and label4 = ?`;
  let values = [value4  , qotationId , label4];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/WebValue/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { WebValue } = req.body; 
  let { webLabel } = req.body; 
  let sql = `UPDATE checkboxes SET WebValue = ?  WHERE qotationId = ? and webLabel = ?`;
  let values = [WebValue  , qotationId , webLabel];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/WebValue1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { WebValue1 } = req.body; 
  let { webLabel1 } = req.body; 
  let sql = `UPDATE checkboxes SET WebValue1 = ?  WHERE qotationId = ? and webLabel1 = ?`;
  let values = [WebValue1  , qotationId , webLabel1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/WebValue2/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { WebValue2 } = req.body; 
  let { webLabel2 } = req.body; 
  let sql = `UPDATE checkboxes SET WebValue2 = ?  WHERE qotationId = ? and webLabel2 = ?`;
  let values = [WebValue2  , qotationId , webLabel2];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/MobileValue/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { MobileValue } = req.body; 
  let { MobileLabel } = req.body; 
  let sql = `UPDATE checkboxes SET MobileValue = ?  WHERE qotationId = ? and MobileLabel = ?`;
  let values = [MobileValue  , qotationId , MobileLabel];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/MobileValue1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { MobileValue1 } = req.body; 
  let { MobileLabel1 } = req.body; 
  let sql = `UPDATE checkboxes SET MobileValue1 = ?  WHERE qotationId = ? and MobileLabel1 = ?`;
  let values = [MobileValue1  , qotationId , MobileLabel1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/MobileValue2/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { MobileValue2 } = req.body; 
  let { MobileLabel2 } = req.body; 
  let sql = `UPDATE checkboxes SET MobileValue2 = ?  WHERE qotationId = ? and MobileLabel2 = ?`;
  let values = [MobileValue2  , qotationId , MobileLabel2];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/DashboardValue/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { DashboardValue } = req.body; 
  let { DashboardLabel } = req.body; 
  let sql = `UPDATE checkboxes SET DashboardValue = ?  WHERE qotationId = ? and DashboardLabel = ?`;
  let values = [DashboardValue  , qotationId , DashboardLabel];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/DashboardValue1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { DashboardValue1 } = req.body; 
  let { DashboardLabel1 } = req.body; 
  let sql = `UPDATE checkboxes SET DashboardValue1 = ?  WHERE qotationId = ? and DashboardLabel1 = ?`;
  let values = [DashboardValue1  , qotationId , DashboardLabel1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});server.put("/api/checkbox/DashboardValue/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { DashboardValue } = req.body; 
  let { DashboardLabel } = req.body; 
  let sql = `UPDATE checkboxes SET DashboardValue = ?  WHERE qotationId = ? and DashboardLabel = ?`;
  let values = [DashboardValue  , qotationId , DashboardLabel];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/Web3Value/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { Web3Value } = req.body; 
  let { Web3Label } = req.body; 
  let sql = `UPDATE checkboxes SET Web3Value = ?  WHERE qotationId = ? and Web3Label = ?`;
  let values = [Web3Value  , qotationId , Web3Label];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/Web3Value1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { Web3Value1 } = req.body; 
  let { Web3Label1 } = req.body; 
  let sql = `UPDATE checkboxes SET Web3Value1 = ?  WHERE qotationId1 = ? and Web3Label1 = ?`;
  let values = [Web3Value1  , qotationId , Web3Label1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});server.put("/api/checkbox/Web3Value2/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { Web3Value2 } = req.body; 
  let { Web3Label2 } = req.body; 
  let sql = `UPDATE checkboxes SET Web3Value2 = ?  WHERE qotationId = ? and Web3Label2 = ?`;
  let values = [Web3Value2  , qotationId , Web3Label2];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/MotionValue/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { MotionValue } = req.body; 
  let { MotionLabel } = req.body; 
  let sql = `UPDATE checkboxes SET MotionValue = ?  WHERE qotationId = ? and MotionLabel = ?`;
  let values = [MotionValue  , qotationId , MotionLabel];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});

server.put("/api/checkbox/MotionValue1/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { MotionValue1 } = req.body; 
  let { MotionLabel1 } = req.body; 
  let sql = `UPDATE checkboxes SET MotionValue1 = ?  WHERE qotationId = ? and MotionLabel1 = ?`;
  let values = [MotionValue1  , qotationId , MotionLabel1];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});
server.put("/api/checkbox/MotionValue2/:qotationId", (req, res) => {
  let qotationId = req.params.qotationId;
  let { MotionValue2 } = req.body; 
  let { MotionLabel2 } = req.body; 
  let sql = `UPDATE checkboxes SET MotionValue2 = ?  WHERE qotationId = ? and MotionLabel2 = ?`;
  let values = [MotionValue2 ? '1' : null , qotationId , MotionLabel2];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error("Checkbox update failed:", error);
      res.status(500).json({ error: "Checkbox update failed" });
    } else {
      res.json({ message: "Checkbox updated successfully" });
    }
  });
});








