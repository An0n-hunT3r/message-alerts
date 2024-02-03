import processWebhookEvents from "../../../controllers/meta/processWebhookEvents.js";

const postWebhook = async (req, res) => {
  try {
    if (!req.body || !req.body.entry) {
      return req.status(400).json({
        success: false,
        message: "Request body is an invalid value",
      });
    }

    const { entry } = req.body;

    await processWebhookEvents(entry);

    return res.sendStatus(200);
  } catch (error) {
    console.error("Error occurred while processing event", {
      error,
      eventBody: req.event.body,
    });
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default postWebhook;
