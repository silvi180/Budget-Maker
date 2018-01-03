class Event{
  static addFormListener(){
    // let form = document.getElementById(id)
    document.addEventListener("submit", (event) => {
      event.preventDefault()
      let form = event.target
      handleSubmit(form)
    }
  )}


}
