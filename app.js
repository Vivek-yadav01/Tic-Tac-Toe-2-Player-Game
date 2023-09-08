let box = document.querySelectorAll(".box");
let rest = document.querySelector(".restart");
let winner = document.querySelector(".winner");
let chicken = document.querySelector(".chicken");
let restar = document.querySelector(".restart");

let strt = false;
let count1 = 0, count2 = 0;
const arr1 = [];
const arr2 = [];
const arr3 = [];


let checkcount = 0;
const ans = [];
let c = 0;
rest.addEventListener("click", function () {
   restart();
})
function restart() {
   for (btn of box) {
      btn.innerText = "";

      btn.setAttribute("class", "box");
      btn.disabled = false;
      strt = false;
      checkcount = 0;
      count1 = 0;
      count2 = 0;
      arr1.length = 0;
      arr2.length = 0;
      arr3.length = 0;
      enablebtn();
      chicken.innerText = "";
      winner.innerText = "";
      winner.classList.remove("text");
      chicken.classList.remove("text");



   }
}
for (btn of box) {

   btn.addEventListener("click", function (event) {
      restar.innerText = "Restart";
      c++;

      if (strt == false) {
         let curr = this.id;
         console.log(curr);

         arr1.push(curr);
         arr3.push(curr);
         console.log(arr1);
         count1++;
         this.innerText = "x";
         this.classList.add("box2");
         event.target.disabled = true;
         strt = true;

         if (count1 >= 3)
            check(arr1);
      }
      else {
         this.innerText = "o";
         this.classList.add("box3");

         let curr2 = this.id;
         console.log("bbhut bdiya sabash");
         arr2.push(curr2);
         arr3.push(curr2);
         console.log(arr2);
         count2++;

         if (count2 >= 3) {
            check(arr2);

         }

         strt = false;
         event.target.disabled = true;
      }

   });
}
const check2 = [["first1", "first2", "first3"], ["first1", "first4", "first7"], ["first1", "first5", "first9"], ["first2", "first5", "first8"],
["first3", "first5", "first7"], ["first3", "first6", "first9"], ["first4", "first5", "first6"], ["first7", "first8", "first9"]];

function check(check1 = []) {
   for (btn of check2) {
      for (btns of btn) {
         for (btn1 of check1) {
            if (btn1 == btns) {
               checkcount++;





            }
         }
      }
      if (checkcount == 3) {
         colorred(btn);
         makebtnenable();
         break;
      }




      else {

         if (check1.length == 5 && checkcount == 1) {
            colorgreen(arr3);
            setTimeout(() => {
               restart();
            }, 1000)
         }
         checkcount = 0;

      }
   }

}
function colorred(btn2 = []) {
   for (let i = 0; i < 3; i++) {
      let elt = document.querySelector(`#${btn2[i]}`);
      elt.classList.add("green");
      setTimeout(() => {
         winner.innerText = "WINNER WINNER";
         chicken.innerText = "CHICKEN DINNER";
         winner.classList.add("text");
         chicken.classList.add("text");
      }, 500);



   }
}
function makebtnenable() {
   for (let i = 1; i <= 9; i++) {
      let elts = document.querySelector(`#first${i}`);
      elts.disabled = true;
   }
}
function enablebtn() {
   for (let i = 1; i <= 9; i++) {
      let elts = document.querySelector(`#first${i}`);
      elts.disabled = false;
   }
}
function colorgreen(btn3 = []) {
   for (let i = 0; i < 9; i++) {
      let elt = document.querySelector(`#${btn3[i]}`);
      elt.classList.add("red");
   }
   winner.innerText = "It's Tie ";
   chicken.innerText = "Play Again";

}
