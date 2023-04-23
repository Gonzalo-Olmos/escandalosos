export var competidores_tabla = $('#competidores_tabla').DataTable( {
            
    ajax:  {	
        type: "POST",	
        url:  "../views/actions/obtener_competidores.php",
        dataSrc: '',
        data: {},
    },
    processing : true,
    responsive: true,
    ordering:false,
    "language": {
        "decimal": ",",
        "thousands": ".",
        "search": "Buscar: ",
        "processing": "Obteniendo datos...",
        "lengthMenu": "Mostrar _MENU_ elementos por página",
        "zeroRecords": "Sin resultados",
        "info": "Mostrando _PAGE_ de _PAGES_ páginas",
        "infoEmpty": "No se encontraron elementos",
        "infoFiltered": "(filtrado de _MAX_ total elementos)",
        "paginate": {
            "first": "Primera",
            "last": "Última",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    },
    
    "lengthMenu": [[5,10,-1], [5, 10, "Todos"]],
    dom: 'frtipB',
    buttons: [
            {
                extend: 'pageLength',
                text:      '<i class="fa fa-eye"></i> Elementos',
                className: 'buttons-excel buttons-html5 btn blue btn-outline',                      
                
            },     
            {
                extend: 'excelHtml5',
                text:      '<i class="fa fa-file-excel-o"></i> Excel',
                className: 'buttons-excel buttons-html5 btn blue btn-outline',
                title: 'Exportar_excel'
            }                                             
    ],
    "columnDefs": [	 
        {   'targets': 0,
            'checkboxes': {
               'selectRow': true
            }
        },           
       
        { type: 'date-uk', targets: [1] },
    ], 
    "select": {
        'style': 'multi'
    }, 
    "order": [[ 0, "desc" ]]
} );	