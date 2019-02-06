function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('div#nested div.target')
}
function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
function increaseRankBy(n) {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked li');
  for (let i = 1; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).tostring();
  }
}