

var loadImageScroll = function(img) {
  var imgPos = img.getBoundingClientRect(),
	  src = img.getAttribute('data-src');
  window.addEventListener('scroll', function loadImgWhenVisible() {
    return window.scrollY >= (imgPos.top - window.innerHeight) ? (img.src = src, window.removeEventListener('scroll', loadImgWhenVisible)) : false;
  }); 
};

Array.apply(null, document.querySelectorAll('img')).forEach(function(e) {
	loadImageScroll(e);
});