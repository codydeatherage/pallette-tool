document.body.style.backgroundColor= 'gray';

function getRandomColor(){
    return '#' + parseInt(Math.random() * 0xffffff).toString(16);
}


const top_left = document.getElementById('top-left');
const bot_left = document.getElementById('bot-left');
const top_right = document.getElementById('top-right');
const bot_right = document.getElementById('bot-right');

/* top_left.addEventListener('click' , () =>{
    let color = getRandomColor();
    top_left.innerText = color;
    top_left.style.backgroundColor = color;
})
 */

