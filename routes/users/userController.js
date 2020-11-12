var bcrypt = require('bcryptjs');
var User = require('./User');


module.exports = {

    createUser: async (req, res) => {

        res.send(req.body);

        return;


        try {
            let createdUser = new User({
                email: req.body.email,
                password: req.body.password
            });

            let genSalt = await bcrypt.genSalt(12);
            let hashedPassword = await bcrypt.hash(createUser.password, genSalt);

            createdUser.password = hashedPassword;

            await createdUser.save();

            res.json({
                message: "User Created"
            });
        } 
        catch(e) {
            res.status(500).json({
                message: "Something went wrong"
            });
        }
    },
};