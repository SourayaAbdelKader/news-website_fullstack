

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

