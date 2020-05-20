'use strict'
var header = $('.topbar');
$(window).scroll(function() {
    var scroll =  $(window).scrollTop();
    if (scroll> header.height()) {
        header.addClass('topbar--fixed-scroll');
    } else {
        header.removeClass('topbar--fixed-scroll');
    }
});

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    var articles = data.slice(0, 10);

    function printArticle(id, title, body) {
      var article = `<li class="promoted-articles-item column column--xs-12 column--sm-6 column--md-4">
      <a class="promoted-articles-item__title" href="#">` + title + `</a>
      <p class="meta">`+ body + `</p>
      </li>`;
      return article
    };
    articles.reverse().forEach((article) => {
      $('.interesting-articles__list').append(printArticle(article.id, article.title, article.body))
    });
  });