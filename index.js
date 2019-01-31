var app = new Vue ({
  el:'#app',
  data: {
    message: 'Hello Vue!'
  }
})
var app2 = new Vue ({
  el:'#app-2',
  data: {
    message: 'you loaded this page on ' + new Date().toLocaleString()
  }
})
var string = "Hello I'm Laith Haleem Form Ghammas Love Developing Websites";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
