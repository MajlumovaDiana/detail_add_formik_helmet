const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const cardSchema = new Schema(
  {
    name: { type: String },
    job: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const Cards = mongoose.model("cards", cardSchema);

//GetAllCards
app.get("/cards", (req, res) => {
  Cards.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//POST
app.post("/cards", (req, res) => {
  let card = new Cards({
    name: req.body.name,
    job: req.body.job,
    description: req.body.description,
  });
  card.save();
  res.send(card)
});

//GETCardById
app.get("/cards/:id", (req, res) => {
  const { id } = req.params;
  Cards.findById(id, (err, doc) => {
    if (!err) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//DELETE
app.delete("/cards/:id", (req, res) => {
  const { id } = req.params;
  Cards.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.send("Deleted");
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  });
});

//Update
app.put("/cards/:id", (req, res) => {
    const { id } = req.params;
    Cards.findByIdAndUpdate(id, (err, doc) => {
      if (!err) {
        res.send(200);
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    });
  });



// app.get("/cards", (req, res) => {
//   res.send("Hello World!");
// });

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose.set('strictQuery', true);
mongoose.connect(url).then(() => console.log("Connected!"));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
