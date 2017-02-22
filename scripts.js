function rysujChoinke (n) {
    for (var row = 0 ; row < (n + 1) ; row++) {
        var star = "";
        for (var starsNumber = 0 ; starsNumber < (row * 2 - 1) ; starsNumber++) {
                star += "*";
        }
        console.log(star);
    }
}

rysujChoinke (4);

