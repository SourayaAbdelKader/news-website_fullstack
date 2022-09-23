// for this assignment, I searched for a couple of articles and put them in the dats base, I used the following 
//  method to fetch and display them
// In an actual website there will be a whole page with articles of art and economy, which the client can pick and read, but for the sake of this assignment I choosed 3 articles from 3 different categories to display them
// directery into the website
$.getJSON("http://localhost/news-assignment/backend/science-article.php", function (data) {
    const science_title = document.getElementById("science-title");
    const science_author = document.getElementById("science-author");
    const science_article = document.getElementById("science-article");
    const science_image = document.getElementById("science-image");
    const science_brief = document.getElementById("science-brief");
    science_image.src = data[0].images;
    science_brief.innerHTML = data[0].brief
    science_title.innerHTML = data[0].title;
    science_author.innerHTML = data[0].author;
    science_article.innerHTML = data[0].article;
    console.log(data[0].title)
    console.log(typeof(data[0].title))
    });
    
$.getJSON("http://localhost/news-assignment/backend/economy-article.php", function (data) {
    const economy_title = document.getElementById("economy-title");
    const economy_author = document.getElementById("economy-author");
    const economy_article = document.getElementById("economy-article");
    const economy_image = document.getElementById("economy-image");
    const economy_brief = document.getElementById("economy-brief");
    economy_image.src = data[0].images;
    economy_brief.innerHTML = data[0].brief
    economy_title.innerHTML = data[0].title;
    economy_author.innerHTML = data[0].author;
    economy_article.innerHTML = data[0].article;
    console.log(data[0].title)
    console.log(typeof(data[0].title))
    });

$.getJSON("http://localhost/news-assignment/backend/art-articles.php", function (data) {
    const art_title = document.getElementById("art-title");
    const art_author = document.getElementById("art-author");
    const art_article = document.getElementById("art-article");
    const art_image = document.getElementById("art-image");
    const art_brief = document.getElementById("brief");
    art_image.src = data[0].images;
    art_brief.innerHTML = data[0].brief
    art_title.innerHTML = data[0].title;
    art_author.innerHTML = data[0].author;
    art_article.innerHTML = data[0].article;
    console.log(data[0].title)
    console.log(typeof(data[0].title))
    });

