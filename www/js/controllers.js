angular.module('myApp.controllers', [])


.controller('ListCtrl',function($scope,Istanbul){

    $scope.doRefresh = function(){
          
        Istanbul.list()
        .success(function(data,status,headers){
            $scope.istanbul = data.list;
        })
        .finally(function(){
            $scope.$broadcast('scroll.refreshComplete');
        });
    }
    
    $scope.doRefresh();
})

.controller('SearchCtrl',function($scope, City, $ionicActionSheet, $ionicLoading){
    $scope.setting = {
        enableFriends : true
    };
    
    $scope.search = function(cityName){

        $ionicLoading.show({
            template:'Yükleniyor...'
        });
        
        City.list(cityName)
        .success(function(data,status,headers){
            $scope.cityDetail = data;
        })
        .finally(function(){
            $ionicLoading.hide();
        });
    };
});
