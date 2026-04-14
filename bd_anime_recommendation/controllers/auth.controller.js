const User = require("../models/user.model");
const Otp = require("../models/otp.model");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const username_exist = await User.findOne({ username: username });
    if (!username_exist) {
      return res.status(400).json({ message: "username does not exist" });
    }
    const db_password = username_exist.password;
    //remember the order
    const is_correct = await bcrypt.compare(password, db_password);
    if (!is_correct) {
      return res.status(400).json({ message: "incorrect password" });
    }
    res.status(200).json({ message: `welcome ${username}` });
  } catch (error) {
    return res.status(500).json({ message: "error from server side" });
  }
};

const signup = async (req, res) => {
  try {
    const username = req.body.username;
    const username_exist = await User.findOne({ username: username });
    if (username_exist) {
      return res.status(400).json({ message: "username already exist" });
    }
    const email = req.body.email;
    const email_exist = await User.findOne({ email: email });
    if (email_exist) {
      return res.status(400).json({ message: "email already exist" });
    }
    const password = req.body.password;
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const hashed_password = await bcrypt.hash(password, 10);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    await Otp.deleteMany({ temp_email: email });

    await Otp.create({
      otp,
      temp_username: username,
      temp_email: email,
      temp_password: hashed_password,
    });

    await transporter.sendMail({
      from: `"Anime"<${process.env.EMAIL}>`,
      to: email,
      subject: "OTP for Signup",
      html: `
            <h2>OTP for logging in Anime_recommendation</h2>
            <h1>${otp}</h1>
            `,
    });
    return res.status(200).json({ message: "otp send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const confirm_signup=async (req,res)=>{
    try {
            const otp=req.body.otp;
    const otp_exist=await Otp.findOne({otp:otp})
    if(!otp_exist){
        return res.status(400).json({message:"invalid otp"})
    }
    await User.create({
        username:otp_exist.temp_username,
        email:otp_exist.temp_email,
        password:otp_exist.temp_password
    })
    await Otp.deleteMany({otp:otp})
    res.status(200).json({message:"user created successfully"})
    } catch (error) {
        res.status(500).json("error from server in confirming signup")
    }
    //creating jwt authentication
}

module.exports={login,signup,confirm_signup}