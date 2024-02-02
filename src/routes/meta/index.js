import { Router } from "express";

import getWebhook from "./handlers/getWebhook.js";
import postWebhook from "./handlers/postWebhook.js";

const metaRouter = Router();

/**
 * Route to verify webhook integration
 */
metaRouter.get("/webhook", getWebhook);

/**
 * Route to handle post webhook events
 */
metaRouter.post("/webhook", postWebhook);

export default metaRouter;
