import Helper from './Helper.js';

class UI {
  constructor() {
    this.imgEl = document.querySelector('img');
    this.titleEl = document.querySelector('.user-title');
    this.valueEl = document.querySelector('.user-value');
    this.iconEl = document.querySelectorAll('.icon');
    this.btnEl = document.querySelector('.btn');

    this.user = {};
    this.fetchData();
    this.eventHandler();
  }

  async fetchData() {
    const data = await Helper.fetchUser();
    this.display(data.results[0]);
  }

  changeValue(e) {
    const dataLabel = e.target.getAttribute('data-label');
    this.imgEl.src = this.user.image;
    this.valueEl.textContent = this.user[dataLabel];
    this.titleEl.textContent = `My ${dataLabel} is`;
  }

  eventHandler() {
    this.iconEl.forEach((icon) =>
      icon.addEventListener('mouseenter', this.changeValue.bind(this))
    );

    this.btnEl.addEventListener('click', this.fetchData.bind(this));
  }

  display(data) {
    const {
      picture: { thumbnail },
      email,
      name: { first, last },
      dob: { age },
      location: {
        street: { name, number }
      },
      phone,
      login: { password }
    } = data;

    this.user = {
      image: thumbnail,
      email,
      name: `${first} ${last}`,
      age,
      location: `${name} ${number}`,
      phone,
      password
    };

    this.imgEl.src = this.user.image;
    this.valueEl.textContent = this.user.name;
  }
}
export default UI;
