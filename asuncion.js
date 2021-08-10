//! DECLARACION DE VARIABLES PARA EL DOM
const tableContentMaterial = document.querySelector("#materialTable");
const tableContentTicket = document.querySelector("#ticketTable");
const tableContentPie = document.querySelector("#eventosTable");
const sumaTotalPie = document.querySelector("#sumaPie");
const sfcMetraje = document.querySelector("#sfcMetrajeTable");
const faseTableDetail = document.querySelector("#faseTable");
const slaTableDetail = document.querySelector("#slaTable");
const promedioTableCR = document.querySelector("#promedioTable");

//!DECLARACION DE VARIABLES PARA JAVASCRIPT

//? fechas de los eventos que existen
const fechasDeTickets = [];

//? detalle de eventos por dia

const fechaDetailTicket = [];

//? detalle de promedios de SFC 

const detallePromedioSFCCambio = [];
const detallePromedioSFCReparacion = [];
//! Fechas del mes
const mesActual = [
    "01/05/2021",
    "02/05/2021",
    "03/05/2021",
    "04/05/2021",
    "05/05/2021"
];
//     "06/05/2021",
//     "07/05/2021",
//     "08/05/2021",
//     "09/05/2021",
//     "10/05/2021",
//     "11/05/2021",
//     "12/05/2021",
//     "13/05/2021",
//     "14/05/2021",
//     "15/05/2021",
//     "16/05/2021",
//     "17/05/2021",
//     "18/05/2021",
//     "19/05/2021",
//     "20/05/2021",
//     "21/05/2021",
//     "22/05/2021",
//     "23/05/2021",
//     "24/05/2021",
//     "25/05/2021",
//     "26/05/2021",
//     "27/05/2021",
//     "28/05/2021",
//     "29/05/2021",
//     "30/05/2021",
//     "31/05/2021"
// ];


//! Material que es utilizado
const material = [{
        id: "cinta",
        stock: 0,
        utilizado: 0,
        nombre: "Banda de Acero",
        medida: "Mts"
    },
    {
        id: "hebilla",
        stock: 0,
        utilizado: 0,
        nombre: "Hebilla para Cinta de Acero 3/4",
        medida: "Uni"
    },
    {
        id: "termo",
        stock: 0,
        utilizado: 0,
        nombre: "Termo contraíble para fusión de FO",
        medida: "Uni"
    },
    {
        id: "sfc",
        stock: 0,
        utilizado: 0,
        nombre: "Cable SFC ",
        medida: "Mts"
    },
    {
        id: "retencion",
        stock: 0,
        utilizado: 0,
        nombre: "Conjunto Herraje Retención single para cable",
        medida: "Uni"
    },
    {
        id: "cajaEmpalme",
        stock: 0,
        utilizado: 0,
        nombre: "Caja de Empalme",
        medida: "Uni"
    },
    {
        id: "cajaFDT",
        stock: 0,
        utilizado: 0,
        nombre: "Caja FDT",
        medida: "Uni"
    },
    {
        id: "cajaNap",
        stock: 0,
        utilizado: 0,
        nombre: "Caja Nap",
        medida: "Uni"
    },
    {
        id: "baseOjal",
        stock: 0,
        utilizado: 0,
        nombre: "Soporte con base Ojal",
        medida: "Uni"
    },
    {
        id: "preformado",
        stock: 0,
        utilizado: 0,
        nombre: "Conjunto de Anclaje (Preformado y Camisa)",
        medida: "Uni"
    },
    {
        id: "camisa",
        stock: 0,
        utilizado: 0,
        nombre: "Camisa",
        medida: "Uni"
    },
    {
        id: "fo24",
        stock: 0,
        utilizado: 0,
        nombre: "Fibra Óptica ADSS 24 Hilos",
        medida: "Uni"
    },
    {
        id: "fo48",
        stock: 0,
        utilizado: 0,
        nombre: "Fibra Óptica ADSS 48 Hilos",
        medida: "Uni"
    },
    {
        id: "fo144",
        stock: 0,
        utilizado: 0,
        nombre: "Fibra Óptica ADSS 144 Hilos",
        medida: "Uni"
    },
    {
        id: "trebol",
        stock: 0,
        utilizado: 0,
        nombre: "Herraje Trebol",
        medida: "Uni"
    },
    {
        id: "dielectrico",
        stock: 0,
        utilizado: 0,
        nombre: "Soporte Dieléctrico PLP",
        medida: "Uni"
    },
    {
        id: "splitter",
        stock: 0,
        utilizado: 0,
        nombre: "Splitter",
        medida: "Uni"
    },
    {
        id: "hb144",
        stock: 0,
        utilizado: 0,
        nombre: "Caja Hub Box 144",
        medida: "Uni"
    },
    {
        id: "cableDrop",
        stock: 0,
        utilizado: 0,
        nombre: "Cable Drop",
        medida: "Mts"
    },
    {
        id: "pijtail",
        stock: 0,
        utilizado: 0,
        nombre: "Pijtail",
        medida: "Uni"
    },
    {
        id: "baseBulon",
        stock: 0,
        utilizado: 0,
        nombre: "Base Bulón",
        medida: "Uni"
    },
    {
        id: "cruceta",
        stock: 0,
        utilizado: 0,
        nombre: "Cruceta",
        medida: "Uni"
    }
];

const materialDynamic = [];

//? Array para determinar la cantidad de SFC

const sfcArrayInstalado = [];
const sfcArrayMedidaReal = [];
const sfcArrayMedidaRealUltimate = [];

//? variable para fases

const faseConteo = {
    fase1: 0,
    fase2: 0
};

const alineacionCentro = "centreado";

//! Detalle de casos para el Pie

const eventoPie = [{
        indice: 1,
        dato: 0,
        color: "#006400",
        descripcion: "Cambio de Columna"
    },
    {
        indice: 2,
        dato: 0,
        color: "#0000FF",
        descripcion: "Empalme Atenuado"
    },
    {
        indice: 3,
        dato: 0,
        color: "#000000",
        descripcion: "Falla por Deterioro"
    },
    {
        indice: 4,
        dato: 0,
        color: "#A9A9A9",
        descripcion: "Vehículo de Gran Porte"
    },
    {
        indice: 5,
        dato: 0,
        color: "#D2691E",
        descripcion: "Pelo Roto/Conector Roto"
    },
    {
        indice: 6,
        dato: 0,
        color: "#6495ED",
        descripcion: "Suciedad/Mala Conexión"
    },
    {
        indice: 7,
        dato: 0,
        color: "#DC143C",
        descripcion: "Posible Sabotaje"
    },
    {
        indice: 8,
        dato: 0,
        color: "#8B008B",
        descripcion: "Quemazón"
    },
    {
        indice: 9,
        dato: 0,
        color: "#FFFF00",
        descripcion: "Corte de FO 144 Hilos"
    },
    {
        indice: 10,
        dato: 0,
        color: "#00008B",
        descripcion: "Corte de FO 48 Hilos"
    },
    {
        indice: 11,
        dato: 0,
        color: "#B22222",
        descripcion: "Corte de FO 24 Hilos"
    },
    {
        indice: 12,
        dato: 0,
        color: "#32CD32",
        descripcion: "Corte de SFC"
    },
    {
        indice: 13,
        dato: 0,
        color: "#FFA500",
        descripcion: "Falta de Herrajeria/Adecuación"
    },
    {
        indice: 14,
        dato: 0,
        color: "#F5F5F5",
        descripcion: "Sin Inconvenientes"
    }
]

const slaTicket = {
    sc: 0,
    nc: 0
}


function materialRegistroDynamic(materialArray, indice, nombreObjeto, valorObjeto) {
    materialArray[indice].nombreObjeto = valorObjeto;
}

// ! Datos a Necesitar para el material

const materialCount = 29;
let codigoDynamic = [];
let descripcionDynamic = [];
let cantidadStockDynamic = [];
let medidaDynamic = [];
let cantidadUtilizadaDynamic = [];
let materialTotalDynamic = [];

function initMaterialDynamic() {
    for (let i = 1; i <= materialCount; i++) {
        cantidadUtilizadaDynamic[i] = 0.0;
    }
}

function unionObjectDynamic() {
    for (let i = 1; i <= materialCount; i++) {
        materialTotalDynamic[i] = {
            codigo: codigoDynamic[i],
            descripcion: descripcionDynamic[i],
            medida: medidaDynamic[i],
            stock: cantidadStockDynamic[i],
            cantidad: cantidadUtilizadaDynamic[i]
        };
    }
}

function mostarMaterialDynamic() {
    for (let i = 1; i <= materialCount; i++) {
        let cantidadRestante = materialTotalDynamic[i].stock - materialTotalDynamic[i].cantidad;
        let stockParcial = materialTotalDynamic[i].stock < materialTotalDynamic[i].cantidad ? materialTotalDynamic[i].cantidad : materialTotalDynamic[i].stock;
        if (cantidadRestante < 0) {
            cantidadRestante = 0;
        }
        creacionDeItem(i, materialTotalDynamic[i].descripcion, materialTotalDynamic[i].medida, stockParcial, materialTotalDynamic[i].cantidad, cantidadRestante);
    }
}


function revisionDeTickets() {
    let contador = 1;
    initMaterialDynamic();
    fetch('archivo.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(tickets => {
            let indice = 1
            tickets.forEach(ticket => {
                if (contador === 1) {
                    for (let i = 1; i <= materialCount; i++) {
                        codigoDynamic[i] = ticket[i];
                    }
                    contador++;
                } else {
                    if (contador === 2) {
                        for (let i = 1; i <= materialCount; i++) {
                            descripcionDynamic[i] = ticket[i];
                        }
                        contador++;
                    } else {
                        if (contador === 3) {
                            for (let i = 1; i <= materialCount; i++) {
                                medidaDynamic[i] = ticket[i];
                            }
                            contador++;
                        } else {
                            if (contador === 4) {
                                for (let i = 1; i <= materialCount; i++) {
                                    cantidadStockDynamic[i] = ticket[i];
                                }
                                contador++;
                            } else {
                                // console.log(cantidadUtilizadaDynamic);
                                for (let i = 1; i <= materialCount; i++) {
                                    if (ticket[i] != null) {
                                        cantidadUtilizadaDynamic[i] += parseFloat(ticket[i]);
                                    }
                                }
                                // console.log(cantidadUtilizadaDynamic);
                                contador++;
                                // contador++;
                                llenadoMaterial(material, ticket); //llenado de material por ticket
                                eventosTickets(ticket);
                                revisionSLA(ticket);
                                const { ticketPersonal, casoHansa, fechaInicial, horaInicial, fechaFin, horaFin, tiempo, sla, reclamo, causa, producto, solucion, tipoFalla, cuadrilla, ciudad, coordenada, longitudUtilizada, longitudTotal, fase, tipo, longTotalUno, longTotalDos, longTotalTres } = ticket;
                                if (tipo !== null) {
                                    if (tipo == "cambio") {
                                        promedioSFC(detallePromedioSFCCambio, tipo, tiempo);
                                    }
                                    if (tipo == "reparacion") {
                                        promedioSFC(detallePromedioSFCReparacion, tipo, tiempo);
                                    }
                                }
                                llenadoDeFechas(fechaFin);
                                fasesTableContent(fase);
                                llenadoDeSFC(sfcArrayInstalado, longitudUtilizada);
                                llenadoDeSFC(sfcArrayMedidaReal, longitudTotal);
                                llenadoDeSFCUltimate(sfcArrayMedidaRealUltimate, longTotalUno, longTotalDos, longTotalTres);
                                // /*****************************************************************/
                                /*****************************************************************/
                                /*                  LLENADO DE TICKETS EN TABLA                  */
                                /*****************************************************************/
                                /*****************************************************************/
                                let newRowContent = document.createElement("tr");
                                createContentTD(newRowContent, indice, alineacionCentro);
                                createContentTD(newRowContent, ticketPersonal, alineacionCentro);
                                createContentTdLink(newRowContent, casoHansa, alineacionCentro);
                                createContentTD(newRowContent, `${fechaInicial} <br> ${horaInicial}`, alineacionCentro);
                                // // createContentTD(newRowContent, horaInicial);
                                createContentTD(newRowContent, `${fechaFin} <br> ${horaFin}`, alineacionCentro);
                                // // createContentTD(newRowContent, horaFin);
                                createContentTD(newRowContent, tiempo, alineacionCentro);
                                createContentTD(newRowContent, sla, alineacionCentro);
                                createContentTdReclamo(newRowContent, reclamo, causa, producto, solucion);
                                createContentTD(newRowContent, causa);
                                createContentTdTipoFalla(newRowContent, tipoFalla);
                                createContentTD(newRowContent, cuadrilla, alineacionCentro);
                                createContentTD(newRowContent, ciudad, alineacionCentro);
                                createContentTD(newRowContent, coordenada, alineacionCentro);
                                tableContentTicket.appendChild(newRowContent);
                                indice++
                            }
                        }
                    }
                }



            });


            unionObjectDynamic();
            mostarMaterialDynamic();
            // llenadoDeMateriales(sfcArrayInstalado, material); //llenado de material  
            sfcMetrajeRealTable();
            fasesTableContentAll();
            slaTableContentAll();
            ticketsPorDia();
            creacionDeEventosPie();
            tiempoReparacion = findAverageTime(detallePromedioSFCReparacion);
            tiempoCambio = findAverageTime(detallePromedioSFCCambio);
            promedioTableContentAll(tiempoCambio, tiempoReparacion);

            /* Datos pie Chart*/
            console.log(eventoPie.map(item => item.dato));
            /* Datos Histograma*/
            console.log(fechaDetailTicket.map(item => item.dia));
            console.log(fechaDetailTicket.map(item => item.cantidad));


        });
}


revisionDeTickets(); //llenado de tickets en tabla


// console.log(material);
//? /////////////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////////////

//?     FUNCIONES DE ATRIBUTOS HTML

//? /////////////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////////////

//? LLENADO DE DATOS DE MATERIALES
function llenadoDeMateriales(sfcArrayInstaladoRegion, materialRegion) {
    let indice = 1;
    materialRegion.forEach(item => {
        if (item.id != "sfc") {
            let total = 0;
            let stock = 0;
            if ((item.stock - item.utilizado) > 0) {
                total = item.stock - item.utilizado;
            }
            if (item.stock < item.utilizado) {
                stock = item.utilizado;
            } else {
                stock = item.stock;
            }
            creacionDeItem(indice, item.nombre, item.medida, stock, item.utilizado, total);
            indice++;
        }
    });
    for (let i = 0; i < sfcArrayInstaladoRegion.length; i++) {
        indice += 1;
        creacionDeItem(indice, "Cable SFC " + sfcArrayInstaladoRegion[i].medida + " Mts", "Uni", sfcArrayInstaladoRegion[i].cantidad, sfcArrayInstaladoRegion[i].cantidad, 0);
    }

}

function creacionDeItem(indice, descripcion, medida, stock, utilizado, saldo) {
    const newRowContentMaterial = document.createElement("tr");
    createContentTD(newRowContentMaterial, indice, alineacionCentro);
    createContentTD(newRowContentMaterial, descripcion);
    createContentTD(newRowContentMaterial, medida, alineacionCentro);
    createContentTD(newRowContentMaterial, stock, alineacionCentro);
    createContentTD(newRowContentMaterial, utilizado, alineacionCentro);
    createContentTD(newRowContentMaterial, saldo, alineacionCentro);
    tableContentMaterial.appendChild(newRowContentMaterial);
}

//? llenado de tabla metraje de SFC 

function sfcMetrajeRealTable() {
    sfcArrayMedidaRealUltimate.forEach((sfc, indice) => {
        const newRowContentSFC = document.createElement("tr");
        createContentTD(newRowContentSFC, indice + 1, alineacionCentro);
        createContentTD(newRowContentSFC, sfc.medida + " Mts");
        createContentTD(newRowContentSFC, sfc.cantidad, alineacionCentro);
        sfcMetraje.appendChild(newRowContentSFC);
    });
}
promedioTableCR

//? llenado de Fases en la tabla

function fasesTableContentAll() {
    const total = faseConteo.fase1 + faseConteo.fase2;
    const faseUno = parseFloat(Math.round(((faseConteo.fase1 / total) * 100) * 100) / 100).toFixed(2);
    const faseDos = parseFloat(Math.round(((faseConteo.fase2 / total) * 100) * 100) / 100).toFixed(2);
    faseTableDetail.classList.add(alineacionCentro);
    faseTableDetail.children[0].children[1].textContent = faseConteo.fase1;
    faseTableDetail.children[0].children[2].textContent = faseUno + " %";
    faseTableDetail.children[1].children[1].textContent = faseConteo.fase2;
    faseTableDetail.children[1].children[2].textContent = faseDos + " %";
    faseTableDetail.children[2].children[1].textContent = total;
    faseTableDetail.children[2].children[2].textContent = "100 %";
}
//? llenado de Fases en la tabla

function promedioTableContentAll(valor1, valor2) {
    promedioTableCR.children[0].children[1].textContent = valor1;
    promedioTableCR.children[0].children[1].classList.add(alineacionCentro);
    promedioTableCR.children[1].children[1].textContent = valor2;
    promedioTableCR.children[1].children[1].classList.add(alineacionCentro);
}

//? Llenado de SLA en Table
function slaTableContentAll() {
    const total = slaTicket.nc + slaTicket.sc;
    const noCumple = parseFloat(Math.round(((slaTicket.nc / total) * 100) * 100) / 100).toFixed(2);
    const siCumple = parseFloat(Math.round(((slaTicket.sc / total) * 100) * 100) / 100).toFixed(2);
    slaTableDetail.children[0].children[1].textContent = slaTicket.nc;
    slaTableDetail.children[0].children[1].classList.add(alineacionCentro);
    slaTableDetail.children[0].children[2].textContent = noCumple + " %";
    slaTableDetail.children[0].children[2].classList.add(alineacionCentro);
    slaTableDetail.children[1].children[1].textContent = slaTicket.sc;
    slaTableDetail.children[1].children[1].classList.add(alineacionCentro);
    slaTableDetail.children[1].children[2].textContent = siCumple + " %";
    slaTableDetail.children[1].children[2].classList.add(alineacionCentro);
    slaTableDetail.children[2].children[1].textContent = total;
    slaTableDetail.children[2].children[1].classList.add(alineacionCentro);
    slaTableDetail.children[2].children[2].textContent = "100 %";
    slaTableDetail.children[2].children[2].classList.add(alineacionCentro);
}
//? llenado de cantidad de Fases 
function fasesTableContent(faseTickets) {
    if (faseTickets === "FASE 1") {
        faseConteo.fase1 += 1;
    } else {
        faseConteo.fase2 += 1;
    }
}

//? LLENADO DE EVENTOS POR CODIGO DE COLORES
function creacionDeEventosPie() {
    let total = 0;
    eventoPie.forEach(ticket => {
        createItemPie(ticket.indice, ticket.descripcion, ticket.dato);
        total += ticket.dato;
    });
    sumaTotalPie.textContent = total;
    sumaTotalPie.classList.add(alineacionCentro);
}
//? CREACION DE ITEM PIE
function createItemPie(ColourCode, tipoEvento, cantidad) {
    const newRowContentPie = document.createElement("tr");
    createContentTdTipoFalla(newRowContentPie, ColourCode);
    // createContentTD(newRowContentPie, ColourCode);
    createContentTD(newRowContentPie, tipoEvento);
    createContentTD(newRowContentPie, cantidad, alineacionCentro);
    tableContentPie.appendChild(newRowContentPie);
}
//? CREACION DE ATRIBUTOS HTML

function createContentTdLink(datoFila, Valor, ubicacion) {
    const elemento = document.createElement("td");
    const enlace = document.createElement("a");
    const urlHansa = "https://docker.hansa.com.bo:7014/#/tarjeta?ot=" + Valor;
    enlace.setAttribute("href", urlHansa);
    enlace.setAttribute("target", "_blank");
    enlace.innerHTML = "<b>" + Valor + "</b>";
    elemento.classList.add(ubicacion);
    elemento.appendChild(enlace);
    datoFila.appendChild(elemento);
}

//? FORMATEA LA INFORMACION PARA LA COLUMNA DESCRIPCION Y FALLA
function createContentTdReclamo(datoFila, reclamo, causa, producto, solucion) {
    const elemento = document.createElement("td");
    elemento.innerHTML = "<b>RECLAMO: </b>" + reclamo + "<br><b>CAUSA: </b>" + causa + "<br><b>PRODUCTO: </b>" + producto + "<br><b>SOLUCION: </b>" + solucion;
    datoFila.appendChild(elemento);

}

//? CREA EL CONTENIDO DE CADA ITEM PARA CADA FILA
function createContentTD(datoFila, Valor, Ubicacion) {
    const elemento = document.createElement("td");
    elemento.innerHTML = Valor;
    elemento.classList.add(Ubicacion);
    datoFila.appendChild(elemento);
}

//? LLENADO DE DATO S FILA SEGUN EL COLOR DE LA FALLA

function createContentTdTipoFalla(datoFila, Valor) {
    const elemento = document.createElement("td");
    switch (parseInt(Valor)) {
        case 1:
            elemento.style.backgroundColor = eventoPie[0].color;
            break;
        case 2:
            elemento.style.backgroundColor = eventoPie[1].color;
            break;
        case 3:
            elemento.style.backgroundColor = eventoPie[2].color;
            break;
        case 4:
            elemento.style.backgroundColor = eventoPie[3].color;
            break;
        case 5:
            elemento.style.backgroundColor = eventoPie[4].color;
            break;
        case 6:
            elemento.style.backgroundColor = eventoPie[5].color;
            break;
        case 7:
            elemento.style.backgroundColor = eventoPie[6].color;
            break;
        case 8:
            elemento.style.backgroundColor = eventoPie[7].color;
            break;
        case 9:
            elemento.style.backgroundColor = eventoPie[8].color;
            break;
        case 10:
            elemento.style.backgroundColor = eventoPie[9].color;
            break;
        case 11:
            elemento.style.backgroundColor = eventoPie[10].color;
            break;
        case 12:
            elemento.style.backgroundColor = eventoPie[11].color;
            break;
        case 13:
            elemento.style.backgroundColor = eventoPie[12].color;
            break;
        case 14:
            elemento.style.backgroundColor = eventoPie[3].color;
            break;
    }
    // elemento.textContent = Valor;
    datoFila.appendChild(elemento);
}



//? /////////////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////////////

//?     FUNCIONES CON LOGICA DE PROCESOS

//? /////////////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////////////


//? REGISTRA TODO EL MATERIAL ITEM POR ITEM
function llenadoMaterial(materialRegistrado, materialTicket) {
    materialRegistrado[0].utilizado += materialTicket.cinta;
    materialRegistrado[1].utilizado += materialTicket.hebilla;
    materialRegistrado[2].utilizado += materialTicket.termo;
    materialRegistrado[3].utilizado += materialTicket.sfc;
    materialRegistrado[4].utilizado += materialTicket.retencion;
    materialRegistrado[5].utilizado += materialTicket.cajaEmpalme;
    materialRegistrado[6].utilizado += materialTicket.cajaFDT;
    materialRegistrado[7].utilizado += materialTicket.cajaNap;
    materialRegistrado[8].utilizado += materialTicket.baseOjal;
    materialRegistrado[9].utilizado += materialTicket.preformado;
    materialRegistrado[10].utilizado += materialTicket.camisa;
    materialRegistrado[11].utilizado += materialTicket.fo24;
    materialRegistrado[12].utilizado += materialTicket.fo48;
    materialRegistrado[13].utilizado += materialTicket.fo144;
    materialRegistrado[14].utilizado += materialTicket.trebol;
    materialRegistrado[15].utilizado += materialTicket.dielectrico;
    materialRegistrado[16].utilizado += materialTicket.splitter;
    materialRegistrado[17].utilizado += materialTicket.hb144;
    materialRegistrado[18].utilizado += materialTicket.cableDrop;
    materialRegistrado[19].utilizado += materialTicket.pijtail;
    materialRegistrado[20].utilizado += materialTicket.baseBulon;
    materialRegistrado[21].utilizado += materialTicket.cruceta;
}

//?REGISTRA EL DETALLE DE EVENTOS PARA EL PIE
function eventosTickets(eventoTicket) {
    switch (parseInt(eventoTicket.tipoFalla)) {
        case 1:
            eventoPie[0].dato += 1;
            break;
        case 2:
            eventoPie[1].dato += 1;
            break;
        case 3:
            eventoPie[2].dato += 1;
            break;
        case 4:
            eventoPie[3].dato += 1;
            break;
        case 5:
            eventoPie[4].dato += 1;
            break;
        case 6:
            eventoPie[5].dato += 1;
            break;
        case 7:
            eventoPie[6].dato += 1;
            break;
        case 8:
            eventoPie[7].dato += 1;
            break;
        case 9:
            eventoPie[8].dato += 1;
            break;
        case 10:
            eventoPie[9].dato += 1;
            break;
        case 11:
            eventoPie[10].dato += 1;
            break;
        case 12:
            eventoPie[11].dato += 1;
            break;
        case 13:
            eventoPie[12].dato += 1;
            break;
        case 14:
            eventoPie[13].dato += 1;
            break;
    }
}


//? Realiza el conteo de SLA por Ticket

function revisionSLA(eventoSLA) {
    if (eventoSLA.sla === "S/C") {
        slaTicket.sc += 1;
    } else {
        slaTicket.nc += 1;
    }
}

//? llenado de Array con SFC
function llenadoDeSFC(arraySFC, cableSfc) {
    if (cableSfc !== null) {
        if (arraySFC.some(sfc => sfc.medida === cableSfc)) {
            const indice = arraySFC.findIndex(sfc => sfc.medida === cableSfc);
            arraySFC[indice].cantidad += 1;
        } else {
            const sfcInstalado = {
                medida: cableSfc,
                cantidad: 1
            }
            arraySFC.push(sfcInstalado);
        }
    }
}

//? llenado de Array con SFC de tres medidas
function llenadoDeSFCUltimate(arraySFC, cableSfcUno, cableSfcDos, cableSfcTres) {
    if (cableSfcUno !== null) {
        if (arraySFC.some(sfc => sfc.medida === cableSfcUno)) {
            const indice = arraySFC.findIndex(sfc => sfc.medida === cableSfcUno);
            arraySFC[indice].cantidad += 1;
        } else {
            const sfcInstalado = {
                medida: cableSfcUno,
                cantidad: 1
            }
            arraySFC.push(sfcInstalado);
        }
    }
    if (cableSfcDos !== null) {
        if (arraySFC.some(sfc => sfc.medida === cableSfcDos)) {
            const indice = arraySFC.findIndex(sfc => sfc.medida === cableSfcDos);
            arraySFC[indice].cantidad += 1;
        } else {
            const sfcInstalado = {
                medida: cableSfcDos,
                cantidad: 1
            }
            arraySFC.push(sfcInstalado);
        }
    }
    if (cableSfcTres !== null) {
        if (arraySFC.some(sfc => sfc.medida === cableSfcTres)) {
            const indice = arraySFC.findIndex(sfc => sfc.medida === cableSfcTres);
            arraySFC[indice].cantidad += 1;
        } else {
            const sfcInstalado = {
                medida: cableSfcTres,
                cantidad: 1
            }
            arraySFC.push(sfcInstalado);
        }
    }
}


//? lleando de array con fechas
function llenadoDeFechas(fecha) {
    fechasDeTickets.push(fecha);
}


//?Trabajo con las fechas del ARRAy
function ticketsPorDia() {
    mesActual.forEach(dia => {
        fechaDetailTicket.push({
            dia: dia,
            cantidad: fechasDeTickets.filter(fecha => fecha === dia).length
        })
    });
}

//? obtencion de promedios
function promedioSFC(arrayTipo, tipo, tiempo) {
    arrayTipo.push({
        tipo: tipo,
        tiempo: tiempo
    });
}

//? promedios de tiempos
function findAverageTime(promedioArray) {
    let minutos = 0;
    let horas = 0;
    promedioArray.forEach(sfcTime => {
        const m = sfcTime.tiempo.charAt(3) + sfcTime.tiempo.charAt(4);
        const h = sfcTime.tiempo.charAt(0) + sfcTime.tiempo.charAt(1);
        minutos = parseInt(minutos) + parseInt(m);
        horas = parseInt(horas) + parseInt(h);
    });
    horas += parseInt(minutos / 60);
    minutos = minutos % 60;
    horas = horas / promedioArray.length;
    minutos = minutos / promedioArray.length;
    minutos += parseFloat((horas - parseInt(horas)) * 60);
    horas = parseInt(horas);
    const segundos = parseFloat((minutos - parseInt(minutos)) * 60)
    return (horas + ":" + parseInt(minutos) + ":" + parseInt(segundos));
}