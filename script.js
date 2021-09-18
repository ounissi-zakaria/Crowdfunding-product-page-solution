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

  function show_success_modal(){
    document.body.scrollIntoView()
    hide_selection_modal()
    document.getElementById("success-modal").classList.remove("hidden")
    document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden")    
  }
  function hide_success_modal(){
    document.getElementById("success-modal").classList.add("hidden")
    document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden")
  }
  function hide_modals(e){
      if (e.keyCode == "27"){
          hide_menu()
          hide_selection_modal()
          hide_success_modal()
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
    document.querySelector(`#pledge-${i} button`).addEventListener("click", show_success_modal)
  }
  document.querySelector("#success-modal button").addEventListener("click", hide_success_modal)


  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function change_bookmark_state(){
      console.log("1");
    if (getCookie("bookmark")  === "true"){
        console.log("false");
        setCookie("bookmark", "false", 10)
        document.querySelector("#bookmark > span").innerText = "Bookmark"
        document.querySelector("#bookmark").classList.add("md:hover:opacity-80")
        document.querySelector("#bookmark").classList.remove("text-cyan", "md:hover:text-cyan-dark")
        document.querySelector("#bookmark path").classList.remove("text-white","fill-current")
    }else if (getCookie("bookmark") === "false") {
        console.log("true");
        setCookie("bookmark", "true", 10)
        document.querySelector("#bookmark > span").innerText = "Bookmarked"
        document.querySelector("#bookmark").classList.remove("md:hover:opacity-80")
        document.querySelector("#bookmark").classList.add("text-cyan", "md:hover:text-cyan-dark")
        document.querySelector("#bookmark path").classList.add("text-white","fill-current")
    }
  }

  if (getCookie("bookmark") === ""){
    setCookie("bookmark", "false", 10)
  }else if (getCookie("bookmark") === "true") {
    document.querySelector("#bookmark > span").innerText = "Bookmarked"
    document.querySelector("#bookmark").classList.remove("md:hover:opacity-80")
    document.querySelector("#bookmark").classList.add("text-cyan", "md:hover:text-cyan-dark")
    document.querySelector("#bookmark path").classList.add("text-white","fill-current")
  }

document.querySelector("#bookmark").addEventListener("click", change_bookmark_state)
