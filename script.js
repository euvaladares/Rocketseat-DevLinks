function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  //pegar tag img e substituir a imagem
  // se tiver light mode, adicionar imagem light
  // se tiver sem lightmode, manter a imagem normal

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
