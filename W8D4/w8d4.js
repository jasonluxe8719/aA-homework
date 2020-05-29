function setTimeouts() {

    window.setTimeout(function() {
        alert(`HAMMERTIME`);
    }, 5000);
}

setTimeouts();

function hammerTime(time) {
    window.setTimeout(function() {
        alert(`${time} is hammertime!`);
    });
}

hammerTime(7000);