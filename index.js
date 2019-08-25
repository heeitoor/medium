const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.get("/status", (req, res) => {
  res.sendStatus(200);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/player", (req, res) => {
  res.send([
    { id: 1, fullName: "John Doe", displayName: "Mr. Doe" },
    { id: 2, fullName: "Jane Doe", displayName: "Wonderwoman" }
  ]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
