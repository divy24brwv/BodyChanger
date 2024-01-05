const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackground = () => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#fc0303";
            break;
        case "tarus":
            body.style.backgroundColor = "#03fc6f";
            break;
        case "gemini":
            body.style.backgroundColor = "#fce514";
            break;
        case "cancer":
            body.style.backgroundColor = "#a1fc03";
            break;
        case "leo":
            body.style.backgroundColor = "#fcba03";
            break;
        case "virgo":
            body.style.backgroundColor = "#c8f9f9";
            break;
        case "libra":
            body.style.backgroundColor = "#fc032d";
            break;
        case "scorpio":
            body.style.backgroundColor = "#000000";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#6394ec";
            break;
        case "aquarius":
            body.style.backgroundColor = "#fc8c03";
            break;
        case "capricorn":
            body.style.backgroundColor = "#eb8d57";
            break;
        case "pisces":
            body.style.backgroundColor = "#fc88d8";
            break;
        default:
            body.style.backgroundColor = "#fff";
            break;

    }
}