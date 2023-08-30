const express = require("express");
const router = express.Router();
const controller = require("./Controller");

router.get("/status", controller.getStatusQueue);
router.put("/status", controller.setStatusQueue);

module.exports = router;
