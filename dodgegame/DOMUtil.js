export default class DOMUtil 
{
  constructor()
  {
    this.popup = document.querySelector("#popup");
    this.recordText = this.popup.querySelector(".record");
  }

  openPopup(record){
    this.recordText.innerHTML = record;
    this.popup.classList.add("active");
  }

  closePopup()
  {
    this.popup.classList.remove("active");
  }
}