import { ref } from "vue";
import { responseMessages } from "./constants/messages/responseMessages";
import { profiles } from "./constants/data";

const { bot, client } = profiles;

export const useUser = () => {
  return { user: client };
};

export const useChat = () => {
  const messages = ref([]);

  const sendMessage = async (sentence) => {
    const sendMessagePromise = await fetch(
      "https://gopher.fabricioism.com/v1/predictions",
      {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ sentence }),
      }
    );

    const res = await sendMessagePromise.json();

    const bagOfMessages = responseMessages[res.prediction];

    const chosenMessageIndex =
      Math.floor(Math.random() * (bagOfMessages.length - 0)) + 0;

    messages.value = [
      ...messages.value,
      {
        id: Math.random()
          .toString(36)
          .substring(7),
        text: sentence,
        userPhotoURL: client.photoURL,
        userName: client.displayName,
        userId: client.uid,
      },
      {
        id: Math.random()
          .toString(36)
          .substring(7),
        text: bagOfMessages[chosenMessageIndex].value,
        userPhotoURL: bot.photoURL,
        userName: bot.displayName,
        userId: bot.uid,
      },
    ];
  };

  return { messages, sendMessage };
};
