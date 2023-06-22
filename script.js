function updateTime() {
    var selectedCity = document.getElementById("city-select").value;
    var timeElement = document.getElementById("time");
    var secondsElement = document.getElementById("seconds");

    var options = {
        timeZone: selectedCity,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    var formatter = new Intl.DateTimeFormat([], options);
    var timeString = formatter.format(new Date());

    var [hours, minutes, seconds] = timeString.split(':');

    if (format24hrs) {
        timeElement.textContent = hours + ':' + minutes;
        secondsElement.textContent = ':' + seconds;
    } else {
        if (hours > 12) {
            timeElement.textContent = hours - 12 + ':' + minutes;
            secondsElement.textContent = ':' + seconds + " p.m.";
        }
        else {
            timeElement.textContent = hours + ':' + minutes;
            secondsElement.textContent = ':' + seconds + " a.m.";
        }
    }
}

setInterval(updateTime, 1000); // hace que el reloj se actualice cada 1 segundo.

var format24hrs = true;
function toggleFormat(){ //cambia formato de horario y actualiza el tiempo
    format24hrs = !format24hrs;
    updateTime();
}
updateTime();
