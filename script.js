let aList = document.getElementsByTagName('a') // this function didn return an array, wtf?

for (let i = 0; i < aList.length; i++) {
  aList[i].addEventListener('click', testKeKlick)
}


function testKeKlick() {
  alert('test')
}
