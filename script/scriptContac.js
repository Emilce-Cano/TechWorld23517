function iniciarMap() {
    var coord= {lat:-34.6040521 ,lng:-58.3867377};
    var map= new google.maps.Map(document.getElementById('map'), {
        zoom: 50,
        center: coord});
        var marker = new google.maps.Marker({
            position: coord,
            map: map
          });
}

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var error= document.getElementById('error');
var email = document.getElementById('email');
var tel = document.getElementById('tel');
var consultaObs= document.getElementById('obs');
function enviarFormulario(){
    console.log('Enviando Formulario...'); 

var mensajeError =[];

if (nombre.value=== null || nombre.value ==='') {
        
    mensajeError.push('ingresa tu nombre');
    }
    
    if (apellido.value=== null || apellido.value ==='') {
        
        mensajeError.push('ingresa tu apellido');
        }
        
    if (email.value=== null || email.value ==='') {
        
        mensajeError.push('ingresa tu E-mail');
        }
        
    if (tel.value=== null || tel.value ==='') {
        
        mensajeError.push('ingresa tu numero de telefono');
        }
        
    if (consultaObs.value=== null || consultaObs.value ==='') {
        
        mensajeError.push('ingresa tu Consulta');
        }
        error.innerHTML = mensajeError.join(', ')

        
    return false;
}