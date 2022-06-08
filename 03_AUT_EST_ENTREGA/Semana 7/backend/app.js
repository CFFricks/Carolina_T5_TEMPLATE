// Importing all required libraries.
const express = require('express');

// Instancing app with express.
const app = express();

// Defining the server hostname and port.
const hostname = '127.0.0.1';
const port = 3026;

const sqlite3 = require("sqlite3").verbose();
const DBPATH = "database.db";
// Setting up the express static middleware. 
app.use(express.static("../frontend/"));

//returns comunication info
app.use(express.json());
app.get("/Comunicacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  let db = new sqlite3.Database(DBPATH);
  let sql = "SELECT * FROM Comunicacao";
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      throw err;
    }

    // response
    res.json({ workExperiences: rows });
  });
  db.close();
});

app.post("/Comunicacao/criar", (req,res) => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");

    const texto = req.body.texto

    let db = new sqlite3.Database(DBPATH);
    let sql = `INSERT INTO Comunicacao("text") VALUES("${texto}")`;
    let params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        throw err;
      }

      // response
      res.json({ workExperiences: rows });
    });
    db.close();
})

app.put("/Comunicacao/atualizar/:id", (req, res) => {

  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = req.params.id

  const texto = req.body.texto

  let db = new sqlite3.Database(DBPATH);
  let sql = `UPDATE Comunicacao SET text = ${texto} WHERE id = ${id}`;
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      throw err;
    }

    // response
    res.json({ workExperiences: rows });
  });
  db.close();
})

app.delete("/Comunicacao/deletar/:id", (req, res) => {

  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = req.params.id

  let db = new sqlite3.Database(DBPATH);
  let sql = `DELETE FROM Comunicacao WHERE id = ${id}`;
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      throw err;
    }

    // response
    res.json({ workExperiences: rows });
  });
  db.close();
})



//returns contact info
app.get("/contato", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  let db = new sqlite3.Database(DBPATH);
  let sql = "SELECT * FROM contato";
  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) {
      throw err;
    }

    // response
    res.json({ contato: rows });
  });
  db.close();
});

//returns academic info
app.get("/formacaoAcademica", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  let db = new sqlite3.Database(DBPATH);
  let sql = "SELECT * FROM FormacaoAcademica";
  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) {
      throw err;
    }

    // response
    res.json({ formaçaoAcademica: rows });
  });
  db.close();
});



// Setting up the express static middleware. 
app.use(express.static("../frontend/"));

// Setting up the server.
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});