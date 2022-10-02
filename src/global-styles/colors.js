const whites = {
  absoluteLight: '#FFFFFF',
  webLinks: '#FCFCFC',
  backgroundLight: '#EDEDED',
}

const blacks = {
  absoluteDark: '#000000',
  backgroundDark: '#242424',
  disabledInput: '#555555',
}

const logoColors = {
  lightLogoOne: '#00E390',
}

const greens = {

}

const blues = {
  webLinksBlue: '#007AF5',
}

const yellows = {
  yellow: '#F5E513',
}

const oranges = {

}

const reds = {
  invalidRed: '#EB2926',
}

const purples = {

}

const colors = { // Importação das cores para uso global
  ...whites, 
  ...blacks, 
  ...greens, 
  ...blues, 
  ...yellows, 
  ...reds,
  ...purples,
  ...logoColors,
  ...oranges,
}

export default colors;