function show_menu() {
    document.body.scrollIntoView()
    document.getElementById("nav-container").classList.remove("hidden")
    document.getElementById("X-hamburger").classList.remove("hidden")

    document.getElementById("nav-container").classList.add("flex")
    document.getElementById("X-hamburger").classList.add("block")
    document.getElementById("hamburger").classList.add("hidden")
    document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden")
  }

  function hide_menu() {
    document.getElementById("nav-container").classList.remove("flex")
    document.getElementById("X-hamburger").classList.remove("block")
    document.getElementById("hamburger").classList.remove("hidden")
    document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden")

    document.getElementById("nav-container").classList.add("hidden")
    document.getElementById("X-hamburger").classList.add("hidden")
  }
  function show_selection_modal(){
      document.body.scrollIntoView()
      document.getElementById("selection-modal").classList.remove("hidden")
      document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden")
  }
  function hide_selection_modal(){
      document.getElementById("selection-modal").classList.add("hidden")
      document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden")
  }

  function hide_modals(e){
      if (e.keyCode == "27"){
          hide_menu()
          hide_selection_modal()
      }
  }
  function select_pledge(){
      show_selection_modal()
      let pledge = this.id.slice(7)
      let radio = document.getElementById(pledge).querySelector("input[type='radio']")
      let event = new Event("change")
      radio.checked = true
      radio.dispatchEvent(event)
  }
  function highlight_selected_pledge(){
      document.querySelectorAll("input[type='radio']").forEach((radio) => {
          let radio_container = radio.parentElement.parentElement
          radio_container.classList.remove("border-cyan")
          radio_container.classList.add("border-gray-300")

          let pledge_start = radio_container.querySelector(`#${radio_container.id}-start`)
          pledge_start.classList.remove("grid")
          pledge_start.classList.add("hidden")

      })
      if (this.checked) {
          let radio_container = this.parentElement.parentElement
          radio_container.classList.remove("border-gray-300")
          radio_container.classList.add("border-cyan")

          let pledge_start = radio_container.querySelector(`#${radio_container.id}-start`)
          pledge_start.classList.remove("hidden")
          pledge_start.classList.add("grid")

      }
  }
  document.body.addEventListener("keydown", hide_modals)
  
  document.getElementById("hamburger").addEventListener("click", show_menu)
  document.getElementById("X-hamburger").addEventListener("click", hide_menu)

  document.getElementById("back-project").addEventListener("click", show_selection_modal)
  document.getElementById("X-selection-modal").addEventListener("click", hide_selection_modal)

  for(let i = 1; i <= 3; i++){
      document.getElementById(`select-pledge-${i}`).addEventListener("click",select_pledge)
  }
  for(let i = 0; i <= 3; i++){
    document.querySelector(`#pledge-${i} input[type='radio']`).addEventListener("change",highlight_selected_pledge)
}