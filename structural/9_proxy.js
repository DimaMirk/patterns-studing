function networkFetch(url) {
  return 'Response from server';
}

let cache = new Set();

let proxy = new Proxy(networkFetch, {
  apply(target, thisArg, arrgs) {
    let url = arrgs[0];
    if (cache.has(url)) {
      return 'Responce from cache';
    } else {
      cache.add(url);
      return Reflect.apply(...arguments);
    }
  },
});

console.log(proxy('http//:23.43.23.12:08080'));
console.log(proxy('http//:23.43.23.12:08080'));
console.log(proxy('http//:23.43.23.12:08090'));

//Проксі це паттерн, який допомагає нам перехоплювати різні дії. (Запис,отримання, видалення) данних з об*єкту. Виклик функції.
