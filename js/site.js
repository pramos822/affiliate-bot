(function(){
var q=document.getElementById('q'),count=document.getElementById('count'),none=document.getElementById('none'),more=document.getElementById('more');
var grid=document.querySelector('.grid[data-limit]'),limit=grid?+grid.dataset.limit:1e9,all=false,cat='';
var cards=[].slice.call(document.querySelectorAll('#deals .card')),chips=[].slice.call(document.querySelectorAll('.chip'));
function run(){var t=q.value.trim().toLowerCase(),filtering=!!(t||cat),n=0;
cards.forEach(function(c){var ok=(!cat||c.dataset.c===cat)&&c.dataset.t.indexOf(t)>-1;if(ok)n++;
c.hidden=!ok||(!filtering&&!all&&n>limit)});
count.textContent=n+(n===1?' deal':' deals');none.hidden=n>0;if(more)more.hidden=filtering||all||n<=limit}
q.addEventListener('input',run);
if(more)more.addEventListener('click',function(){all=true;run()});
chips.forEach(function(b){b.addEventListener('click',function(){cat=b.dataset.c;
chips.forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});run()})})
})()
