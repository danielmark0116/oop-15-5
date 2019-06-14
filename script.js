'use strics';

function Button(text) {
  this.text = text || 'Hello form button';
}

Button.prototype = {
  create: function() {
    this.element = document.createElement('button');
    this.element.className = 'ui positive basic button';
    this.element.innerText = this.text;
    let self = this;
    this.element.addEventListener('click', function() {
      alert(self.text);
    });
    document.querySelector('#export').appendChild(this.element);
  }
};

let btn1 = new Button('Hello World!');
let btn2 = new Button('Hello from button NO 2!');
let btn3 = new Button();

btn1.create();
btn2.create();
btn3.create();
