const app = function(){
  //1. Create the parent container and it's class
  let ul = document.createElement("ul");
  ul.classList.add("cat");
  //2. Create the first child - in this case; the li
  let li1 = document.createElement("li");
  li1.innerText = "Name: MungoJerry";
  //3. Create the next element and it's text
  let li2 = document.createElement("li");
  li2.innerText = "Favourite food: haddock";
  //4. Create the next element and it's text
  let li3 = document.createElement("li");
  li3.innerHTML = "<img width='500' src='http://image.wikifoundry.com/image/1/XOVwuOEBK29dn95OeAp08g64672/GW303H303'>"
  //5. Append the li to the ul
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  //6. Insert the ul to the list of cats
  let cats = document.querySelector("#cats");
  cats.appendChild(ul);
  debugger;
};

window.onload = app;
