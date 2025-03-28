const express = require("express");
const { testFunction, testFunction2 } = require("../controller/testController");

const router = express.Router();

router.get(`/test`, testFunction);
router.get(`/info`, testFunction2), (module.exports = router);
