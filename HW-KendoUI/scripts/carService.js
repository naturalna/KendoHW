(function (global) {
    
     app = global.app = global.app || {};
    
   /* var viewModel = kendo.observable({
        allCars:[],
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
        var cars = [
            { make: 'Opel', model: 'Insignia' , year: '2009', 
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            { make: 'Audi', model: 'A5', year: '2008', 
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            { make: 'BMW', model: 'M3', year: '2010', 
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            { make: 'Mercedes', model: 'CL', year: '2011',
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            ];

            viewModel.set("allCars", cars);            
               
    }
    
    app.cars = {
        init:init          
    };*/
    var cars = [
            { make: 'Opel', model: 'Insignia' , year: '2009', 
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            { make: 'Audi', model: 'A5', year: '2008', 
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            { make: 'BMW', model: 'M3', year: '2010', 
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            { make: 'Mercedes', model: 'CL', year: '2011',
            rent:{ 
                status: 'false',    
                options:{
                            day:'true',
                            mouth:'true',
                            year:'false'
                        }}},
            ];
    
    var ds = new kendo.data.DataSource({
        data: cars,
        columns: [
                	{ field: 'make', width: 50, title: 'Make' },
                	{ field: 'model', width: 50, title: 'Model' },
                    { field: 'rent.status', width: 50, title: 'Free' },
                    
],


});

$("#listView-sourse").kendoMobileListView({
    dataSource: ds
});
    
})(window);