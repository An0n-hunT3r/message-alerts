import { FACEBOOK_VERIFY_TOKEN } from "../../../config/index.js";

const getWebhook = (req, res) => {
  if (req.query["hub.verify_token"] === FACEBOOK_VERIFY_TOKEN) {
    console.log("Verify token verified successfully");
    return res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Invalid verify_token in query param");
    return res.status(400).send("Invalid verify token");
  }
};

export default getWebhook;
