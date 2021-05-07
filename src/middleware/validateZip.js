const getZoos = require("../utils/getZoos");

function validateZip(req, res, next) {
  const zip = req.params.zip;

  if (
    zip.length === 5 &&
    !zip.includes(
      "A"
    )
  ) {
    next();
  } else {
    next(`Zip (${zip}) is invalid!`);
  }
}

module.exports = validateZip;
