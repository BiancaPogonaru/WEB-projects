window.onload = function() {
    /*function to upload images for a slideshow*/

    let div = document.getElementById('image_show1');
    let imageArray = [];    /* array to store images*/
    for(let i=0;i<5;i++) {   /*loop to get the photos*/
        let newImg = document.createElement('img');
        newImg.setAttribute('src','./images/xmas' + (i+1) + '.jpg');
        newImg.style.display = 'none';
        newImg.classList.add('img-fluid');  /*bootstrap class for responsive images*/
        newImg.style.maxWidth = '100%';
        newImg.style.minHeight = 'auto';
        newImg.classList.add('rounded');
        div.appendChild(newImg);
        imageArray.push(newImg);  /*store the images in the array just created*/

    }
    
    let index = 0;
    imageArray[0].style.display = 'inline-block';    /*the first photo is visible*/
    let myTime = setInterval(function() {            /*function to change the images on the interval of 3000ms*/
        imageArray[index].style.display = 'none';
        index = (index + 1) % imageArray.length;
        imageArray[index].style.display = 'inline-block';
        document.getElementById('stop-btn').addEventListener('click',function(){
            clearInterval(myTime);
        });
    },3000);
  
}   
    /*second div with images*/
    let div1 = document.getElementById('image_show2');
    let imageArray1 = [];
    for(let i=6; i < 11; i++){
        let newImg1 = document.createElement('img');
        newImg1.setAttribute('src','./images/xmas' + (i+1) + '.jpg');
        div1.appendChild(newImg1);
        imageArray1.push(newImg1);
        newImg1.style.display = 'none';
        newImg1.classList.add('img-fluid');
        newImg1.style.maxWidth = '100%';
        newImg1.style.minHeight = 'auto';
        newImg1.classList.add('rounded');
    }
    
    let index1 = imageArray1.length-1;
    imageArray1[index1].style.display = 'inline-block';
    let myTime = setInterval(function() {
        imageArray1[index1].style.display = 'none';
        index1 = (index1-1)% imageArray1.length;
        if ( index1 < 0)
            index1 = imageArray1.length - 1;
        imageArray1[index1].style.display = 'inline-block';
        document.getElementById('stop-btn').addEventListener('click',function(){
            clearInterval(myTime);
        });

    },3000);

    /* wishlist tab with localStorage*/
    const form = document.querySelector('#tab');
    const ul = document.querySelector('#tab-list');
    const button = document.querySelector('#clear-all-btn');
    const input = document.getElementById('item');
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];  
    
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('items'));
    
    const liMaker = (text) => { /*create a list where is stored the data written by the user*/
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    }
    
    form.addEventListener('submit', function (e) {/*adds the data on enter press*/
      e.preventDefault();/*prevents from submitting the form*/
    
      itemsArray.push(input.value);
      localStorage.setItem('items', JSON.stringify(itemsArray));  /*convert a JS object into a string*/
      liMaker(input.value);
      input.value = "";
    });
    
    data.forEach(item => {
      liMaker(item);
    });
    
    button.addEventListener('click', function () { /*function to clear the list on click*/
      localStorage.clear();
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild); /*delete the data*/
      }
      itemsArray = []; /*clear the array*/
    });