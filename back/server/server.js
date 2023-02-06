const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json());

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true}
);

const MyUser = mongoose.model("MyUser", UserSchema);


app.get("/",(req, res) => {
    res.send("hi")
})

//GetAllUsers

app.get("/users", (req, res) => {
  MyUser.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//PostUser
app.post("/users", (req, res) => {
  let user = new MyUser({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    country: req.body.country,
  });
  user.save();
  res.send({ message: "Success" });
});


//GetUserById
app.get("/users/:id", (res, req) => {
  const { id } = req.params;
  MyUser.findById(id, (err, doc) => {
    if (!err) {
      req.send(doc);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//Delete
app.delete("/users/:id", (res, req) => {
  const { id } = req.params;
  MyUser.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      req.send("Deleted");
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//Update
app.put("/users/:id", (res, req) => {
  const { id } = req.params;
  MyUser.findByIdAndUpdate(id, (err, doc) => {
    if (!err) {
      req.send(200);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);


mongoose.set("strictQuery", true);

mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB Connect");
    app.listen(PORT, () => {
      console.log("Start server");
    });
  }
});