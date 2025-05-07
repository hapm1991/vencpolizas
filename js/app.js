document.getElementById('calcular').addEventListener('click', function() {
    // Obtener valores de los inputs
    const horas = parseFloat(document.getElementById('horas').value);
    const complejidad = parseFloat(document.getElementById('complejidad').value);
    const urgencia = parseFloat(document.getElementById('urgencia').value);
    const tasaHora = parseFloat(document.getElementById('tasa-hora').value);
    
    // Validar entradas
    if (isNaN(horas) || isNaN(tasaHora) || horas <= 0 || tasaHora <= 0) {
        alert("Por favor, introduce valores válidos");
        return;
    }
    
    // Calcular presupuesto
    const total = horas * complejidad * urgencia * tasaHora;
    
    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Presupuesto Estimado</h2>
        <p><strong>Total:</strong> €${total.toFixed(2)}</p>
        <p><strong>Desglose:</strong></p>
        <ul>
            <li>Horas base: ${horas} horas × €${tasaHora}/h = €${(horas * tasaHora).toFixed(2)}</li>
            <li>Factor complejidad: ×${complejidad}</li>
            <li>Factor urgencia: ×${urgencia}</li>
        </ul>
    `;
    
    resultadoDiv.style.display = 'block';
});