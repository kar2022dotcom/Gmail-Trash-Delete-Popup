let trash = document.querySelector('#trash');
let modelContainer = document.querySelector('#modelContainer');
let xBtn = document.querySelector('.xBtn');
let cancel = document.querySelector('.cancel');
let ok = document.querySelector('.ok');
let close = document.querySelector('#close');


trash.addEventListener('click', trashModel);

function trashModel(){
    modelContainer.style.display = 'block'
    document.body.style.background = 'gray';
}

xBtn.addEventListener('click', function(){
    modelContainer.style.display = 'none';
    document.body.style.background = 'white';
})

cancel.addEventListener('click', function(){
    modelContainer.style.display = 'none';
    document.body.style.background = 'white';
})

ok.addEventListener('click', function(){
    modelContainer.style.display = 'none';
    document.body.style.background = 'white';
    
})

xBtn.addEventListener('mouseover', function(){
    setTimeout(function(){
        close.style.display = 'block';
    },500)
})

xBtn.addEventListener('mouseout', function(){
    close.style.display = 'none';
})