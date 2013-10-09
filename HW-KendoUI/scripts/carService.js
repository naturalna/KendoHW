(function (global) {
    var CarViewModel,
        app = global.app = global.app || {};

    
  CarViewModel =  function CarViewModel(e) {
    e.view.element.find("#listview").kendoMobileListView({ 
        dataSource: new kendo.data.DataSource({
                data: cars
})
    });
};
    app.carService = {
        carViewModel: CarViewModel(e)
    };
})(window);