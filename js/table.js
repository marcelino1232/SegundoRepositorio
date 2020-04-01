var data = 
[
    {
        Nombre : "Marcelino",
        Apellido : "Heredia Fernandez",
        Edad : "24",
        Telefono : "829-933-0963",
        Domicilio : "Villa mella",
    },{
        Nombre : "Dauri",
        Apellido : "Moya",
        Edad : "19",
        Telefono : "829-933-0963",
        Domicilio : "Villa Juana",
    },{
        Nombre : "Samuel",
        Apellido : "Heredia Fernandez",
        Edad : "27",
        Telefono : "829-933-0963",
        Domicilio : "Sabana Perdida",
    },{
        Nombre : "Huvaldina",
        Apellido : "Heredia Fernandez",
        Edad : "25",
        Telefono : "829-933-0963",
        Domicilio : "Brooklyn",
    },{
        Nombre : "Francisco",
        Apellido : "Heredia Fernandez",
        Edad : "30",
        Telefono : "829-933-0963",
        Domicilio : "Torito",
    }
]

window.onload= CargarList();

function CargarList()
{
    var cont = data.length;
    var thead = Object.keys(data[0]);

    var contenido = "";
    contenido += "<thead>";
    contenido += "<tr>";
    for(var t = 0; t < thead.length; t++)
    {
       contenido += "<th>";
       contenido += thead[t];
       contenido += "</th>";
    }
    contenido += "</tr>";
    contenido += "</thead>";
    
    contenido += "<tbody>";
    for(var i = 0; i < cont; i++)
    {
        contenido += "<tr>";
        for(var j = 0; j < thead.length; j++)
        {
            var fila = thead[j];

            contenido += "<td>";
            contenido += data[i][fila];
            contenido += "</td>";
        }
        contenido += "</tr>";
    }

    contenido += "</tbody>";

    document.getElementById("table").innerHTML = contenido;
}