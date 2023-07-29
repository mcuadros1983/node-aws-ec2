const checkSession = (req, res, next) => {
  const headerAuth = req.headers.authorization || "";

  //TODO Bearer 1111
  const token = headerAuth.split(" ").pop(); //1111
  if (!token) {
    res.status(404);
    res.send({ error: "no tienes token" });
  } else {
    next();
  }
};

module.exports = { checkSession };
