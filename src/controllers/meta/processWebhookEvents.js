import sendNotificationToSlack from "../../utils/sendNotificationToSlack.js";
import fetchSenderName from "../../utils/fetchSenderName.js";

const processWebhookEvents = async (events) => {
  await Promise.allSettled(
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

            const senderName = await fetchSenderName(sender.id);

            await sendNotificationToSlack(
              `Received message: "${message.text}" from "${senderName}"`
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
