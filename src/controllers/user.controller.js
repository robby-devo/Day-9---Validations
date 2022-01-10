const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../models/user.model");

router.post(
  "/",
  body("id").isLength({ min: 1 }).withMessage("id is required"),
  body("first_name").isLength({ min: 3 }).withMessage("first name is required"),
  body("last_name").isLength({ min: 3 }).withMessage("last name is required"),
  body("email").isEmail().withMessage("valid email is required"),
  body("pincode")
    .isLength({ min: 6 })
    .withMessage("pincode is required atleast 6 numbers"),
  body("gender")
    .isLength({ min: 4 })
    .withMessage("gender is required min 4 characters"),
  body("age").isLength({ min: 1 }).withMessage("age is required min 1"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ data: errors.array() });
    }
    const user = await User.create(req.body);

    return res.status(201).json({ data: user });
  }
);
module.exports = router;
