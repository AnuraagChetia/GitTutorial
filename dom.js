const li = document.getElementsByTagName('li');
li[2].style.backgroundColor = 'red';
for (let i = 0; i< li.length; i++) {
  li[i].style.fontWeight = 'bold';
  li[i].style.backgroundColor = 'grey';
}
