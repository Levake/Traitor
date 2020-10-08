function _classCallCheck(instance, Constructor) 
{ 
		if (!(instance instanceof Constructor))
		{ 
				throw new TypeError("Cannot call a class as a function");
		} 
}
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
var TextScramble = function () {
  function TextScramble(el) {
    _classCallCheck(this, TextScramble);

    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_0987654321';
    this.update = this.update.bind(this);
  }

  TextScramble.prototype.setText = function setText(newText) {
    var _this = this;

    var oldText = this.el.innerText;
    var length = Math.max(oldText.length, newText.length);
    var promise = new Promise(function (resolve) {
      return _this.resolve = resolve;
    });
    this.queue = [];
    for (var i = 0; i < length; i++) {
      var from = oldText[i] || '';
      var to = newText[i] || '';
      var start = Math.floor(Math.random() * 40);
      var end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from: from, to: to, start: start, end: end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  };

  TextScramble.prototype.update = function update() {
    var output = '';
    var complete = 0;
    for (var i = 0, n = this.queue.length; i < n; i++) {
      var _queue$i = this.queue[i];
      var from = _queue$i.from;
      var to = _queue$i.to;
      var start = _queue$i.start;
      var end = _queue$i.end;
      var char = _queue$i.char;

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += '<span class="dud">' + char + '</span>';
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  TextScramble.prototype.randomChar = function randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  };

  return TextScramble;
}();
// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

var phrases = ['by CrOfG@mes'
,' by CrOfGames'
,'ERROR'];

var phrases2 = [
'Tr@itor'
,'Traitor'
,'ERROR'];

var el = document.querySelector('.text2');
var fx = new TextScramble(el);

var el2 = document.querySelector('.colors');
var fx2 = new TextScramble(el2);

var counter = 0;
var next = function next() {
  if(!(counter == phrases.length - 1))
		{
       fx2.setText(phrases2[counter]);
				fx.setText(phrases[counter]).then(function () {
    setTimeout(next, 300);
				
										counter = (counter + 1) % phrases.length;

if(counter == phrases.length - 1)
{
AnimationExitStart();
}
});
   }
};
var AnimationExitStart = function AnimationExitStart()
{
  document.getElementById("otstyp").style = 'animation-play-state: running;';
  document.getElementById("textcompanny").style = 'animation-play-state: running;';
  let button = document.getElementById("menu");
    button.style.display = 'block';
  setTimeout(function () {
    document.getElementById("textcompanny").style.display = 'none';
    document.getElementById("textcompanny2").style = 'animation-play-state: running;';

    var helloText = document.querySelector('.hello');
    var fxhelloText = new TextScramble(helloText);
    fxhelloText.setText("Добро пожаловать в Traitor.");

    //test();

  }, 2000);
}

/*
var test = function test()
{
  if ( document.getElementById("menu").classList.contains('menu_in') )
  {
      document.getElementById("menu").className = "menu_out";
  }
  else
  {
    document.getElementById("menu").className = "menu_in";
  }


  setTimeout(test, 3000);
}
*/

var InfomationGame = function InfomationGame()
{
  document.getElementById("menu").className = "menu_out";
  setTimeout(function ()
    {
      document.getElementById("informationgame").style.display = 'block';
      document.getElementById("menu").style.display = 'none';
        document.getElementById("menu").className = "menu_in";
    }, 2000);
}

var Back = function Back()
{
  document.getElementById("informationgame").className = "informationgame_out";
  setTimeout(function ()
    {
      document.getElementById("menu").style.display = 'block';
      document.getElementById("informationgame").style.display = 'none';
        document.getElementById("informationgame").className = "menu_in";
    }, 2000);
}

var playmusic = function playmusic(val)
{
		if(val == 1)
		{
		let button4 = document.getElementById("button2");
    button4.style.display = 'none';

  	let button2 = document.getElementById("div2");
    button2.style.display = 'flex';
				next();
		}
}
