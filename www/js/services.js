angular.module('myApp.services',[])
.factory('Istanbul',function($http){

    var district = function(){
           
        return $http.get('http://api.openweathermap.org/data/2.5/find?lat=41&lon=29&cnt=20&lang=tr&appid=64ddbeac057fbe32c9518a6e632d6101');
    };
        return {
            list : function(){
                return district();
            }
        };
    
})
.factory('City', function($http){
    var cityDetails = function(cityName){
        return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&lang=tr&appid=64ddbeac057fbe32c9518a6e632d6101')
    };
    return {
        list: function(cityName){
            return cityDetails(cityName);
        }
    }
});