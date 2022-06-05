import express from "express";
const app = express();
const PORT = process.env.port || 3000;

// import routes from route files
import customerRouter from "./routes/customers.js"

//unpack json
app.use(express.json());

app.use("/customers", customerRouter);

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
