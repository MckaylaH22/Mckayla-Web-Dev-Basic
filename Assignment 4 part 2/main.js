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
    newImage.setAttribute('src', filename); 
    newImage.setAttribute('alt', altTexts[filename]); 
    thumbBar.appendChild(newImage); 
});


/* Wiring up the Darken/Lighten button */
