export default {
  state: () => ({
    firstname: "Touha",
    lastname: "Zohair",
    email: "contact@touha.org",
    designation: "full-stack web developer",
    aboutme: `I love to build awesome user experience. With the power of Vuejs, I build- dynamic, highly interactive, scalable and super fast web applications for you. I use Nodejs or python as backend technology both of which are reputed for performance and security. I write clean code so that anyone can understand what's going on. I aim to keep things simple during development because- "Simplicity is the ultimate sophistication."`,
  }),
  getters: {
    firstname: ({ firstname }) => firstname,
    lastname: ({ lastname }) => lastname,
    email: ({ email }) => email,
    designation: ({ designation }) => designation,
    aboutme: ({ aboutme }) => aboutme,
  },
}
