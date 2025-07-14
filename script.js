// Load content dynamically with sidebar
function loadContent(type) {
  fetch(`content/${type}.json`)
    .then(response => response.json())
    .then(data => {
      const contentArea = document.getElementById('content-area');
      contentArea.innerHTML = `
        <div class="sidebar">
          <h2>${capitalize(type)}</h2>
          <ul id="item-list"></ul>
        </div>
        <div class="main-content" id="main-content">
          <p>Select an item from the left to read.</p>
        </div>
      `;

      const itemList = document.getElementById('item-list');
      data.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${capitalize(type)} ${index + 1}`;
        li.onclick = () => {
          const mainContent = document.getElementById('main-content');
          mainContent.innerHTML = `
            <h3>${capitalize(type)} ${index + 1}</h3>
            <p>${item}</p>
          `;
        };
        itemList.appendChild(li);
      });
    })
    .catch(err => {
      console.error(err);
      alert('Error loading content!');
    });
}

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Toggle Feedback and Know More
function toggleInfo(section) {
  const infoBox = document.getElementById('info-box');
  if (section === 'feedback') {
    infoBox.innerHTML = `
      <h3>Feedback</h3>
      <p>Email me at <a href="mailto:youremail@example.com">youremail@example.com</a></p>
    `;
  } else if (section === 'knowmore') {
    infoBox.innerHTML = `
      <h3>About Philosophobia</h3>
      <p>This site shares my quotes, poems, and random thoughts with you.</p>
    `;
  }
  infoBox.style.display = infoBox.style.display === 'none' ? 'block' : 'none';
}
