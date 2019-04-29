import { of } from 'rxjs/';

class Store {
  store = {};

  has(url) {
    return!!this.store[url];
  }
  set(data, url) {
    this.store[url] = JSON.stringify(data);
    // localStorage.setItem(url, JSON.stringify(data));
    console.log(this.store);
    return data;
  }

  get(url) {
    return of(JSON.parse(this.store[url]));
  }
}

export default new Store();
