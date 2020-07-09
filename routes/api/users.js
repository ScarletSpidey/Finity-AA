const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route    POST api/users
//@desc     Register User
//@access   Public
router.post(
  '/',
  [
    check('firstname', 'First Name is required').not().isEmpty(),
    check('lastname', 'Last Name is required').not().isEmpty(),
    check('email', 'PLease include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('addressline1', 'Please Enter ').not().isEmpty(),
    check('addressline2', 'Please Enter ').not().isEmpty(),
    check('city', 'Please Enter your city/town/village').not().isEmpty(),
    check('state', 'Please Enter your state').not().isEmpty(),
    check('postalcode', 'Please enter your postal code').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstname,
      lastname,
      email,
      password,
      addressline1,
      addressline2,
      city,
      state,
      postalcode,
    } = req.body;

    try {
      let user = await User.findOne({ email });
      //See if user exists

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already Exists' }] });
      }

      user = new User({
        firstname,
        lastname,
        email,
        password,
        addressline1,
        addressline2,
        city,
        state,
        postalcode,
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
