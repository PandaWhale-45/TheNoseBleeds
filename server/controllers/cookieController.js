const db = require('../models/userModel');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
// app.use(cookieParser());

const cookieController = {};

// Setting a cookie on the user's browser
cookieController.setCookie = (req, res, next) => {
  try {
    const uniqueNum = Math.round(Math.random() * 100);
    res.cookie('session', uniqueNum);
    return next();
  } catch (err) {
    return next({
      log: `error with cookieController.createCookie ERROR: ${err}`,
      message: { err: 'error setting cookies' },
    });
  }
};

// Setting the session id to the aforementioned cookie's value
<<<<<<< HEAD
cookieController.setSSIDCookie = (req, res, next) => {
=======
cookieController.setSSIDCookie = async (req, res, next) => {
>>>>>>> dev
  try {
    return next();
  } catch (err) {
    return next({
      log: `error with cookieController.setSSIDCookie ERROR: ${err}`,
      message: { err: 'error setting SSID cookie' },
    });
  }
};

module.exports = cookieController;
