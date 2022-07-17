const { Router } = require("express");
const { go_to_chat, log_in } = require("../controller/users");

const router = Router()


router.post("/got_to_chat" , go_to_chat);
router.get("/login" , log_in);

module.exports  = router