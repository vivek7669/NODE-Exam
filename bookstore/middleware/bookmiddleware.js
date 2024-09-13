const bookmiddle = (req, res, next) => {
  console.log(req.body);

  const { name, password, imgpath } = req.body;
  console.log(name, password, imgpath);

  if (!name || !password || !imgpath) {
    res.send({ Status_Code: 401, message: "Data is Required." });
  } else {
    next();
  }
};

module.exports = bookmiddle;
