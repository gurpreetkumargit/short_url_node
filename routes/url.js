const express = require("express");
const { generateNewShortUrl, getShortedId, getAnalytics } = require("../controller/url");
const router = express.Router();

router.post("/", generateNewShortUrl);
router.get("/:shortId", getShortedId)
router.get("/analytics/:shortId", getAnalytics)

module.exports = router;
