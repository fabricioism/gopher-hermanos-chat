const greetingMessages = [
  {
    value: "¡Hola! Bienvenido a Los Gophers Hermanos. ¿Cómo te puedo ayudar?.",
  },
  {
    value: "¡Hola! 😃 ¿Qué puedo hacer por ti?",
  },
  {
    value: "👋🏽 Hey! ¿Cómo te puedo ayudar?",
  },
];

const likedMessages = [
  {
    value: "Nos agrada saber que prefieres nuestros productos  😊 ",
  },
  {
    value: " 🤭 Nos hace felices saberlo, ¡Gracias!",
  },
  {
    value: "¡Gracias a ti! Agradecemos tu preferencia 😁",
  },
  {
    value: "🤗 ¡De nada! Nuestro objetivo es que disfrutes nuestros productos",
  },
  {
    value: "¡Gracias! Esperamos tenerte muy pronto 😃",
  },
];

const dislikedMessages = [
  {
    value: "¡Disculpa! 😔 Te atenderemos mejor la próxima vez.",
  },
  {
    value:
      "Lamento saberlo 😕, la próxima ocasión nos esforzaremos más para que estés a gusto.",
  },
  {
    value:
      "☹️ Lamento eso, pero mejoraremos para que te sientas a gusto la próxima ocasión que nos visites",
  },
];

const orderPizzaMessages = [
  { value: "Pronto te llamará nuestro colaborador, disfruta tu pizza 😋" },
  {
    value:
      "¡Gracias por ordenar nuestra pizza!  😋 , Esperamos la disfrutes. Pronto te llamaremos",
  },
  {
    value:
      "🍕 La pizza está en camino, nuestro colaborador te llamará pronto! 😃",
  },
  { value: "¡Tu orden está en camino! 😋 Disfruta tu pizza 🍕" },
  {
    value:
      "Gracias por ordenar la mejor pizza del mundo 🍕, tu orden está en camino!",
  },
];

const orderHamburguerMessages = [
  {
    value:
      "Pronto te llamará nuestro colaborador, disfruta tu hamburguesa 🍔😋",
  },
  {
    value: "¡Gracias por ordenar nuestra hamburguesa! 🍔 Pronto te llamaremos",
  },
  {
    value:
      "🍔 Tu hamburguesa está en camino, nuestro colaborador te llamará pronto con tu orden! 😃",
  },
  { value: "¡Tu orden está en camino! 😋 Disfruta tu hamburguesa 🍔" },
  {
    value:
      "¡Gracias por ordenar la mejor hamburguesa del mundo mundial! 🍔, ¡Tu orden está en camino!",
  },
];

const orderSaladMessages = [
  {
    value:
      "Pronto te llamará alguien de nuestro equipo, disfruta tu ensalada 🥙😋",
  },
  {
    value:
      "¡Gracias por ordenar nuestra ensalada!  🥗, Esperamos la disfrutes.",
  },
  {
    value:
      "🥗 Tu ensalada está en camino, nuestro colaborador te llamará pronto! 😃",
  },
  { value: "¡Tu orden está en camino! 😋 Disfruta tu ensalada 🥙" },
  {
    value:
      "¡Gracias por ordenar nuestra ensalada! 🥙, ¡Tu orden está en camino! 🥗",
  },
];

const orderSodaMessages = [
  {
    value:
      "Pronto te llamará alguien de nuestro equipo, disfruta tu refresco 🥤",
  },
  {
    value:
      "¡Gracias por tu orden! 🥤, Esperamos disfrutes tu refresco. Pronto te llamaremos",
  },
  {
    value:
      "🥤 Tu refresco está en camino, nuestro colaborador te llamará pronto! 😃",
  },
  { value: "¡Tu orden está en camino! 😋 Disfruta tu refresco 🥤" },
  {
    value: "¡En unos minutos te llevamos tu refresco! 🥤, ¡Gracias! 😃",
  },
];

export const responseMessages = {
  "(greeting)": greetingMessages,
  "(liked)": likedMessages,
  "(disliked)": dislikedMessages,
  "(food,order,pizza)": orderPizzaMessages,
  "(food,order,hamburger)": orderHamburguerMessages,
  "(food,order,salad)": orderSaladMessages,
  "(food,order,soda)": orderSodaMessages,
};
