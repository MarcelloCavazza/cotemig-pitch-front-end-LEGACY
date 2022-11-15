const blacks = {
  absoluteDark: "#000000",
  backgroundDark: "#1a1c1d",
  disabledInput: "#555555",
  footerDark: "#101112",
  footerButton: "#090A0A",
  contactForm: '#202324',
};

const whites = {
  webLinks: "#FCFCFC",
  absoluteLight: "#FFFFFF",
  backgroundLight: "#EDEDED",
};

const reds = {
  invalidRed: "#EB2926",
};

const oranges = {};

const yellows = {
  yellow: "#F5E513", // Inútil por enquanto
};

const greens = {};

const blues = {
  webLinksBlue: "#007AF5",
};

const purples = {};

const logoColors = {
  logoGreenOne: "#03989E",
  logoGreenTwo: "#04CFD6",
};

const chatRoom = {
  chatroomBackground: "#202224",
  chatroomMainColor: "#253742",
  chatroomTextOnRead: "#A3A3A3",
  chatroomBorder: "#3D3D3D",
  chatroomSeparationBorder: "#354E5E",
};

const colors = {
  ...whites,
  ...blacks,
  ...reds,
  ...oranges,
  ...yellows,
  ...greens,
  ...blues,
  ...purples,
  ...logoColors,
  ...chatRoom,
};

export default colors;
