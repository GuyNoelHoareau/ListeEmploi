const cartes = document.querySelector('.cards');

fetch('https://dev.h2prog.com/API_TEST/formations/')
    .then(response => response.json())
    .then(data => {

        for (i = 0; i < data.length; i++) {
            let newArticle = document.createElement('article');
            newArticle.classList.add("card");
            let newHeader = document.createElement('header');
            let newh2 = document.createElement('p');
            let newImage = document.createElement('img')
            let newContent = document.createElement('div');
            newContent.classList.add("content");
            newDescription = document.createElement('p');

            newh2.innerText = data[i].libelle;
            newDescription.innerText = data[i].description;

            newHeader.appendChild(newh2);
            newArticle.appendChild(newHeader);
            newArticle.appendChild(newImage);
            newContent.appendChild(newDescription);
            newArticle.appendChild(newContent);

            cartes.appendChild(newArticle);

        }

    })
    .catch(err => console.error(err));