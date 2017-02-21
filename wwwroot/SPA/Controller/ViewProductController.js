var ViewProductController = function($scope, $uibModalInstance, data) {    
    $scope.selectedProduct = data;

    $scope.labels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"];
    $scope.series = ["Series A", "Series B"];

    $scope.data = [
        [64, 32, 12, 34, 33, 44, 66],
        [34, 14, 33, 54, 66, 88, 98],
    ]
}
ViewProductController.$inject = ['$scope', '$uibModalInstance', 'data'];
