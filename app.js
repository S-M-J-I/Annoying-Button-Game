const btn = document.querySelector('button');

btn.style.transition = 'all .8s'

function animate(){
    let x = Math.floor( Math.random() * window.innerWidth);
    let y = Math.floor( Math.random() * window.innerHeight);
    btn.style.transform = `translate(${x}px,${y}px)`;
}

btn.addEventListener( 'mouseover', animate);

btn.addEventListener('click' , () =>{
    console.log('clicked');
    btn.innerText = "You cliked me";
    btn.style.position = 'fixed';
    btn.style.top = '50%';
    btn.style.left = '50%';
    btn.style.transform = 'translate(-50%,-50%)';
    btn.classList.add('fixedStyle');
    btn.removeEventListener('mouseover', animate);
});