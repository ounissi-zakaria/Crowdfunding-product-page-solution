function display() {
    document.getElementById("nav-container").classList.remove("hidden")
    document.getElementById("X-hamburger").classList.remove("hidden")

    document.getElementById("nav-container").classList.add("flex")
    document.getElementById("X-hamburger").classList.add("block")
    document.getElementById("hamburger").classList.add("hidden")
  }
  function hide() {
    document.getElementById("nav-container").classList.remove("flex")
    document.getElementById("X-hamburger").classList.remove("block")
    document.getElementById("hamburger").classList.remove("hidden")

    document.getElementById("nav-container").classList.add("hidden")
    document.getElementById("X-hamburger").classList.add("hidden")
  }
  
  document.getElementById("hamburger").addEventListener("click", display)
  document.getElementById("X-hamburger").addEventListener("click", hide)
  