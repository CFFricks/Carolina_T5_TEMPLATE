const http    = require('http');
const sqlite3 = require('sqlite3').verbose(); 
const hostname = '127.0.0.1';
const port = 3012;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var db = new sqlite3.Database('dbUser.db');
  db.get('SELECT * \
          FROM tbUser \
          WHERE userId = 1', [], (err, row) => {
		res.write("<h1> CURRICULO CAROLINA FAVARO FRICKS </h1>") 
    <hr>
    res.write("<p> Nome:Carolina Favaro Fricks </p>") 
    res.write("<p> Idade: 17 anos </p>")
    res.write("<h4> Graduação: Primeiro ano da faculdade de Engenharia de Software no Instituto de Tecnologia e Liderança"<h4>)
    
	  res.write("<h5> " + row.title + "</h5>"); 
	  res.end(); 
   });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});