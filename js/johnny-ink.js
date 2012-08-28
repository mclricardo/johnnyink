var ViewModel = function() {
    var self = this;
    self.connectionCount = ko.observable(0);
}
window.viewModel = new ViewModel();

ko.applyBindings(window.viewModel);
