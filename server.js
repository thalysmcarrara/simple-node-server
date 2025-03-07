const express = require("express");
const app = express();
const port = 3000;

// Middleware para fazer o parsing do corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota que aceita GET e POST
app.all("/", (req, res) => {
  console.log("Request Headers:", req.headers);
  return res.json({
    message: "Check your console for the request headers.",
    headers: JSON.stringify(req.headers),
  });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
