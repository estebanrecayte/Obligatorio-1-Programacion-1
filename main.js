// --------------------------FUNCIONAMIENTO DE SECCIONES--------------------------------

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    let seccion = secciones[i];
    seccion.style.display = "none";
  }
}

let botones = document.querySelectorAll(".btn");
for (let i = 0; i < botones.length; i++) {
  let boton = botones[i];
  boton.addEventListener("click", mostrarSeccion);
}

function mostrarSeccion() {
  let idBoton = this.getAttribute("id");
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4);
  cambiarSeccion(idSeccion);
}

function cambiarSeccion(nuevaSeccion) {
  ocultarSecciones();
  document.querySelector("#" + nuevaSeccion).style.display = "block";
}

/*
Funcionamiento de secciones: manejan la vision web de nuestro programa.
La funcion ocultarSecciones se encarga de ocultar todas las etiquetas que tengan la clase "seccion".
Se establece tambien que toda etiqueta que tenga la clase "btn" se le asige un evento de "click" para llamar
a la funcion mostrarSeccion, la cual se encarga obtener el id de la etiqueta llamada y gracias a los metodos
.charAt(3) y .substring generar el id de la seccion la cual queremos llamar.
Por ultimo la funcion cambiarSeccion(nuevaSeccion) se encarga de ocultar todas las secciones
y luego muestra la seccion que se paso como argumento.

*/

// --------------------------CLASES--------------------------------

class Censista {
  constructor(id, nombre, usuario, contrasena) {
    this.id = id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contrasena = contrasena;
  }
}

class Censado {
  constructor(
    nombre,
    apellido,
    edad,
    cedula,
    departamento,
    ocupacion,
    estado,
    idCensador
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.estado = estado;
    this.idCensador = idCensador;
  }

  asignarIdCensador(idCensador) {
    this.idCensador = idCensador;
  }
}

class Sistema {
  constructor() {
    this.censistas = [
      new Censista(0, "Esteban", "estebanrecayte", "Esteban1995"),
      new Censista(1, "Valentina", "valchufernandez", "Valen1995"),
      new Censista(2, "Juan Carlos", "juanca", "HolaJuanCarlos2023"),
    ];

    this.censados = [
      new Censado(
        "Eduardo",
        "Recayte",
        61,
        "17195349",
        "Montevideo",
        "Independiente",
        true,
        1
      ),
      new Censado(
        "Marcela",
        "Rabunal",
        57,
        "19623900",
        "Montevideo",
        "Dependiente",
        true,
        1
      ),
      new Censado(
        "Franca",
        "Recayte",
        23,
        "48580117",
        "Montevideo",
        "Dependiente",
        null,
        0
      ),
      new Censado(
        "Maria",
        "Pilerci",
        71,
        "12845995",
        "Maldonado",
        "No trabaja",
        null,
        2
      ),
      new Censado(
        "Richard",
        "Textex",
        30,
        "30642589",
        "Artigas",
        "Dependiente",
        null,
        0
      ),
      new Censado(
        "Juan",
        "Tato",
        11,
        "47517044",
        "Canelones",
        "No trabaja",
        null,
        2
      ),
      new Censado(
        "Diana",
        "Prince",
        23,
        "38571132",
        "Río Negro",
        "Dependiente",
        null,
        0
      ),
      new Censado(
        "Julia",
        "Perez",
        71,
        "19363780",
        "Maldonado",
        "No trabaja",
        true,
        2
      ),
      new Censado(
        "Oliver",
        "Atom",
        27,
        "40312883",
        "Salto",
        "Dependiente",
        true,
        0
      ),
      new Censado(
        "Roman",
        "Pierce",
        41,
        "34528802",
        "Rocha",
        "Independiente",
        null,
        2
      ),
      new Censado(
        "Dominic",
        "Toretto",
        43,
        "40492378",
        "Tacuarembó",
        "Independiente",
        true,
        0
      ),
      new Censado(
        "Brian",
        "Oconner",
        39,
        "40492378",
        "Maldonado",
        "Dependiente",
        null,
        2
      ),
      new Censado(
        "Jason",
        "Staham",
        57,
        "15575145",
        "Maldonado",
        "Dependiente",
        true,
        0
      ),
      new Censado(
        "John",
        "Cena",
        51,
        "42790102",
        "Colonia",
        "Dependiente",
        null,
        2
      ),
      new Censado(
        "Scarlet",
        "Johanson",
        23,
        "32286741",
        "Montevideo",
        "Independiente",
        true,
        0
      ),
      new Censado(
        "Nicolay",
        "Junior",
        9,
        "30465226",
        "Maldonado",
        "No trabaja",
        null,
        2
      ),
      new Censado(
        "Pedro",
        "Chiquik",
        7,
        "30465226",
        "Colonia",
        "No trabaja",
        null,
        1
      ),
      new Censado(
        "Miroslav",
        "Enpung",
        12,
        "18374883",
        "Colonia",
        "No trabaja",
        null,
        2
      ),
      new Censado(
        "Julio",
        "Baile",
        67,
        "12010332",
        "Paysandú",
        "Independiente",
        true,
        1
      ),
      new Censado(
        "Martin",
        "Chisalv",
        19,
        "10331994",
        "San José",
        "No trabaja",
        null,
        1
      ),
      new Censado(
        "Ricky",
        "Caqueush",
        17,
        "36925327",
        "Rivera",
        "No trabaja",
        true,
        1
      ),
      new Censado(
        "Erling",
        "Hinpung",
        22,
        "14200153",
        "Rocha",
        "Dependiente",
        null,
        2
      ),
      new Censado(
        "Francis",
        "Batlle",
        67,
        "12013889",
        "Soriano",
        "No trabaja",
        true,
        0
      ),
      new Censado(
        "Mathias",
        "Le Flance",
        39,
        "29844952",
        "Treinta y Tres",
        "Independiente",
        null,
        1
      ),
      new Censado(
        "Charles",
        "Leclearc",
        27,
        "28644117",
        "Flores",
        "Dependiente",
        true,
        0
      ),
      new Censado(
        "Daniel",
        "Ricciardo",
        32,
        "31098208",
        "Florida",
        "Dependiente",
        true,
        0
      ),
      new Censado(
        "Sergio",
        "Perez",
        27,
        "11921706",
        "Cerro Largo",
        "Independiente",
        true,
        0
      ),
      new Censado(
        "Lewis",
        "Hamilton",
        39,
        "10938756",
        "Artigas",
        "Independiente",
        null,
        2
      ),
      new Censado(
        "Belen",
        "Chili",
        17,
        "12906030",
        "Lavalleja",
        "No trabaja",
        null,
        1
      ),
      new Censado(
        "Milagros",
        "Lasalvia",
        22,
        "13475436",
        "Artigas",
        "Dependiente",
        null,
        1
      ),
      new Censado(
        "Jeniffer",
        "Tuteush",
        37,
        "11769289",
        "Rivera",
        "Dependiente",
        true,
        0
      ),
      new Censado(
        "Tita",
        "Richard",
        79,
        "13735800",
        "Tacuarembó",
        "No trabaja",
        null,
        2
      ),
      new Censado(
        "Julia",
        "Laqueush",
        47,
        "13461807",
        "Rivera",
        "Independiente",
        null,
        0
      ),
      new Censado(
        "Francisca",
        "Gomez",
        19,
        "15230727",
        "Paysandú",
        "No trabaja",
        null,
        2
      ),
    ];

    this.censistaActual = null;
  }

  setCensistaActual(censista) {
    this.censistaActual = censista;
  }
}

// --------------------INICIO DE SESION--------------------------------------

function iniciarSesion() {
  let usuario = document.querySelector("#txtUsuario").value;
  let contrasena = document.querySelector("#txtContrasena").value;
  /* obtenemos informacion de html, creamos una variable censistaEncontrado y la inicializamos en false
  tambien creamos una variable vacia para terminar el censista que luego lo setearemos como censistaActual.
  */

  let censistaEncontrado = false;
  let censista;

  for (let i = 0; i < sistema.censistas.length; i++) {
    censista = sistema.censistas[i];
    if (censista.usuario === usuario && censista.contrasena === contrasena) {
      censistaEncontrado = true;

      break;
    }
  }
  /* se realizar este bucle for para determinar si el censista ya existe en el listado de censistas y es posible ingresar al sistema*/

  if (censistaEncontrado) {
    sistema.setCensistaActual(
      censista
    ); /* seteamos el censista actual si censistaEncontrado=true */
    document.querySelector("#pMensajeInicioSesion").innerHTML =
      "Inicio de sesión exitoso";
    cambiarSeccion(
      "seccionCensista"
    ); /* se muestra la seccion de censista autorizado */
    document.querySelector("#txtUsuario").value =
      ""; /* colocamos informacion vacia luego del ingreso*/
    document.querySelector("#txtContrasena").value = "";
    document.querySelector(
      "#hSaludo"
    ).innerHTML = `Bienvenido ${censista.nombre}`;
  } else {
    document.querySelector("#pMensajeInicioSesion").innerHTML =
      "Credenciales incorrectas";
  }
}

// --------------------VERIFICAR QUE CADENA NO ESTE VACIA--------------------------------------

function esCadenaVacia(cadena) {
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      return false;
    }
  }
  return true;
}
/* funcion que recorre el parametro pasado y evalua el contenido de posicion que sea diferente a espacio en blanco */

// --------------------REGISTRO DE CENSISTAS--------------------------------------

function registrarCensista() {
  let nombre = document.querySelector("#txtNombreR").value;
  let usuario = document.querySelector("#txtUsuarioR").value;
  let contrasena = document.querySelector("#txtContrasenaR").value;
  /*se obtienen datos desde html*/
  let estadoCensita = false;
  /*se inicia el estado del censista en false*/
  let contieneMinuscula = false;
  let contieneMayuscula = false;
  let contieneNumero = false;
  /*variables para determinar si esta ok contraseña*/

  // --------------------REGISTRO DE CENSISTAS--------------------------------------

  if (
    esCadenaVacia(nombre) ||
    esCadenaVacia(usuario) ||
    esCadenaVacia(contrasena)
  ) {
    document.querySelector("#pMensajeRegistro").innerHTML =
      "Por favor, complete todos los campos.";
    return;
  }
  /* se llama funcion para evaluar que los campos esten completos*/

  for (let i = 0; i < contrasena.length; i++) {
    let caracterCodigo = contrasena.charCodeAt(i);

    if (caracterCodigo >= 97 && caracterCodigo <= 122) {
      // Letras minusculas a-z
      contieneMinuscula = true;
    } else if (caracterCodigo >= 65 && caracterCodigo <= 90) {
      // Letras mayusculas A-Z
      contieneMayuscula = true;
    } else if (caracterCodigo >= 48 && caracterCodigo <= 57) {
      // Numeros del 0 al 9
      contieneNumero = true;
    }

    if (contieneMinuscula && contieneMayuscula && contieneNumero) {
      break;
    }
  }
  /* bucle for para determinar mediante tabla ASCII que se cumpla con la condicion de miniscula,mayuscula y numero 
  se detiene una vez que ambas variables son true*/

  if (
    contrasena.length < 5 ||
    !contieneMinuscula ||
    !contieneMayuscula ||
    !contieneNumero
  ) {
    document.querySelector("#pMensajeRegistro").innerHTML =
      "Verifique que la contraseña tenga un mínimo de 5 caracteres, incluyendo al menos una mayúscula, una minúscula y un número";
  } else {
    estadoCensita = true;
  }
  /* si la contraseña es menor que 5 o las otras variables estan en false, se imprime mensaje para que usuario verifique los datos que
  ingreso.
  si ocurre lo contrario se pasa la variable de estadoCensista a true
  */

  if (estadoCensita) {
    let nuevoCensista = new Censista(
      sistema.censistas.length + 1,
      nombre,
      usuario,
      contrasena
    );
    sistema.censistas.push(nuevoCensista);
    document.querySelector("#pMensajeRegistro").innerHTML = "Registro exitoso";
    document.querySelector("#txtNombreR").value = "";
    document.querySelector("#txtUsuarioR").value = "";
    document.querySelector("#txtContrasenaR").value = "";
  }
}
/* se crea un objeto censista con los datos y se pushea al array censistas que esta en sistema */

// --------------------COMBO DEPARTAMENTOS--------------------------------------

function cargarDepartamentos() {
  let departamentos = [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
  ];

  let departamentoSelect = document.querySelector("#slcDepartamento");
  let departamentoSelectI = document.querySelector("#slcDepartamentoI");
  let departamentoSelectCombo = document.querySelector(
    "#seleccionarDepartamentoCombo"
  );

  let opciones = "";

  for (let i = 0; i < departamentos.length; i++) {
    let departamento = departamentos[i];
    opciones += `<option value="${departamento}">${departamento}</option>`;
  }
  opciones =
    `<option value="" disabled selected>Seleccione...</option>` + opciones;

  departamentoSelect.innerHTML = opciones;
  departamentoSelectI.innerHTML = opciones;
  departamentoSelectCombo.innerHTML = opciones;
}
/* funcion para cargar departamentos y mostrarlos en el html, basicamente a raiz de un array que contiene los departamentos de Uruguay,
se realiza un bucle for el cual va pasando por cada dato del array se le asigna la variable departamento y se va agregando dentro del select
como una etiqueta option.

*/

// --------------------DATOS PARA CREAR UNA PERSONA CENSADA--------------------------------------

function datosCensado() {
  let nombreCensado = document.querySelector("#txtNombreC").value;
  let apellidoCensado = document.querySelector("#txtApellidoC").value;
  let edadCensado = Number(document.querySelector("#txtEdadC").value);
  let cedulaCensado = document.querySelector("#txtCedulaC").value;
  let departamentoCensado = document.querySelector("#slcDepartamento").value;
  let ocupacionCensado = document.querySelector("#slcOcupacion").value;
  /* se obtienen datos del html */
  let estadoNombreApellidoEdad = false;
  let estadoCi = false;
  /*variables para validar datos */
  if (
    esCadenaVacia(nombreCensado) ||
    esCadenaVacia(apellidoCensado) ||
    isNaN(edadCensado) ||
    edadCensado < 0 ||
    edadCensado > 130
  ) {
    document.querySelector("#pMensajeCensado").innerHTML =
      "Verifique los campos Nombre, Apellido y Edad";
    return;
  } else {
    estadoNombreApellidoEdad = true;
  }
  // verificar quen nombre apellido y edad esten ok con lo solicitado. se cambiar estado de variable

  if (esCadenaVacia(cedulaCensado)) {
    document.querySelector("#pMensajeCensado").innerHTML =
      "Verifique cedula ingresada";
    return;
  }
  cedulaCensado = eliminarCaracter(cedulaCensado);

  let mensajeValidacionCedula = verificadorCi(cedulaCensado);
  if (mensajeValidacionCedula !== "Ci Valida") {
    document.querySelector("#pMensajeCensado").innerHTML =
      "Verifique numero de cedula";
    return;
  } else {
    estadoCi = true;
  }
  // verificar que cedula cumpla con lo solicitado

  if (estadoNombreApellidoEdad && estadoCi) {
    let cedulaExistente = false;
    for (let i = 0; i < sistema.censados.length; i++) {
      if (sistema.censados[i].cedula === cedulaCensado) {
        cedulaExistente = true;
        break;
      }
    }
    /*
    verificar que la cedula que fue ingresada no exista en el array de personas censadas
  */

    if (cedulaExistente) {
      document.querySelector("#pMensajeCensado").innerHTML =
        "El número de cédula ya está registrado.";
      return;
    }
    // si cedula existe se avisa que ya fue registrada esa cedula

    let personaCensada = new Censado(
      nombreCensado,
      apellidoCensado,
      edadCensado,
      cedulaCensado,
      departamentoCensado,
      ocupacionCensado
    );
    sistema.censados.push(personaCensada);
    personaCensada.estado = true;
    let idCensita = sistema.censistaActual.id;
    personaCensada.idCensador = idCensita;
    document.querySelector(
      "#pMensajeCensado"
    ).innerHTML = `La persona ${nombreCensado} fue censada correctamente, censada por usuario: ${sistema.censistaActual.nombre} id: ${idCensita}`;
  }
}
/* 
    luego se prosigue a crear un objeto Censado con  los datos obtenidos, se pushea al array
    se cambia el estado del objeto a true para que quede validado y tambien se le asigna el id del censador.
    Por ultimo se imprime un mensaje informando el procedimiento
*/

// --------------------VERIFICADOR PRE CENSO--------------------------------------

function chequearCenso() {
  let ciPersonaBuscada = document.querySelector("#txtCiChequear").value; // se obtiene datos de html
  verificadorCi(ciPersonaBuscada);
  ciPersonaBuscada = eliminarCaracter(ciPersonaBuscada);
  // se verificar documento

  for (let i = 0; i < sistema.censados.length; i++) {
    unCensado = sistema.censados[i];
    if (unCensado.cedula === ciPersonaBuscada) {
      document.querySelector("#pChequeoCi").innerHTML = `
          <br>
          Nombre: ${unCensado.nombre}<br><br>
          Apellido: ${unCensado.apellido}<br><br>
          Edad: ${unCensado.edad}<br><br>
          Cedula: ${unCensado.cedula}<br><br>
          Departamento: ${unCensado.departamento}<br><br>
          Ocupacion: ${unCensado.ocupacion}<br><br>
          <br><br><br><br>
          En caso de estar ok los datos favor clickear boton <br> <br>
          <input type="button" id="btnOkDatos" value="Censar">
        `;
      break; // Salir del bucle luego de encontrar coinicidencia
    }
  }
  // se recorre array de censados para luego encontrar coincidencia en caso de que si, aparecen datos de esa persona
  // y un boton para accionar el censo

  document.querySelector("#btnOkDatos").addEventListener("click", okCenso); //boton para censar persona
}

function okCenso() {
  unCensado.estado = true;
  unCensado.idCensador = sistema.censistaActual.id;
  document.querySelector(
    "#pChequeoCi"
  ).innerHTML = `La persona ${unCensado.nombre} ha sido censada exitosamente por el usuario ${sistema.censistaActual.nombre}`;
}
// esta funcion lo que hace es pasar el estado del censado a true y le adjudica el numero de id del censista actual. por ultimo imprime un mensaje.

// --------------------CENSOS ASIGNADOS Y CAMBIO DE CENSISTA--------------------------------------

function cargarCensosAsignados() {
  let censosAsignados = document.querySelector("#slcCensosAsignados");
  let opcionesCensados = "";
  let censistasDisponibles = document.querySelector("#slcCensistas");
  let opcionesCensistas = "";
  /*  dejo en variables los queryselectors de cada slc 
  y asigno las opciones vacias
  */

  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensado = sistema.censados[i];
    if (
      unCensado.idCensador === sistema.censistaActual.id &&
      (!unCensado.estado || unCensado.estado === null)
    ) {
      opcionesCensados += `<option value="${unCensado.nombre}">${unCensado.nombre}</option>`;
    }
  }
  opcionesCensados =
    `<option value="" disabled selected>Seleccione...</option>` +
    opcionesCensados;

  censosAsignados.innerHTML = opcionesCensados;
  /*
    recorro el array de censados, genero una variable unCensado para guardar cada censado y en caso que el idCensador sea el mismo
    que el id del censistaactual y el estado es true o null. Se agrega ese Censado a las opcionesCesados.
    Personas que fueron asigandas a ese ID y aun no han sido validadas.

  */

  for (let i = 0; i < sistema.censistas.length; i++) {
    let unCensista = sistema.censistas[i];
    if (unCensista.nombre != sistema.censistaActual.nombre) {
      opcionesCensistas += `<option value="${unCensista.nombre}">${unCensista.nombre}</option>`;
    }
  }

  opcionesCensistas =
    `<option value="" disabled selected>Seleccione...</option>` +
    opcionesCensistas;

  censistasDisponibles.innerHTML = opcionesCensistas;

  /*
      similar al anterior bucle, se recorren los censistas y en este caso se muestran los censistas disponibles menos el censista actual
  */
}

function transferirCensista() {
  let censadoSeleccionado = document.querySelector("#slcCensosAsignados").value;
  let censistaSeleccionado = document.querySelector("#slcCensistas").value;
  // se obtienen datos de lo que el usuario haya seleccionado previamente
  let censado;
  let censista;
  // se crean estas 2 variables para determinar censado y censista

  for (let i = 0; i < sistema.censados.length; i++) {
    if (sistema.censados[i].nombre === censadoSeleccionado) {
      censado = sistema.censados[i];
      break;
    }
  }
  // se recorre el array censados para encontrar con el nombre seleccionado y el nombre del objeto. Se asigna ese objeto a la variable censado.

  for (let i = 0; i < sistema.censistas.length; i++) {
    if (sistema.censistas[i].nombre === censistaSeleccionado) {
      censista = sistema.censistas[i];
      break;
    }
  }

  // como el anterior bucle se recorren los censistas y se asigna el que tiene el mismo nombre que el seleccionado. se asgina a variable censista.

  if (censado && censista) {
    censado.asignarIdCensador(censista.id); // se utiliza metodo de la clase Censado
    document.querySelector("#pMensajeTransferir").innerHTML =
      "Censado transferido correctamente.";
  } else {
    document.querySelector("#pMensajeTransferir").innerHTML =
      "Error al transferir el censado.";
  }

  /*
    en caso de que variables esten asignadas, al objeto censado, se le asigna el id del nuevo censista seleccionado
  */
}

// --------------------TABLA INFORMACION ESTADISTICA CENSISTA--------------------------------------

function generarTablaCensista() {
  document.querySelector("#contenedorDeTabla").innerHTML = ""; // se inicializa tabla vacia
  let totalPersonasValidadas = 0;
  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensoValidado = sistema.censados[i];
    if (unCensoValidado.estado) {
      totalPersonasValidadas++;
    }
  }
  // conocer el total de personas validadas, dependiendo si el estado es true

  let totalPersonas = sistema.censados.length;
  let contadorDePendientes = 0;
  let porcentajePendientes = 0;
  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensado = sistema.censados[i];
    if (unCensado.estado === false || unCensado.estado === null) {
      contadorDePendientes++;
    }
  }
  porcentajePendientes = (
    (contadorDePendientes / totalPersonas) *
    100
  ).toFixed(); //se divide contadorDePendientes sobre el totalPersonas y se multiplica con fixed le saco las comas
  // obtener valores de censos pendientes aquellos que no tienen estado en true

  document.querySelector("#contenedorDeTabla").innerHTML = `
    <table border="1">
    <thead>
    <th>Total Personas</th>
    <th>Pendientes de validar</th>
    </thead>
    <tbody>
    <tr>
        <td>${totalPersonasValidadas}</td>
        <td>${porcentajePendientes}%</td>
    </tr>
    </tbody>
    </table>
   `;
  // crear tabla dentro del div creado en la seccion. fin de primera tabla

  // crear siguiente tabla que muestre el departamento y total de personas validadas
  document.querySelector("#contenedorDeTablaPorDepartamento").innerHTML = "";

  let tablaHTML = `
    <table border="1">
      <thead>
        <tr>
          <th>Departamento</th>
          <th>Total personas</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < departamentos.length; i++) {
    let departamento = departamentos[i];
    let totalPersonas = contarPersonasPorDepartamento(departamento);

    tablaHTML += `
      <tr>
        <td>${departamento}</td>
        <td>${totalPersonas}</td>
      </tr>
    `;
  }
  /*
    bucle for para recorer departamentos y los guardo en varaible departamento.
    luego el total de personas le paso la funcion contarPersonasPorDepartamento con el departamento como parametro y me cuenta la cantidad de personas de ese departamento validadas.
  */

  tablaHTML += `
      </tbody>
    </table>
  `;

  document.querySelector("#contenedorDeTablaPorDepartamento").innerHTML =
    tablaHTML;
  // se termina la tabla y se llama la variable tablaHTML que tiene todos los valores cargados
}
//-------------------------------INFORMACION MAYORES Y MENORES POR DEPARTAMENTO-------------------------------------------------------------------

function porcentajesMayoresMenores() {
  let departamentoSeleccionado = document.querySelector(
    "#seleccionarDepartamentoCombo"
  ).value; // saco valor del departamento seleccionado

  let listaPersonasDepartamentoSeleccionado = []; // array para guardar personas del depto seleccionado

  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensadoPorDepto = sistema.censados[i];
    if (
      unCensadoPorDepto.departamento === departamentoSeleccionado &&
      unCensadoPorDepto.estado
    ) {
      listaPersonasDepartamentoSeleccionado.push(unCensadoPorDepto);
    }
  }
  // recorro el array de censados, luego evaluo si el censado es del departamento seleccionado y si su estado es true. Luego de eso lo pusheo al array de listaPersonasDepartamentoSeleccionado

  let totalPersonasDepto = listaPersonasDepartamentoSeleccionado.length; // con lenght consigo el total de personas. cada objeto es una persona.
  let personasMenores = 0;
  let personasMayores = 0;
  for (let i = 0; i < listaPersonasDepartamentoSeleccionado.length; i++) {
    let unaPersona = listaPersonasDepartamentoSeleccionado[i];
    if (unaPersona.edad <= 18) {
      personasMenores++;
    } else {
      personasMayores++;
    }
  }
  // luego recorro la listaPersonasDepartamentoSeleccionado y evaluo si es menor a 18. En ese caso sumo 1 a personasMenores si no sumo 1 a personasMayores.

  let porcentajeMenoresEdad = (personasMenores / totalPersonasDepto) * 100;
  let porcentajeMayoresEdad = 100 - porcentajeMenoresEdad;
  document.querySelector("#pMensajePorDepto").innerHTML = `
  
  Departamento: ${departamentoSeleccionado} <br>
  Porcentaje menores: ${porcentajeMenoresEdad} % <br>
  Porcentaje mayores: ${porcentajeMayoresEdad} %
  
  `;
  // realizo las cuentas e imprimo mensaje
}
// --------------------FUNCION CONTADOR DE PERSONAS QUE RECIBE DEPTO COMO PARAMETRO--------------------------------------

function contarPersonasPorDepartamento(departamento) {
  let contador = 0;

  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensado = sistema.censados[i];
    if (unCensado.departamento === departamento && unCensado.estado) {
      contador++;
    }
  }
  return contador;
}
/*
  funcion que recibe como parametro un deparamento. la cual inicializa un contador en 0. Luego recorre el arraya de censados, se queda con los objetos censados y luego evalua
  si el departamento del censado es igual al departamento del parametro y si el estado es true.
  en caso positivo suma 1 al contador.
  retorna el numero del contador.

*/

// --------------------INVITADO VERIFICACION DE PRE CENSO--------------------------------------

function verificarCiInvitado() {
  let ciInvitado = document.querySelector("#txtCiInvitado").value; // tomamos valor del html
  ciInvitado = eliminarCaracter(ciInvitado); // verificamos que haya pasado numeros
  let invitadoEncontrado = false; // iniciamos variable en false
  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensadoInv = sistema.censados[i];
    if (unCensadoInv.cedula === ciInvitado) {
      document.querySelector("#txtNombreCI").value = unCensadoInv.nombre;
      document.querySelector("#txtApellidoCI").value = unCensadoInv.apellido;
      document.querySelector("#txtEdadCI").value = unCensadoInv.edad;
      document.querySelector("#txtCedulaCI").value = unCensadoInv.cedula;
      document.querySelector("#slcDepartamentoI").value =
        unCensadoInv.departamento;
      document.querySelector("#slcOcupacionI").value = unCensadoInv.ocupacion;
      invitadoEncontrado = true;
      break;
    }
  }
  /*
    recorremos el array de censados para determinar si esa cedula esta dentro del array, en caso que se de esta condicion se pasan a completar los datos en el html con los datos
    del objeto de la coincidencia
    la variable invitadoEncontrado pasa a true
  */
  if (!invitadoEncontrado) {
    document.querySelector(
      "#pMensajeInvitado"
    ).innerHTML = `Usted no esta registrado`;
  }
  // en caso negativo se informa que la persona no ha sido registrada previamente
}

// --------------------INVITADO CARGAR DATOS CENSO--------------------------------------

function cargarDatosCensoInvitado() {
  let nombreInvitado = document.querySelector("#txtNombreCI").value;
  let apellidoInvitado = document.querySelector("#txtApellidoCI").value;
  let edadInvitado = Number(document.querySelector("#txtEdadCI").value);
  let cedulaInvitado = document.querySelector("#txtCedulaCI").value;
  let departamentoInvitado = document.querySelector("#slcDepartamentoI").value;
  let ocupacionInvitado = document.querySelector("#slcOcupacionI").value;
  // obtenemos informacion del html
  let numeroIdRandom = Number(
    Math.floor(Math.random() * sistema.censistas.length)
  );
  // generar un numero random teniendo en cuenta el largo del array de censistas

  cedulaInvitado = eliminarCaracter(cedulaInvitado); // se verifica ci colocada

  for (let i = 0; i < sistema.censados.length; i++) {
    let unCensadoI = sistema.censados[i];
    if (unCensadoI.cedula === cedulaInvitado) {
      if (unCensadoI.estado != null) {
        document.querySelector("#pMensajeCensadoInvitado").innerHTML = `
        Usted ${unCensadoI.nombre} fue censado correctamente por 
        ${sistema.censistas[unCensadoI.idCensador].nombre} hace unos dias`;
      } else {
        unCensadoI.idCensador = numeroIdRandom;
        document.querySelector(
          "#pMensajeCensadoInvitado"
        ).innerHTML = `Usted ${unCensadoI.nombre} fue censada correctamente, 
      sera visitado por ${sistema.censistas[numeroIdRandom].nombre} id: ${numeroIdRandom}`;
      }
      return;
    }
  }
  /*
    en este bucle lo que logro es verificar en primer lugar si la cedula del invitado ya esta dentro del
    array de censandos. Luego de eso verifico que el censado ya no tenga el censo aprobado(en true), en ese caso
    le informo que ya fue censado y le indico el usuario que lo censo.
    En caso que la cedula ya este en nuestro sistema no queda mas nada por informarle al usuario por lo que termina
    con un return.
    
  */

  if (
    esCadenaVacia(nombreInvitado) ||
    esCadenaVacia(apellidoInvitado) ||
    isNaN(edadInvitado) ||
    edadInvitado < 0 ||
    edadInvitado > 130
  ) {
    document.querySelector("#pMensajeCensadoInvitado").innerHTML =
      "Verificar los campos Nombre, Apellido y Edad.";
    return;
  } else {
    estadoNombreApellidoEdad = true;
  }
  // verificacion de datos

  if (esCadenaVacia(cedulaInvitado)) {
    document.querySelector("#pMensajeCensadoInvitado").innerHTML =
      "El número de cédula está en blanco.";
    return;
  }
  // verificacion de datos

  let mensajeValidacionCedula = verificadorCi(cedulaInvitado);
  if (mensajeValidacionCedula !== "Ci Valida") {
    document.querySelector("#pMensajeCensadoInvitado").innerHTML =
      "Verificar número de cédula inválido.";
    return;
  } else {
    estadoCi = true;
  }
  //verificacion de cedula

  if (estadoNombreApellidoEdad && estadoCi) {
    let personaCensadaInvitado = new Censado(
      nombreInvitado,
      apellidoInvitado,
      edadInvitado,
      cedulaInvitado,
      departamentoInvitado,
      ocupacionInvitado,
      null,
      numeroIdRandom
    );
    sistema.censados.push(personaCensadaInvitado);

    document.querySelector(
      "#pMensajeCensadoInvitado"
    ).innerHTML = `Usted ${nombreInvitado} fue censada correctamente, sera visitado por ${sistema.censistas[numeroIdRandom].nombre} id: ${numeroIdRandom}`;
  }
}
// si cumple con las condiciones se pushe persona al array de censados

// --------------------INVITADO BORRAR DATOS CENSO--------------------------------------

function borrarDatosCensoInvitado() {
  let nombreInvitado = document.querySelector("#txtNombreCI").value;
  let apellidoInvitado = document.querySelector("#txtApellidoCI").value;
  let cedulaInvitado = document.querySelector("#txtCedulaCI").value;
  // obtengo datos del html
  cedulaInvitado = eliminarCaracter(cedulaInvitado);
  let personaEncontrada; // creo una variable para la persona que deseo encontrar
  for (let i = 0; i < sistema.censados.length; i++) {
    let unaPersonaEliminar = sistema.censados[i];
    if (
      unaPersonaEliminar.cedula === cedulaInvitado &&
      unaPersonaEliminar.estado != true
    ) {
      personaEncontrada = unaPersonaEliminar; // la encuentro y la asigno
      break;
    }
  }

  if (personaEncontrada) {
    let indiceEliminar = sistema.censados.indexOf(personaEncontrada); // con el metodo indexOf encuentro la ubicacion
    // de la persona en el array
    sistema.censados.splice(indiceEliminar, 1); // con el metodo splice le paso como parametro el indice encontrado
    // y 1 que es la cantidad de elementos quie quiero borrar
    document.querySelector(
      "#pMensajeCensadoInvitado"
    ).innerHTML = `Los datos de ${nombreInvitado} ${apellidoInvitado} han sido borrados.`;
  } else {
    document.querySelector(
      "#pMensajeCensadoInvitado"
    ).innerHTML = `No se encontraron datos para borrar o su censo ya fue validado`;
  }
  // por ultimo los mensajes que se imprimen en la pantalla
}

// --------------------REPORTE ESTADISTICO INVITADO--------------------------------------

function tablaReporteEstadistico() {
  document.querySelector("#contenedorInvitadoReporte").innerHTML = `
  <table border="1">
      <thead>
        <tr>
          <th>Departamento</th>
          <th>Estudian</th>
          <th>No trabajan</th>
          <th>Dependientes o independientes</th>
          <th>Porcentaje del total de censados</th>
        </tr>
      </thead>
      <tbody>
  `;
  // se crea head de tabla

  let totalCensados = sistema.censados.length; // total de personas censadas

  for (let i = 0; i < departamentos.length; i++) {
    let departamento = departamentos[i]; // variable para obtener cada departamento
    let estudiantes = 0;
    let noTrabaja = 0;
    let dependientesOIndependientes = 0;

    for (let j = 0; j < sistema.censados.length; j++) {
      let unCensadoD = sistema.censados[j]; // bucle for para encontrar cada censado y poder evalular con el departamento que vaya tocando en el otro for

      if (unCensadoD.departamento === departamento) {
        if (unCensadoD.ocupacion === "Estudiante") {
          estudiantes++;
        } else if (unCensadoD.ocupacion === "No trabaja") {
          noTrabaja++;
        } else if (
          unCensadoD.ocupacion === "Dependiente" ||
          unCensadoD.ocupacion === "Independiente"
        ) {
          dependientesOIndependientes++;
        }
      }
    }
    // a medida que se cumplen las condiciones se incrementa en uno las respectivas variables

    let porcentajeCensados =
      ((estudiantes + noTrabaja + dependientesOIndependientes) /
        totalCensados) *
      100;

    porcentajeCensados = porcentajeCensados.toFixed(); // se fixea el resultado para que no se vean decimales
    document.querySelector(
      "#contenedorInvitadoReporte table tbody" // busco tambien un table y un tbody dentro de ese contenedor para agregar informacion
    ).innerHTML += `
      <tr>
        <td>${departamento}</td>
        <td>${estudiantes}</td>
        <td>${noTrabaja}</td>
        <td>${dependientesOIndependientes}</td>
        <td>${porcentajeCensados}%</td>
      </tr>
    `;
  }
  // se imprimen los datos de cada deparamento y los datos recabados

  document.querySelector("#contenedorInvitadoReporte").innerHTML += `
  </tbody>
  </table>`;
  // se cierra tabla
}

// --------------------VERIFICADOR DE CEDULA--------------------------------------

function verificadorCi(ci) {
  ci = eliminarCaracter(ci);
  let mensaje = "";
  if (ci.length === 7) {
    ci = "0" + ci;
  }
  let digitoVerificar = ci.charAt(ci.length - 1);
  let multiplos = "2987634";
  let resultado = 0;

  for (let i = 0; i < ci.length - 1; i++) {
    resultado += Number(ci.charAt(i)) * Number(multiplos.charAt(i));
  }
  let digitoVerificador = (10 - (resultado % 10)) % 10;
  if (Number(digitoVerificar) === digitoVerificador) {
    mensaje = "Ci Valida";
  } else {
    mensaje = "Ci Invalida";
  }
  return mensaje;
}
// funcion realizada para entrega de practico. la cual imprime un mensaje de valida o invalida siguiendo las condiciones
// necesarias para que la misma cumpla

// --------------------ELIMINAR CARACTERES--------------------------------------

function eliminarCaracter(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let cadenaNumero = texto.charCodeAt(i);
    if (cadenaNumero >= 48 && cadenaNumero <= 57) {
      resultado += texto[i];
    }
  }
  return resultado;
}

// funcion que en esta proyecto se utilizo para determinar que al ingresar la cedula el sistema se quede unicamente con los numeros que ingreso el usuario

// --------------------VARIABLES GLOBALES Y BOTONES--------------------------------------

let sistema = new Sistema(); // inicio de la clase sistema
cambiarSeccion("seccionInicio"); // seteamos la seccion de inicio que sea la primera que aparece
cargarDepartamentos();
let departamentos = [
  "Artigas",
  "Canelones",
  "Cerro Largo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandú",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembó",
  "Treinta y Tres",
]; // array de departamentos
document.querySelector("#btnIngresar").addEventListener("click", iniciarSesion);
document
  .querySelector("#btnChequearCi")
  .addEventListener("click", chequearCenso);
document
  .querySelector("#btnCargarDatosCenso")
  .addEventListener("click", datosCensado);
document
  .querySelector("#btnRegistrarse")
  .addEventListener("click", registrarCensista);
let unCensado;
document
  .querySelector("#btnCargarDatosCensosAsignados")
  .addEventListener("click", cargarCensosAsignados);
document
  .querySelector("#btnTransferirCenso")
  .addEventListener("click", transferirCensista);
document
  .querySelector("#btnSeccionInformacion")
  .addEventListener("click", generarTablaCensista);
document
  .querySelector("#btnVerificarCiInvitado")
  .addEventListener("click", verificarCiInvitado);
document
  .querySelector("#btnCargarDatosCensoInvitado")
  .addEventListener("click", cargarDatosCensoInvitado);
document
  .querySelector("#btnBorrarDatosCensoInvitado")
  .addEventListener("click", borrarDatosCensoInvitado);
document
  .querySelector("#btnSeccionReporteEstadistico")
  .addEventListener("click", tablaReporteEstadistico);
document
  .querySelector("#btnSeleccionarDepartamento")
  .addEventListener("click", porcentajesMayoresMenores);
