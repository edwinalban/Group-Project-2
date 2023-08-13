const User =  require('../models/User');

class AuthController {
    static async login(req, res){
        try{
            const { email, password } = req.body;
            
            const user = await User.findOne({ where: {email} });
            if (!user) {
                return res.status(401).json({message: 'Incorrect Username or Password'});
            }

            const validPassword = await user.validatePassword(password);
            if (!validPassword){
                return res.status(401).json({ message: 'Incorrect Username or Password' });
            }
            res.status(200).json({message: 'Login Sucessful!'});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'An error has occured.'});

        }
    }
}
module.exports = AuthController;