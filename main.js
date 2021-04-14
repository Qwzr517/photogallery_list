
const photo = document.getElementById('1');
 document.querySelector('#ph_gal').addEventListener('click', function(e) {
  let id = e.target.id; // Получили ID пикчи
  console.log(id)
})
//ОТКРЫТИЕ В ПОЛНОМ РАЗМЕРЕ В НОВОМ ОКНЕ
let imgs = document.querySelectorAll("img");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function(e) {
    let src = e.currentTarget.src;
    window.open("about:black", "image").document.write("<img src='" + src + "' alt='something' />");
  });
}

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
  //document.querySelector('#ph_gal').style.backgroundColor = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRndmNum(){
  return Math.floor(Math.random() * hex.length);
}
