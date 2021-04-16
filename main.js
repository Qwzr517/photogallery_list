
const photo = document.getElementById('1');
 document.querySelector('#ph_gal').addEventListener('click', function(e) {
  let id = e.target.id; // Получили ID пикчи
  console.log(id)
})
//ОТКРЫТИЕ В ПОЛНОМ РАЗМЕРЕ В НОВОМ ОКНЕ
/*let imgs = document.querySelectorAll("img");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function(e) {
    let src = e.currentTarget.src;
    window.open("about:black", "image").document.write("<img src='" + src + "' alt='something' />");
  });
}*/

//RANDOM backgroundColor
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E","F"];
const btn = document.getElementById("btn1");
//const color = document.querySelector(".color");
//#f15025

btn.addEventListener('click', function() {
  let hexColor = '#';
  //let hexColor1 = '#';
  for(let i = 0; i<6; i++){
    hexColor += hex[getRndmNum()]
    //hexColor1 += hex[getRndmNum()]
  }
//  document.querySelector('#ph_gal').style.backgroundColor = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRndmNum(){
  return Math.floor(Math.random() * hex.length);
}


//ПОИСК ПО ТЕКСТУ
/*var input,search,pr,result,result_arr, locale_HTML, result_store;

locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

function FindOnPage(name, status) {
  input = document.getElementById(name).value; //получаем значение из поля в html
  if(input.length<3&&status==true) {
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
	}

  if(input.length>=3)
	{
    function FindOnPageGo() {
     search = '/'+input+'/g';  //делаем из строки регуярное выражение
     pr = document.body.innerHTML;   // сохраняем в переменную весь body
     result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
     result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)
     for(var i=0; i<result.length;i++) {
		        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
		     for(var i=0; i<result.length;i++) {
			pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
		     document.body.innerHTML = pr;  //заменяем html код
          }
  }

  function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
  if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
	if(!status) { FindOnPageBack(); } //Снимаем выделение
} */
