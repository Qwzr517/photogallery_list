
 document.querySelector('.button').addEventListener('click', function(e) {

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

   var pos_dollar = data_batch.indexOf("Доллар США");
   var dollar_curs = data_batch.slice(pos_dollar + 24, pos_dollar + 32);
   var usd_cell = document.getElementById('USD');
     usd_cell.innerHTML = dollar_curs;

   var pos_eur = data_batch.indexOf("Евро");
   var eur_curs = data_batch.slice(pos_eur + 18, pos_eur + 26);
   var eur_cell = document.getElementById('EUR');
       eur_cell.innerHTML = eur_curs;
    console.log("euro = " + eur_curs + " " + "rub");

   var pos_cny = data_batch.indexOf("Китайский юань");
   var cny_curs = data_batch.slice(pos_cny + 28, pos_cny + 35);
   var cny_cell = document.getElementById('CNY');
      cny_cell.innerHTML = cny_curs;
   console.log("cny = " + cny_curs + " " + "rub");

   var pos_kzt = data_batch.indexOf("Казахстанских тенге");
   var kzt_curs = data_batch.slice(pos_kzt + 33, pos_kzt + 40);
   var kzt_cell = document.getElementById('KZT');
       kzt_cell.innerHTML = kzt_curs;
    console.log("kzt = " + kzt_curs + " " + "rub");

    var pos_byn = data_batch.indexOf("Белорусский рубль");
    var byn_curs = data_batch.slice(pos_byn + 31, pos_byn + 38);
    var byn_cell = document.getElementById('BYN');
        byn_cell.innerHTML = byn_curs;
     console.log("byn = " + byn_curs + " " + "rub");
  /////////////////////////////////////////////////////////////////////
   //Рисуем график
   let canvas = document.getElementById('canvas');
   let ctx = canvas.getContext('2d');   //указываем элем для 2д рисования
   ctx.fillStyle = "black"; // Задаём чёрный цвет для линий
  ctx.lineWidth = 2.0; // Ширина линии
  ctx.beginPath(); // Запускает путь
  ctx.moveTo(30, 10); // Указываем начальный путь
  ctx.lineTo(30, 460); // Перемешаем указатель
  ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
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
  let data = [ dollar_curs, eur_curs, cny_curs, kzt_curs, byn_curs ];
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


 });
