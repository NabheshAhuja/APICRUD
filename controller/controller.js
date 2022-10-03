const { StaffModel } = require("../model/Employee");

// const page = parseInt(req.query.page);
// const limit = parseInt(req.query.limit);
// const skipIndex = (page - 1) * limit;



const insertStaff = async (req, res) => {
  console.log("insidepostfunction");
  const data = new StaffModel({
    id: req.body.id,
    name: req.body.name,
    designation: req.body.designation,
    salary: req.body.salary,
    joined_date: req.body.joined_date,
  });
  const val = await data.save();
  res.json(val);
};

const updateById = async (req, res) => {
  let upid = req.params.id;
  let upname = req.body.name;
  let updes = req.body.designation;
  let upsal = req.body.salary;
  let upjd = req.body.joined_date;
  StaffModel.findOneAndUpdate(
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
};

const getById = function (req, res) {
  fetchid = req.params.id;
  StaffModel.find({ id: fetchid }, function (err, val) {
    res.send(val);
  });
};

const deleteById = function (req, res) {
  let delid = req.params.id;
  StaffModel.findOneAndDelete({ id: delid }, function (err, val) {
    if (val == null) {
      res.send("Not found");
    } else {
      res.send(val);
    }
  });
};

const getAll = function (req, res) {
  const page_size = parseInt(req.query.page_size);
  const page_number = parseInt(req.query.page_number);
  const SkipIndex = (page_number-1)*page_size;
  console.log(page_size,page_number, SkipIndex);
  StaffModel.find(  function (err, val) {
    res.send(val);
  }).limit(page_size).skip(SkipIndex);
};

module.exports = { insertStaff, updateById, getById, deleteById, getAll};

