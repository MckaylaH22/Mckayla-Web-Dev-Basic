const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


/* Declaring the alternative text for each image file */
const altTexts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'A beautiful landscape',
    'pic3.jpg': 'Adorable kitten playing',
    'pic4.jpg': 'Stunning sunset over the ocean',
    'pic5.jpg': 'Delicious plate of food'
};

/* Looping through images */
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  /*Making a path to the image*/
  const imagePath = 'images/' + filename; 
  newImage.setAttribute('src', imagePath); 
  newImage.setAttribute('alt', altTexts[filename]); 
  thumbBar.appendChild(newImage);
});

/*Add click event listener*/
    newImage.addEventListener('click',function() {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });


