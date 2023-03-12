function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const cardList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const card = track.querySelectorAll('.card');

    const cardWidth = card[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = cardList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,cardWidth,track) : nextAction(leftPosition,trackWidth,listWidth,cardWidth,track)
}

let prevAction = (leftPosition,cardWidth,track) => {
    if(leftPosition > 0) {
        // console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - cardWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,cardWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + cardWidth)}px`;
    }
}