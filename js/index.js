let DIST_ADDR = "http://22e1406v27.imwork.net";
let DIST_PORT = 6415;
let DIST = DIST_ADDR + ":" + DIST_PORT.toString();

window.onload = () => {
    console.log("window onload.");
    window.location.href = DIST;
}

function jump(){
    window.location.href = DIST;
}
