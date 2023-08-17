const withAuth = (req, res, next) => {
    if (!req.session.isLoggedIn) {
      console.log(req.session);
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;