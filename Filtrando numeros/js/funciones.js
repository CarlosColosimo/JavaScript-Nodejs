
function filtranum(numeros) {
    let resultado = [];
    let count = 0;
    for (let i = 0; i < numeros.length; i++) {
        const numStr = numeros[i].toString();
        if (numStr.charAt(0) === numStr.charAt(numStr.length - 1)) {
            resultado.push(numeros[i]);
            count++;
        }
    }
    return { total: count, numeros: resultado };
}

function handleFile() {
    const archivoEntrada = document.getElementById('archivoEntrada');
    const archivo = archivoEntrada.archivo[0];

    if (!archivo) {
        alert('Por favor selecciona un archivo.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const contents = event.target.result.trim().split('\n');
        const N = parseInt(contents[0]);
        const numeros = contents[1].split(' ').map(Number);
        
        const { total, numerosFiltrados } = filtranum(numeros);

        const outputDiv = document.getElementById('Salida');
        outputDiv.innerHTML = `<p>Total de números que cumplen la propiedad: ${total}</p>`;
        outputDiv.innerHTML += `<p>Números filtrados: ${numerosFiltrados.join(', ')}</p>`;
    };

    reader.readAsText(file);
}
