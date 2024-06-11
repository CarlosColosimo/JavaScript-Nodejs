function funcion() {
    const semilla = parseInt(document.getElementById("numEntrada").value);
  
    const sequence = [semilla];
    let aux = semilla;
  
    while (aux !== 1) {
      if (aux % 2 === 0) {
        aux /= 2;
      } else {
        aux = aux * 3 + 1;
      }
      sequence.push(aux);
    }
  
    const Largo = sequence.length;
    const numMax = Math.max(...sequence);
  
    const Salida = document.getElementById("Conclucion");
    Salida.innerHTML = `
      <p>Largo de la secuencia: ${Largo}</p>
      <p>Numero más grande: ${numMax}</p>
    `;
  }
  