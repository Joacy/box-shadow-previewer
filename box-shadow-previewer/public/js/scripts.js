let xAxis;
let yAxis;
let blur;
let spread;
let shadowColor;

document
    .getElementById("xAxis")
    .addEventListener('change', function () {
        xAxis = document.getElementById("xAxis").value;
        yAxis = document.getElementById("yAxis").value;
        blur = document.getElementById("blur").value;
        spread = document.getElementById("spread").value;
        shadowColor = document.getElementById("shadowColor").value;

        document.getElementById("conteudo").style.boxShadow = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";

        document.getElementById("bsh").innerText = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";
    });

document
    .getElementById("yAxis")
    .addEventListener('change', function () {
        xAxis = document.getElementById("xAxis").value;
        yAxis = document.getElementById("yAxis").value;
        blur = document.getElementById("blur").value;
        spread = document.getElementById("spread").value;
        shadowColor = document.getElementById("shadowColor").value;

        document.getElementById("conteudo").style.boxShadow = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";

        document.getElementById("bsh").innerText = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";
    });

document
    .getElementById("blur")
    .addEventListener('change', function () {
        xAxis = document.getElementById("xAxis").value;
        yAxis = document.getElementById("yAxis").value;
        blur = document.getElementById("blur").value;
        spread = document.getElementById("spread").value;
        shadowColor = document.getElementById("shadowColor").value;

        document.getElementById("conteudo").style.boxShadow = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";

        document.getElementById("bsh").innerText = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";
    });

document
    .getElementById("spread")
    .addEventListener('change', function () {
        xAxis = document.getElementById("xAxis").value;
        yAxis = document.getElementById("yAxis").value;
        blur = document.getElementById("blur").value;
        spread = document.getElementById("spread").value;
        shadowColor = document.getElementById("shadowColor").value;

        document.getElementById("conteudo").style.boxShadow = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";

        document.getElementById("bsh").innerText = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px";
    });

document
    .getElementById("shadowColor")
    .addEventListener('change', function () {
        xAxis = document.getElementById("xAxis").value;
        yAxis = document.getElementById("yAxis").value;
        blur = document.getElementById("blur").value;
        spread = document.getElementById("spread").value;
        shadowColor = document.getElementById("shadowColor").value;

        document.getElementById("conteudo").style.boxShadow = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px" + " " +
            shadowColor;

        document.getElementById("bsh").innerText = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px" + " " +
            shadowColor;
    });

let divColor;

document
    .getElementById("divColor")
    .addEventListener('change', function () {
        divColor = document.getElementById("divColor").value;

        document.getElementById("caixa").style.background = divColor;

        xAxis = document.getElementById("xAxis").value;
        yAxis = document.getElementById("yAxis").value;
        blur = document.getElementById("blur").value;
        spread = document.getElementById("spread").value;
        shadowColor = document.getElementById("shadowColor").value;

        document.getElementById("conteudo").style.boxShadow = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px" + " " +
            shadowColor;

        document.getElementById("bsh").innerText = xAxis + "px" + " " +
            yAxis + "px" + " " +
            blur + "px" + " " +
            spread + "px" + " " +
            shadowColor;
    });

function setTexto () {
    document
        .getElementById("conteudoCopiar").innerHTML =
        "box-shadow: " +
        document.getElementById("xAxis").value + "px " +
        document.getElementById("yAxis").value + "px " +
        document.getElementById("blur").value + "px " +
        document.getElementById("spread").value + "px " +
        document.getElementById("shadowColor").value + ";";
}

document
    .getElementById("botaoCopiar").addEventListener('click', function () {
        setTexto();
        var copiarTexto = document.getElementById("conteudoCopiar");
        copiarTexto.select();
        document.execCommand("copy");
    });