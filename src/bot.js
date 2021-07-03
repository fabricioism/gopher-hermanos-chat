import { ref } from "vue";
import { responseMessages } from "./constants/messages/responseMessages";

const uid = "4HWBr3Mom4cmpxFIcG9Eyk1JOiC3";
const displayName = "Fabricio Ismael Murillo";
const photoURL = "https://avatars.githubusercontent.com/u/19640183?v=4";

const botId = "wfdfsdfsdfd53453454";
const botDisplayName = "Los Gophers Hermanos";
const botPhotoURL =
  "https://strapi-bucket-premper.s3.us-east-2.amazonaws.com/LOS_GOPHERS_26d18c62bd.png";

export const useAuth = () => {
  const isLogin = true;

  const user = { uid, displayName, photoURL };

  return { user, isLogin };
};

export const useChat = () => {
  const messages = ref([]);
  const { isLogin } = useAuth();

  const sendMessage = async (sentence) => {
    if (!isLogin) return;

    const sendMessagePromise = await fetch(process.env.API_URL, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ sentence }),
    });

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
        userPhotoURL: photoURL,
        userName: displayName,
        userId: uid,
      },
      {
        id: Math.random()
          .toString(36)
          .substring(7),
        text: bagOfMessages[chosenMessageIndex].value,
        userPhotoURL: botPhotoURL,
        userName: botDisplayName,
        userId: botId,
      },
    ];
  };

  return { messages, sendMessage };
};
