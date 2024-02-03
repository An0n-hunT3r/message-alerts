import sendNotificationToSlack from "../../utils/sendNotificationToSlack.js";

const processWebhookEvents = async (events) => {
  await Promisse.allSettled(
    events.map(async (eachEntry) => {
      const { messaging: messagingEvents } = eachEntry;

      await Promise.allSettled(
        messagingEvents.map(async ({ message, sender }) => {
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

            await sendNotificationToSlack(messageText);

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
        })
      );
    })
  );
};

export default processWebhookEvents;
