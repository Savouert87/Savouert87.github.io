async function getProducts() {
  var apiUrl = "https://dummyjson.com/products";
  var prodObj = await fetch(apiUrl);
  var products = await prodObj.json();
  var productsList = products["products"];

  var table = "<table width='100%' style='border-collapse: collapse;'>";
  table += "<tr> <th>Image</th><th>Title</th><th>price</th> <th>Brand</th><th>Category</th></tr>";
  for (var product in productsList) {
    var productsList = products["products"];
    var proObj = productsList[product];
    table += "<tr>";
    table += "<td> <img src='" + proObj.thumbnail + "'></td>";
    table += "<td> " + proObj.title + "</td>";
    table += "<td> " + proObj.price + "</td>";
    table += "<td> " + proObj.brand + "</td>";
    table += "<td> " + proObj.category + "</td>";
    table += "</tr>";

  }
  table += "</table>";

  document.getElementById("products").innerHTML = table;
}

getProducts();

/// Function to toggle between light and night mode
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.toggle('night-mode');
  const newTheme = currentTheme ? 'night' : 'light';
  localStorage.setItem('theme', newTheme);
  updateListGroupBackground(newTheme);
  updateIcon(newTheme);
}

// Function to update list group background based on theme
function updateListGroupBackground(theme) {
  const listGroupItems = document.querySelectorAll('.list-group-item');
  listGroupItems.forEach(item => {
    item.style.backgroundColor = theme === 'night' ? 'black' : 'white';
    item.style.color = theme === 'night' ? 'white' : 'black';
  });
}

// Function to update the theme icon based on the current theme
function updateIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'night') {
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-brightness-high-fill');
  } else {
    icon.classList.remove('bi-brightness-high-fill');
    icon.classList.add('bi-moon-stars-fill');
  }
}

// Function to apply the stored theme on page load
function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'night') {
    document.body.classList.add('night-mode');
    updateListGroupBackground('night');
    updateIcon('night');
  } else {
    updateListGroupBackground('light');
    updateIcon('light');
  }
}

// Apply the stored theme when the page loads
document.addEventListener('DOMContentLoaded', applyStoredTheme);


