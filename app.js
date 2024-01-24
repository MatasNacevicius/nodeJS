// console.log("Hello from backend");

// const information = require("./modules/info");
// console.log(information);

const products = require("./data.js");
console.log(products);

const express = require("express");
const { request, response } = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/cia/yra/mano/routas", (request, response) => {
  response.send(products);
});

app.get("/cia/yra/mano/routas/:id", (req, res) => {
  const product = products.find((prod) => prod.id === parseInt(req.params.id));

  if (!product) {
    res.status(404).send("Product not found");
  }
  res.send(product);
});

app.post("/cia/yra/mano/routas", (req, res) => {
  const newProduct = {
    id: 5,
    product: "Watch",
  };

  products.push(newProduct);
  res.send(products);
});

app.put("/cia/yra/mano/routas/:id", (req, res) => {
  const myProduct = products.find(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (!myProduct) {
    res.status(404).send("Product not found");
  }
  myProduct.product = req.body.product;
  res.send(myProduct);
});

app.delete("/cia/yra/mano/routas/:id", (req, res) => {
  const myProduct = products.find(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (!myProduct) {
    res.status(404).send("Product not found");
  }

  const productIndex = products.indexOf(myProduct);
  products.splice(productIndex, 1);

  res.send(myProduct);
});

const PORT = 8000;

app.listen(PORT || 8000, () => {
  console.log("server is running on port " + PORT);
});
