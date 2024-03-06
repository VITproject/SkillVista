const authenticateToken = require('./authMiddleware');

const authenticateFacultyToken = (req, res, next) => {
  authenticateToken(req, res, (err) => {
    if (err) {
      return res.status(401).json({ message: err });
    } else {
      const user = req.user;
      if (user.empId) {
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized access' });
      }
    }
  });
};

module.exports = authenticateFacultyToken;