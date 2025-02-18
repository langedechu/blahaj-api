const { Router } = require("express");
const router = Router();

const getRawImage = require("../controllers/getRawImage.js");
const getImage = require("../controllers/getImage.js");
const postImage = require("../controllers/postImage.js");

router.post("/post", postImage);
router.get("/get", getImage);
router.get("/raw", getRawImage);

module.exports = router;
