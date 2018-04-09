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
  //3. Create the next element and it's text
  let li3 = document.createElement("li");
  li3.innerHTML = "<img width="500" src=http://image.wikifoundry.com/image/1/XOVwuOEBK29dn95OeAp08g64672/GW303H303>" 
  //4. Append cite to the blockquote
  //5. Append the blockquote to the article
  //6. Insert the article to the list of quotes
};
