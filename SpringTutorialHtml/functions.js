var content;
async function requestContent() {
  const response = await fetch('http://localhost:8080/api/content');
  const myJson = await response.json();

  let appDivElement = document.getElementById('app');
  appDivElement.innerHTML = "";

  let storeDivElement = document.createElement('div');
  storeDivElement.className = 'store';
  appDivElement.appendChild(storeDivElement);

  for (let i = 0; i < myJson.length; i++) {
    let contentDivElement = document.createElement('div');
    contentDivElement.className = 'content';
    contentDivElement.setAttribute('onclick', 'requestContentByID(' + myJson[i].id + ')');
    storeDivElement.appendChild(contentDivElement);

    let contentImageElement = document.createElement('img');
    contentImageElement.src = myJson[i].image;
    contentImageElement.className = 'content-image';
    contentDivElement.appendChild(contentImageElement);

    let contentTitleElement = document.createElement('span');
    contentTitleElement.innerHTML = myJson[i].title;
    contentTitleElement.className = 'content-title';
    contentDivElement.appendChild(contentTitleElement);

    let contentPriceElement = document.createElement('span');
    contentPriceElement.innerHTML = myJson[i].price + "€";
    contentPriceElement.className = 'content-price';
    contentDivElement.appendChild(contentPriceElement);
  }
}

async function requestContentByID(id) {
  const response = await fetch('http://localhost:8080/api/content/' + id);
  const myJson = await response.json();

  let appDivElement = document.getElementById('app');
  appDivElement.innerHTML = "";

  let overViewDivElement = document.createElement('div');
  overViewDivElement.className = 'overView';
  appDivElement.appendChild(overViewDivElement);

  let overViewImageElement = document.createElement('img');
  overViewImageElement.src = myJson.image;
  overViewImageElement.className = 'overView-image';
  overViewDivElement.appendChild(overViewImageElement);

  let overViewInfoElement = document.createElement('div');
  overViewInfoElement.className = 'overView-info';
  overViewDivElement.appendChild(overViewInfoElement);
  
  let overViewTitleElement = document.createElement('h2');
  overViewTitleElement.innerHTML = myJson.title;
  overViewTitleElement.className = 'overView-title';
  overViewInfoElement.appendChild(overViewTitleElement);

  let overViewDescriptionElement = document.createElement('p');
  overViewDescriptionElement.innerHTML = myJson.desc;
  overViewDescriptionElement.className = 'overView-description';
  overViewInfoElement.appendChild(overViewDescriptionElement);

  let overViewPriceElement = document.createElement('span');
  overViewPriceElement.innerHTML = myJson.price + "€";
  overViewPriceElement.className = 'overView-price';
  overViewInfoElement.appendChild(overViewPriceElement);

  let overViewCloseElement = document.createElement('span');
  overViewCloseElement.className = 'overView-close';
  overViewCloseElement.setAttribute('onclick', 'closeOverView(this)');
  overViewInfoElement.appendChild(overViewCloseElement);
  for (let i = 0; i < 2; i++) {
    let closeButtonLineElement = document.createElement('div');
    closeButtonLineElement.className = 'close-button-line';
    overViewCloseElement.appendChild(closeButtonLineElement);
  }
}

function closeOverView() {
  requestContent();
}

function openAddItem() {
  let appDivElement = document.getElementById('app');
  appDivElement.innerHTML = "";
  
  let addItemDivElement = document.createElement('div');
  addItemDivElement.className = 'addItem';
  appDivElement.appendChild(addItemDivElement);

  let addItemTitleElement = document.createElement('h2');
  addItemTitleElement.innerHTML = "Add Item";
  addItemTitleElement.className = 'addItem-title';
  addItemDivElement.appendChild(addItemTitleElement);

  let addItemCloseElement = document.createElement('span');
  addItemCloseElement.className = 'addItem-close';
  addItemCloseElement.setAttribute('onclick', 'closeAddItem()');
  addItemDivElement.appendChild(addItemCloseElement);
  for (let i = 0; i < 2; i++) {
    let closeButtonLineElement = document.createElement('div');
    closeButtonLineElement.className = 'close-button-line';
    addItemCloseElement.appendChild(closeButtonLineElement);
  }

  let addItemFormElement = document.createElement('form');
  addItemFormElement.className = 'addItem-form';
  addItemDivElement.appendChild(addItemFormElement);
  
  let addItemTitleLabelElement = document.createElement('label');
  addItemTitleLabelElement.innerHTML = "Title";
  addItemTitleLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemTitleLabelElement);

  let addItemTitleInputElement = document.createElement('input');
  addItemTitleInputElement.id = 'title';
  addItemTitleInputElement.className = 'addItem-input';
  addItemTitleInputElement.setAttribute('type', 'text');
  addItemTitleInputElement.setAttribute('name', 'title');
  addItemTitleInputElement.setAttribute('placeholder', 'Title');
  addItemFormElement.appendChild(addItemTitleInputElement);

  let addItemCategoryLabelElement = document.createElement('label');
  addItemCategoryLabelElement.innerHTML = "Category";
  addItemCategoryLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemCategoryLabelElement);
  
  let addItemCategoryInputElement = document.createElement('input');
  addItemCategoryInputElement.id = 'category';
  addItemCategoryInputElement.className = 'addItem-input';
  addItemCategoryInputElement.setAttribute('type', 'text');
  addItemCategoryInputElement.setAttribute('name', 'category');
  addItemCategoryInputElement.setAttribute('placeholder', 'Category');
  addItemFormElement.appendChild(addItemCategoryInputElement);

  let addItemDescLabelElement = document.createElement('label');
  addItemDescLabelElement.innerHTML = "Description";
  addItemDescLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemDescLabelElement);
  
  let addItemDescInputElement = document.createElement('input');
  addItemDescInputElement.id = 'desc';
  addItemDescInputElement.className = 'addItem-input';
  addItemDescInputElement.setAttribute('type', 'text');
  addItemDescInputElement.setAttribute('name', 'desc');
  addItemDescInputElement.setAttribute('placeholder', 'Description');
  addItemFormElement.appendChild(addItemDescInputElement);

  let addItemUsernameLabelElement = document.createElement('label');
  addItemUsernameLabelElement.innerHTML = "Username";
  addItemUsernameLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemUsernameLabelElement);

  let addItemUsernameInputElement = document.createElement('input');
  addItemUsernameInputElement.id = 'username';
  addItemUsernameInputElement.className = 'addItem-input';
  addItemUsernameInputElement.setAttribute('type', 'text');
  addItemUsernameInputElement.setAttribute('name', 'username');
  addItemUsernameInputElement.setAttribute('placeholder', 'Username');
  addItemFormElement.appendChild(addItemUsernameInputElement);

  let addItemEmailLabelElement = document.createElement('label');
  addItemEmailLabelElement.innerHTML = "Email";
  addItemEmailLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemEmailLabelElement);

  let addItemEmailInputElement = document.createElement('input');
  addItemEmailInputElement.id = 'email';
  addItemEmailInputElement.className = 'addItem-input';
  addItemEmailInputElement.setAttribute('type', 'email');
  addItemEmailInputElement.setAttribute('name', 'email');
  addItemEmailInputElement.setAttribute('placeholder', 'Email');
  addItemFormElement.appendChild(addItemEmailInputElement);

  let addItemPriceLabelElement = document.createElement('label');
  addItemPriceLabelElement.innerHTML = "Price";
  addItemPriceLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemPriceLabelElement);
  
  let addItemPriceInputElement = document.createElement('input');
  addItemPriceInputElement.id = 'price';
  addItemPriceInputElement.className = 'addItem-input';
  addItemPriceInputElement.setAttribute('type', 'text');
  addItemPriceInputElement.setAttribute('name', 'price');
  addItemPriceInputElement.setAttribute('placeholder', 'Price');
  addItemFormElement.appendChild(addItemPriceInputElement);

  let addItemImageLabelElement = document.createElement('label');
  addItemImageLabelElement.innerHTML = "Image";
  addItemImageLabelElement.className = 'addItem-label';
  addItemFormElement.appendChild(addItemImageLabelElement);

  let addItemImageInputElement = document.createElement('input');
  addItemImageInputElement.id = 'image';
  addItemImageInputElement.className = 'addItem-input';
  addItemImageInputElement.setAttribute('type', 'text');
  addItemImageInputElement.setAttribute('name', 'image');
  addItemImageInputElement.setAttribute('placeholder', 'Image');
  addItemFormElement.appendChild(addItemImageInputElement);

  let addItemSubmitElement = document.createElement('input');
  addItemSubmitElement.className = 'addItem-submit';
  addItemSubmitElement.setAttribute('type', 'button');
  addItemSubmitElement.setAttribute('value', 'Add Item');
  addItemSubmitElement.setAttribute('onclick', 'addNewItemToDatabase()');
  addItemFormElement.appendChild(addItemSubmitElement);
}

function closeAddItem() {
  requestContent();
}

function addNewItemToDatabase() {
  let title = document.getElementById('title').value;
  let category = document.getElementById('category').value;
  let desc = document.getElementById('desc').value;
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let price = document.getElementById('price').value;
  let image = document.getElementById('image').value;

  let newItem = {
    id : null,
    title: title,
    category: category,
    desc: desc,
    username: username,
    email: email,
    price: price,
    image: image
  };

  fetch('http://localhost:8080/api/content/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
  .then(response => response.json())
  .then(json => {
    console.log(json);
    requestContent();
  });
}