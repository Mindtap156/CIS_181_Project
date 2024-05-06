function whichBandMember(bandMember) {
    switch (bandMember) {
        case 'mira':
            {
                document.getElementById("band").src = "mira.jpg";
            };
            break;
        case 'ryan':
            {
                document.getElementById("band").src = "ryan.jpg";
            };
            break;
        case 'jon':
            {
                document.getElementById("band").src = "jon.jpg";
            };
            break;
        default:
            ;
            break;
    }

}

function notBandMember() {
    document.getElementById("band").src = "full_band.jpg";
}
