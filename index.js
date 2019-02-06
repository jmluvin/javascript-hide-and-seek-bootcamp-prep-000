function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('div#nested div.target')
}
function deepestChild() {
  const lis = document.querySelector('div#grand-node div div div div')
}
function increaseRankBy(n) {
  return document.querySelectorAll('ul.ranked li')
}