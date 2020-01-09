  let products = [  /*object with man clothes*/
    {type: 'man', name: 'Black Jeans', price: 15, image: './images/men1.jpg'},
    {type: 'man', name: 'White Peached Hoodie', price: 26},
    {type: 'man', name: 'Black and White Sweatshirt', price: 52},
    {type: 'man', name: 'Navy and Camel Scarf', price: 68},
    {type: 'man', name: 'Khaki Jeans', price: 9, image: './images/men2.jpg'},
    {type: 'man', name: 'Grey Flight Hoodie', price: 8},
    {type: 'man', name: 'Oat Faux Wool Jeans', price: 75, image: './images/men3.jpg'},
    {type: 'man', name: 'Khaki Oxford Shirt', price: 8},
  ];

  window.onload = function getDiscountproducts(){/*function to check if item has discount*/
  let sale_items = [];
  let jeans_items = [];
  let shirt_item = [];
  sale_items = products.slice();/*select the element in products array to make changes in sale_items*/
  for(i in products){
    if(products[i].price > 30){
      // item is up to sale
      sale_items.pop();/*eliminate the item*/
    }
    if(products[i].name.includes('Jeans')){
      jeans_items.push("<img id = show-photos class = img-fluid src = " + products[i].image + " >");
    }
    else{
          shirt_item.push(products[i]);
    }
  }
  const newElem = document.getElementById('product_images_hd');
  
  
  document.getElementById('jeans_items').addEventListener('mouseover',function(){/*add some clothes on the screen on mouseover*/
      newElem.innerHTML = jeans_items;
      newElem.classList.add('animated','fadeIn');
      /* audio element on mouseover */
      let audioElem = document.createElement('audio');
      audioElem.setAttribute('src','./video.audio/music.mp3');
      audioElem.setAttribute('controls','controls');
      audioElem.setAttribute('id','audio-element');
      let footer_el = document.getElementById('page_footer');
      /* insert before footer */
      footer_el.insertBefore(audioElem,footer_el.childNodes[0]);
  });
}



