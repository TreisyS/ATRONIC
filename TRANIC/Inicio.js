const nuevaTransaccionForm = document.getElementById('nueva-transaccion');
const listaTransacciones = document.getElementById('lista-transacciones');

nuevaTransaccionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fecha = document.getElementById('fecha').value;
  const tipo = document.getElementById('tipo').value;
  const descripcion = document.getElementById('descripcion').value;
  const cantidad = parseFloat(document.getElementById('cantidad').value);

  const nuevaFila = listaTransacciones.tBodies[0].insertRow();

  
  const celdaFecha = nuevaFila.insertCell();
  const celdaTipo = nuevaFila.insertCell();
  const celdaDescripcion = nuevaFila.insertCell();
  const celdaCantidad = nuevaFila.insertCell();


  celdaFecha.textContent = fecha;
  celdaTipo.textContent = tipo;
  celdaDescripcion.textContent = descripcion;
  celdaCantidad.textContent = cantidad;

 
  nuevaTransaccionForm.reset();
});
