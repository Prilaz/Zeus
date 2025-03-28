const jwt = require("jsonwebtoken");

exports.isLoggedIn = async (req, res, next) => {
  try {
    let token = await req.headers["authorization"];
    if (!token) {
      return res.status(402).json({ error: "Login token not found" });
    }
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    if (user) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


exports.isAdmin = async (req, res, next) => {
    try {
      let token = await req.headers["authorization"];
      if (!token) {
        return res.status(402).json({ error: "Login token not found" });
      }
      const user = await jwt.verify(token, process.env.JWT_SECRET);
      if (!user) {
        return res.status(400).json({error:"Invalid token"})
      }
      if(user.role != 1){
        return res.status(400).json({error:"You must be admin to access this resources"})
      }
      next()
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  };
  