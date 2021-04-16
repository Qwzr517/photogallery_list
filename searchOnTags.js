
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let input;
let imgs = document.querySelectorAll("img");
var li = document.getElementById("li");
let ids = [];

btn2.addEventListener('click', function() {
  document.querySelector("li").style.display = "none";
  let input = document.querySelector('input').value;
  console.log(input);
  console.log(typeof(input));

//все id картинок запишем в массив
  for (let i = 0; i < imgs.length; i++) {
   ids[i] = imgs[i].id;
   console.log(ids);

   if (ids[i] == input) {
   document.getElementById(ids[i]).style.display = "block";
   document.getElementById(ids[i]).style.verticalAlign = "center" ;
   }
   else {
     document.getElementById(ids[i]).style.display = "none";
   }
  }
})

btn3.addEventListener('click', function(e) {
  document.querySelectorAll("li").style.display = "block";
})


//получаем значение ввода, значения фото, отбираем элементы из массива
//результат передаем в функцию обновления страницы
function filterPhotoId(input,ids){};


function refreshBodyOnInput(){};
