const express = require("express");
const http = require("http");
const StaffController = require("./controller/controller");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb://localhost:27017/mycrud",
  {
    // useNewUrlParse: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connect to DB successfull");
    } else {
      console.log("Failed");
    }
  },
);
const sch = {
  id: Number,
  name: String,
  designation: String,
  salary: Number,
  joined_date: Date,
};

const monmodel = mongoose.model("Employee", sch);

// app.get("/staff/id", (req, res) => {
//   res.send("Staff by ids");
// });
app.post("/staff", StaffController.injson);
app.put("/update/:id", async (req, res) => {
  let upid = req.params.id;
  let upname = req.body.name;
  let updes = req.body.designation;
  let upsal = req.body.salary;
  let upjd = req.body.joined_date;
  monmodel.findOneAndUpdate(
    { id: upid },
    {
      $set: {
        name: upname,
        designation: updes,
        salary: upsal,
        joined_date: upjd,
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.send("ERROR");
      } else {
        if (data == null) {
          res.send("Not found id");
        } else {
          res.send(data);
        }
      }
    },
  );
});
// app.delete("/delete", (req, res) => {
//   res.send("delete staff by id");
// });
app.get("/staff/:id", function (req, res) {
  fetchid = req.params.id;
  monmodel.find({ id: fetchid }, function (err, val) {
    res.send(val);
  });
});

app.delete("/delete/:id", function (req, res) {
  let delid = req.params.id;
  monmodel.findOneAndDelete({ id: delid }, function (err, val) {
    if (val == null) {
      res.send("Not found");
    } else {
      res.send(val);
    }
  });
});
port = "80";
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// module.exports = {  };
