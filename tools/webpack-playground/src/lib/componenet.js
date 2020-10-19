class Componenet {
  constructor({ host, template }) {
    console.log(host, template);
    this.host = document.createElement(`${host}`);
    this.template = template;
  }

  bind() {
    this.host.innerHTML = this.template;
  }

  render() {
    return this.host;
  }
}
export default Componenet;
