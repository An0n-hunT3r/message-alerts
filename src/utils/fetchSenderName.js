import axios from "axios";

import { FACEBOOK_GRAPH_URL, FACEBOOK_ACCESS_TOKEN } from "../config/index.js";

const fetchSenderName = async (senderId) => {
  try {
    const response = await axios.get(`${FACEBOOK_GRAPH_URL}/${senderId}`, {
      params: {
        fields: "name",
        access_token: FACEBOOK_ACCESS_TOKEN,
      },
    });

    return response.data.name;
  } catch (error) {
    console.error(
      "Error occurred while fetching sender name from Facebook API:",
      error
    );
    return Promise.reject(error);
  }
};

export default fetchSenderName;
