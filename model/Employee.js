const mongoose = require("mongoose");
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

const StaffModel = mongoose.model("Employee", sch);
module.exports = { StaffModel };
