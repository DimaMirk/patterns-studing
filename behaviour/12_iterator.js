function* generator(arr) {
  for (let index = 0; index < arr.length; index++) {
    yield arr[index];
  }
}

let gen = generator(['dima', 'diana', 'ivan']);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Головна ідея: послідовне отримання доступ до даних під час іtерування
