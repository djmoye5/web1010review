var oper1 = 10 + 5;

var x = ("My name is Denerius." + "I am 29 years old." + "I like basketball." + "I am a veteran." + "I love seafood.")
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var string = `I can count to 5: "${a}", "${b}", "${c}", "${d}", "${e}"`

var array  = [1, 2, 3, 4, "hello", "goodbye", op1 == op2, op2 <= op1, op3 >= op2, [3,"hi", c]]
var test = {
    number: 5,
    string: "hello",
    array: ["Student", 5, op1]
  }

var h2 = document.querySelector("h2");
var para = document.querySelector(".para");
var div = document.querySelector("#box");
var input = document.querySelector('.input[type="text"]');
var button = document.querySelector("button");

function loopIT(num){
  for(var i=1; i<num; i++){
    doSstuff(input,
      "https://s3media.247sports.com/Uploads/Assets/997/512/8512997.jp")
  }
}

function doStuff(input, src){
  var text = input.value;
  div.innerHTML = `<img src="${src}" alt="RJ Barrett">`;
  para.textContent = text;
}

button.addEventListener("click", function(){
  doSstuff(input,
    "https://s3media.247sports.com/Uploads/Assets/997/512/8512997.jp")
})

