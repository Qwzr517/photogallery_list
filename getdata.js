
 var xhr = new XMLHttpRequest();
 xhr.open('GET', 'https://www.cbr-xml-daily.ru/daily_utf8.xml', false);
 xhr.send();

 if (xhr.status != 200) {
   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
 }
    else {
 // вывести результат
 // alert( xhr.responseText ); // responseText -- текст ответа.
 var data_batch = xhr.responseText;
         };
////////////////////////////////////////////////////////////////////////////////
var valute_id = ["R01235", "R01239", "R01375", "R01335", "R01090B"];
        //      ["USD",    "EUR",    "CNY",    "KZT",    "BYN"];

var id_cells = [];
var curs = [];

var res = data_batch.split('</Valute>'); //разбиваем полученную строку на ячейки
//и находим нужные нам
for (let j = 0; j < valute_id.length; j++){
  for (let i = 0; i < res.length; i++){
    if( res[i].indexOf(valute_id[j]) != (-1) ){
      id_cells[j] = i;
    }
}
}
//заполняем массив нужными нам значениями курсов валют
for (let i = 0 ; i < id_cells.length; i++){
  get_curs(id_cells[i]);
}
function get_curs(cell_number) {
  var start_int = res[cell_number].indexOf("<Value>");
  var end_int  = res[cell_number].indexOf("</Value>");
  var otvet = res[cell_number].slice(start_int + 7, end_int);
  curs.push(otvet);
}
//вставляем значения на страницу
 var usd_cell = document.getElementById('USD');
   usd_cell.innerHTML = curs[0];

 var eur_cell = document.getElementById('EUR');
     eur_cell.innerHTML = curs[1];

 var cny_cell = document.getElementById('CNY');
    cny_cell.innerHTML = curs[2];

 var kzt_cell = document.getElementById('KZT');
     kzt_cell.innerHTML = curs[3];

  var byn_cell = document.getElementById('BYN');
      byn_cell.innerHTML = curs[4];

/////////////////////////////////////////////////////////////////////
 //Рисуем график
 let canvas = document.getElementById('canvas');
 let ctx = canvas.getContext('2d');   //указываем элем для 2д рисования
 ctx.fillStyle = "black"; // Задаём чёрный цвет для линий
ctx.lineWidth = 2.0; // Ширина линии
ctx.beginPath(); // Запускает путь
ctx.moveTo(30, 10); // Указываем начальный путь
ctx.lineTo(30, 460); // Перемещаем указатель
ctx.lineTo(500, 460); // Ещё раз перемещаем указатель
ctx.stroke(); // Делаем контур
// Цвет для рисования
ctx.fillStyle = "black";

// Массив с меткам месяцев
let labels = ["USD", "EUR", "CNY", "KZT", "BYN"];

// Выводим меток
for(var i=0; i<5; i++) {
    ctx.fillText(labels[i], 50+ i*100, 475);
}
// Объявляем массив данных графика
var data = curs;
for (let i = 0; i < data.length; i++){
  var re = /,/gi;
  data[i] = data[i].replace(re,'.');
  data[i] = Number(data[i]);
}


// Назначаем зелёный цвет для графика
ctx.fillStyle = "red";
// Цикл для отрисовки графиков
for(var i=0; i<data.length; i++) {
    var dp = data[i];
    ctx.fillRect(40 + i*100, 460-dp , 50, dp);
}
