const getAllStaff = (req, callback) => {
  const data = [
    { id: "1", name: "shailesh", age: 33 },
    { id: "2", name: "nabhesh", age: 21 },
  ];
  callback(data);
};

module.exports = { getAllStaff };
