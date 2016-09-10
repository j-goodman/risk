var onLoad;

onLoad = function () {
  var slide; var headline;
  slide = document.getElementsByTagName('slide');
  headline = document.getElementsByClassName('headline')[0];
  headline.className += ' expant';
  window.setTimeout(function () {
    console.log("!");
    slide[0].className = 'blue-marble-slide';
    slide[1].className = 'welcome-slide active';
  }, 3400);
};

window.onload = onLoad;
