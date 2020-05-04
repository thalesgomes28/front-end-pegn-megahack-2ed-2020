const express = require("express");

const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);



app.listen(port, () => {
    console.log("API rodando na porta: " + port);
});