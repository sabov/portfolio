window.onload = () => {
  document.querySelector('.breadcrumb').classList.add('loaded');
}
window.onscroll = throttle(() => {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  document.querySelector('.breadcrumb').classList.toggle('show', 30 <= scrollPosition);
}, 200);