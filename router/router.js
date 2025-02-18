const { Router } = require("express");
const router = Router();

const getRawImages = require("../controllers/getRawImages.js");
const getImages = require("../controllers/getImage.js");
const postImages = require("../controllers/postImages.js");

router.post("/post", postImages);
router.get("/get", getImages);
router.get("/raw", getRawImages);

module.exports = router;
