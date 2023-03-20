function rain() {
    let amount = 300;
    let body = document.querySelector('body');
    let i = 0;

    while(i < amount) {
        let drop = document.createElement('i');

        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 20;

        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 0.4 + duration + 's';
        drop.style.width = 0.2 + size+'px';
        drop.style.left = posX + 'px';

        body.appendChild(drop);
        i++;
    }
}

rain();