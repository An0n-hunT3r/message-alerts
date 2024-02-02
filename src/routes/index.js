import { Router } from "express";

import metaRouter from "./meta/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is meta-to-slack message notifier server!",
  });
});

/**
 * Handles meta app webhook requests
 */
router.use("/meta", metaRouter);

export default router;
