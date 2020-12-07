console.log('oi galerinha')

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
}); 

Promise.all([p1, p2, p3]).then(valores=> { 
  console.log(valores); // [3, 1337, "foo"] 
});

var p = Promise.all([1,2,3]);
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

setTimeout(function() {
    console.log(p);
    console.log(p2);
    console.log(p3);
});

