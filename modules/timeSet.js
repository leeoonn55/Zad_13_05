
// Funkcja wyswietlająca format godzina, munita sekunda po podaniu ilości sekund

function getTimeSet(sekund) {
    //deklaracje zmiennych
    var timeFormat = ''
    var minuteSet = 0;
    var hourSet = 0;
    var secondSet = Math.floor(sekund);
    
    //wydzielenie godzin
    if (secondSet>3600) {
        hourSet = Math.floor(secondSet / 3600);             //wyliczenie ilości godzin
        secondSet = secondSet - (hourSet * 3600);           //wyliczenie pozostałych sekund
        timeFormat = hourSet + ' hour, ';                   //wyświetlenie ilości godzin
    }

    // wydzielenie minut
    if (secondSet>60) {
        minuteSet = Math.floor(secondSet / 60);                 //wyliczenie ilości minut
        secondSet = secondSet - (minuteSet * 60);               //wyliczenie ilości pozostałych sekund
        timeFormat = timeFormat + minuteSet + ' minute, ';      //wyświetlenie ilości godzin i mimut
    }

    //sprawdzenie czy zostały jakieś sekundy
    if (secondSet > 0) {
        timeFormat = timeFormat + secondSet + ' second';        // wyświetlenie ilości pozostałych sekund
    }
    
    
    return timeFormat;
}

exports.timePrint = getTimeSet;