const items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';
const odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}


querySelector selects only the first of its type as default whereas querySelectorAll selects all of its type as default
