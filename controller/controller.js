const monmodel = require("../app");
const getAllStaff = (req, callback) => {
  const data = [
    { id: "1", name: "shailesh", age: 33 },
    { id: "2", name: "nabhesh", age: 21 },
  ];
  callback(data);
};
const injson = async (req, res) => {
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
};
// module.exports = { getAllStaff };
module.exports = { injson };
