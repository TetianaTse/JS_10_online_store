function showCategories() {
  const container = document.querySelector('.categories');

  for (let i = 0; i < data.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = data[i].name;
    elem.setAttribute('data-category', i);
    elem.addEventListener('click', showProducts);
    container.appendChild(elem);
  }
}

// handler of click on categories
function showProducts(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const products = data[categoryIndex].products;
  const container = document.querySelector('.products');
  container.innerHTML = '';
  
  for(let i = 0; i < products.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = products[i].name;
    elem.setAttribute('data-product', i);
    elem.setAttribute('data-category', categoryIndex);
    elem.addEventListener('click', showDetails, false);
    container.appendChild(elem);
  }
}

function showDetails(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const productIndex = event.target.getAttribute('data-product');
  const details = data[categoryIndex].products[productIndex];
  const container = document.querySelector('.details');
  container.innerHTML = '';

  const elem = document.createElement('div');
  elem.classList.add('details-text');
  elem.innerHTML= `<p><b>name:</b> ${details.name}</p><p><b>price:</b> ${details.price}</p><p><b>description:</b> ${details.description}</p> `;
  container.appendChild(elem);
  buyProduct();
}

function buyProduct() {
  const container = document.querySelector('.details');
  const btn = document.createElement('button');
  btn.textContent = 'Buy now';
  container.appendChild(btn);
  btn.addEventListener('click', function() {
    const container = document.querySelector('.result');
    const message= document.createElement('p');
    message.textContent = 'Thank you for your purchase! Product purchased!';
    container.appendChild(message);
    setTimeout(function() {
      document.location.reload();
   }, 5000);
   
  });
}

showCategories();

