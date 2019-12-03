// associar as dependências instaladas
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// inicializar app express
const app = express();

app.get("/", function(req, res) {
  res.send("END POINT INVÁLIDO!");
});

const routes = require("./routes/api");
app.use(bodyParser.json());
app.use("/api", routes);

mongoose.connect(
  "mongodb://root:emergencia1@ds053597.mlab.com:53597/emergencia?retryWrites=true",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
// Confirma ligação na consola
mongoose.connection.on("connected", function() {
  console.log("Connected to Database");
});
// Mensagem de Erro
mongoose.connection.on("error", err => {
  console.log("Database error " + err);
});

let port = 3000;
// servidor á escuta no porto 3000
// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () => {
  console.log("Servidor em execução no porto: " + port);
});
