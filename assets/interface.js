document.addEventListener('DOMContentLoaded', ()=>{
    
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {
        btn.addEventListener('click', handClick);
    })

})

function handClick(event){

    let btn = event.target;
    let position = btn.id;

    handleMove(position);
    updateButtons();
}

function updateButtons(){
    
    let buttons = document.querySelectorAll('.btn');
    
    buttons.forEach((btn) => {
        let position = btn.id;
        let symbol = board[position];

        if (symbol != '') {
            btn.innerHTML = `<div class='${symbol}'></div>`
        }

    }


}