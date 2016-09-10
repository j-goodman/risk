var onLoad;

onLoad = function () {
  var slide; var headline; var title;
  slide = document.getElementsByTagName('slide');
  headline = document.getElementsByClassName('headline')[0];
  title = document.getElementsByClassName('main-banner')[0];
  headline.className += ' expant';
  window.setTimeout(function () {
    slide[0].className = 'blue-marble-slide';
    slide[1].className = 'welcome-slide active';
    title.className += ' risen';
  }, 2600);
};

window.onload = onLoad;
