const express = require("express");
const router = express.Router();

router.post("/details", async (req, res) => {
  console.log("hello");
  const data = res.body;
  console.log(data);
  try {
    res.json({ message: "hello" });
  } catch (e) {
    res.json({
      message: "something went wrong",
    });
  }
});
export default router;
