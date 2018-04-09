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

  var createUl = function(){
  let ul = document.createElement("ul");
  ul.classList.add("cat");
  return ul;
};

var createli1 = function(catName){
  let li1 = document.createElement("li");
  li1.innerText = catName;
  return li1;
};

var createli2 = function(favouriteFood){
  let li2 = document.createElement("li");
  li2.innerText = favouriteFood;
  return li2;
};

var createli3 = function(catImage){
  let li3 = document.createElement("li");
  li3.innerHTML = "<img width='500' src= catImage >"
  return li3;
};

var appendElements = function(ul, li1, li2, li3){
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  let cats = document.querySelector("#cats");
  cats.appendChild(ul);
};

var addNewCat = function(catName, favouriteFood, catImage) {
  var ul = createUl();
  var li1 = createli1(catName);
  var li2 = createli2(favouriteFood);
  var li3 = createli3(catImage);
  appendElements(ul, li1, li2, li3);
};

addNewCat("Name: Rumpleteaser", "Favourite food: Beef", 'https://vignette.wikia.nocookie.net/jelliclecats/images/a/a0/Rumpleteazer_2.png/revision/latest?cb=20100531211334');
};

window.onload = app;
