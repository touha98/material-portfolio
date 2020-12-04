export default {
  state: () => ({
    firstname: "Touha",
    lastname: "Zohair",
    email: "contact@touha.org",
    designation: "full-stack web developer",
    aboutme: `I love to build awesome user experience. I build- dynamic, highly interactive, scalable and super fast web applications for you. I aim to keep things simple as - "Simplicity is the ultimate sophestication"`,
    social: [
      {
        name: "twitter",
        icon: "mdi-twitter",
        link: "https://twitter.com/touha98",
      },
      {
        name: "github",
        icon: "mdi-github",
        link: "https://github.com/touha98",
      },
      {
        name: "linkedin",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/touhazr",
      },
      {
        name: "skype",
        icon: "mdi-skype",
        link: "https://join.skype.com/invite/Y6Rl0TeuPLPu",
      },
    ],
  }),
  getters: {
    firstname: ({ firstname }) => firstname,
    lastname: ({ lastname }) => lastname,
    email: ({ email }) => email,
    designation: ({ designation }) => designation,
    aboutme: ({ aboutme }) => aboutme,
    social: ({ social }) => social,
  },
}
