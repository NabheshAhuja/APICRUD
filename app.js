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
// app.get("/", (req, res) => {
//   StaffController.getAllStaff(req, (data) => {
//     console.log(data);
//   });
// });
// app.get("/staffs", (req, res) => {
//   StaffController.getAllStaff(req, (data) => {
//     res.send(data);
//   });
// });
// app.get("/staff/id", (req, res) => {
//   res.send("Staff by ids");
// });
app.post("/staff", async (req, res) => {
  console.log("insidepostfunction");
  const data = new monmodel({
    id: req.body.id,
    name: req.body.name,
    designation: req.body.designation,
    salary: req.body.salary,
    joined_date: req.body.joined_date,
  });
  const val = await data.save();
  res.json(val);
});
// app.put("/", (req, res) => {
//   res.send("put");
// });
// app.delete("/delete", (req, res) => {
//   res.send("delete staff by id");
// });

port = "80";
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
