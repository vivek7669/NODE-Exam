const bookmiddle = (req, res, next) => {
  console.log(req.body);

  const { name, password } = req.body;
  console.log(name, password);

  if (!name || !password) {
    res.send({ Status_Code: 401, message: "Data is Required." });
  } else {
    next();
  }
};

module.exports = bookmiddle;
