const postWebhook = async (req, res) => {
  try {
    if (!req.body || !req.body.entry) {
      return req.status(400).json({
        success: false,
        message: "Request body is an invalid value",
      });
    }

    const { entry } = req.body;

    entry.forEach((eachEntry) => {
      const { messaging: messagingEvents } = eachEntry;

      messagingEvents.forEach(async ({ message, sender }) => {
        try {
          if (!(message && message.text)) {
            console.log("No message text found, skipping event", {
              error,
              event: { message, sender },
            });
            return;
          }

          const senderId = sender.id;
          const messageText = message.text;

          // Send the message to Slack
          // await axios.post(SLACK_SEND_MESSAGE, { message: messageText });

          console.log(
            "Message sent to Slack from Facebook user:",
            senderId,
            messageText
          );
        } catch (error) {
          console.error("Error occurred while processing event", {
            error,
            event: { message, sender },
          });
        }
      });
    });

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
