
function getSeniales(numSeniales) {
    const seniales = [];
    for (let i = 0; i < numSeniales; i++) {
        seniales.push(Math.floor(Math.random() * 360));
    }
    return seniales;
}

function letras(grado) {
    if (grado >= 45 && grado < 135) {
        return 'N' + " ";
    } else if (grado >= 135 && grado < 225) {
        return 'O' + " ";
    } else if (grado >= 225 && grado < 315) {
        return 'S' + " ";
    } else {
        return 'E' + " ";
    }
}

function secuencia(seniales) {
    let secuencia = '';
    for (const senial of seniales) {
        const cuadrante = letras(senial);
        secuencia += cuadrante;
    }
    return secuencia;
}

function ciclos(secuencia) {
    let ciclos = 0;
    for (let i = 0; i < secuencia.length - 3; i++) {
        const subsecuencia = secuencia.substring(i, i + 4);
        if ([' N E S O ', ' O S E N ', ' E S O N ', ' S E N O ', ' S O N E ', ' E N O S ', ' O N E S ', ' N O S E '].includes(subsecuencia)) {
            ciclos++;
        }
    }
    return ciclos;
}

function porcentajes(secuencia, cuadrante) {
    const total = secuencia.length;
    const ocurrencias = secuencia.split(cuadrante).length - 1;
    return (ocurrencias * 100) / total;
}

function Seniales() {
    const numSeniales = 15;
    const seniales = getSeniales(numSeniales);
    const Letras = secuencia(seniales);
    const ciclosCompletos = ciclos(Letras);
    
    let resultadosHTML = "<h2>Resultados</h2>";
    resultadosHTML += "<p>Señales generadas: " + seniales.join(' ') + "</p>";
    resultadosHTML += "<p>Secuencia de Letras: " + Letras + "</p>";
    resultadosHTML += "<p>Cantidad de ciclos completos: " + ciclosCompletos + "</p>";
    resultadosHTML += "<ul>";
    
    for (const cuadrante of ['N', 'E', 'S', 'O']) {
        const porcentaje = porcentajes(Letras, cuadrante);
        resultadosHTML += "<li>Porcentaje de ocurrencia de " + cuadrante + ": " + porcentaje.toFixed(4) + "%</li>";
    }
    resultadosHTML += "</ul>";

    document.getElementById("resultados").innerHTML = resultadosHTML;
}
