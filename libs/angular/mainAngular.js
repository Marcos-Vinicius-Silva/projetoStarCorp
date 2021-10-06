        angular.module("campeonatos", [])
        angular.module("campeonatos").controller("campeonatosCtrl", function($scope, $http){
            $scope.formatarDatas = function(dataInicial){
                const dataN = new Date(dataInicial)
                dataNojeito = dataN.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                return dataNojeito
            }
            
            //--------------CAMPEONATO1
            const campeonato = $http.get("https://api.football-data.org/v2/competitions/BSA", {
                headers: {'X-Auth-Token': '57e859a930fe402fb0f144f90458f5dc'}
            }).then(function successCallback(response) {
                $scope.campeonato1 = response.data
                
            }, function errorCallback(response) {
                console.log('deu Ruim')
            }) 
            //--_--------------------------------------------------------------------------------- 
                        
            const campeonato2 = $http.get(`https://api.football-data.org/v2/competitions/CL`, {
                headers: {'X-Auth-Token': '57e859a930fe402fb0f144f90458f5dc'}
            }).then(function successCallback(response) {
                $scope.campeonato2 = response.data
                
            }, function errorCallback(response) {
                console.log('deu Ruim')
            }) 
            //--------------CAMPEONATO3
            const campeonato3 = $http.get("https://api.football-data.org/v2/competitions/PPL", {
                headers: {'X-Auth-Token': '57e859a930fe402fb0f144f90458f5dc'}
            }).then(function successCallback(response) {
                $scope.campeonato3 = response.data
                
            }, function errorCallback(response) {
                console.log('deu Ruim')
            }) 
            
        })