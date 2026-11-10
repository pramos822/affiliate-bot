(function(){
var q=document.getElementById('q'),count=document.getElementById('count'),none=document.getElementById('none');
var cards=[].slice.call(document.querySelectorAll('.card')),chips=[].slice.call(document.querySelectorAll('.chip')),cat='';
function run(){var t=q.value.trim().toLowerCase(),n=0;
cards.forEach(function(c){var show=(!cat||c.dataset.c===cat)&&c.dataset.t.indexOf(t)>-1;c.hidden=!show;if(show)n++});
count.textContent=n+(n===1?' deal':' deals');none.hidden=n>0}
q.addEventListener('input',run);
chips.forEach(function(b){b.addEventListener('click',function(){cat=b.dataset.c;
chips.forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});run()})})
})()
