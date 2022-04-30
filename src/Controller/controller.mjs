export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  init() {
    this.render();
    this.getAPI();
  }

  render() {
    this.clickLeftValue = "RUB";
    this.clickRightValue = "USD";
    this.view.label.value = 1;

    this.view.getAllFirstInputs.forEach((el) => {
      el.addEventListener("click", (event) => {
        this.clickLeftValue = event.target.value;
        this.getAPI();
      });
    });

    this.view.getAllSecondInputs.forEach((el) => {
      el.addEventListener("click", (event) => {
        this.clickRightValue = event.target.value;
        this.getAPI();
      });
    });
  }

  getAPI() {
    fetch(
      `https://api.exchangerate.host/convert?from=${this.clickLeftValue}&to=${this.clickRightValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.data = data.result;
        this.view.firstResult.innerHTML = `1 ${this.clickLeftValue} = ${this.data} ${this.clickRightValue} `;

        this.view.secondLabel.value = this.data * this.view.label.value;

        this.view.label.addEventListener("keyup", (event) => {
          this.view.label.value = this.view.label.value;
          this.view.secondLabel.value = this.data * this.view.label.value;
        });

        this.view.secondLabel.addEventListener("keyup", (event) => {
          this.view.secondLabel.value = this.view.secondLabel.value;
          this.view.label.value = this.view.secondLabel.value * this.secondData;
        });
      });

    fetch(
      `https://api.exchangerate.host/convert?from=${this.clickRightValue}&to=${this.clickLeftValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.secondData = data.result;
        this.view.secondResult.innerHTML = `1 ${this.clickRightValue} = ${data.result} ${this.clickLeftValue}`;
      });
      
  }
}
