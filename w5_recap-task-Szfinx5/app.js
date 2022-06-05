import express from "express";
import logger from "morgan";
import catsRouter from "./routes/cats.js";

const PORT = process.env.PORT || "3000";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.render("index", { title: "Cats" });
});

app.use("/api/cats", catsRouter);

const cats = [
  {
    id: 1,
    name: "Tony",
    human: "Liz.K",
    hobby: "cling",
  },
  {
    id: 2,
    name: "Poppy",
    human: "Tim",
    hobby: "screm",
  },
  {
    id: 3,
    name: "Narla",
    human: "Mell",
    hobby: "obstruct",
  },
];

/* Your tasks for part 1: 🔻 
- 👉 Add request handlers/routes for your API that will handle requests to the path "/api/cats" for all the 
cats, providing the data in the cats array in this file. Test this in your browser.
- 👉 Add code to also handle requests for a cat by id using params, and cats by name using a query. 
Test this in your browser.
- 👉 Test the form on the front-end here: http://localhost:3000
*/

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
