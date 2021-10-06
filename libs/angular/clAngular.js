        var app = angular.module("times", []);
        
        app.controller("timesCtrl", function($scope, $http){
            function getIdTimes(idtimes) {
            const teamsOfSoccer = $http.get(`https://api.football-data.org/v2/competitions/${idtimes}/teams`, {
                headers: {'X-Auth-Token': '57e859a930fe402fb0f144f90458f5dc'}
            }).then(function successCallback(response) {
                $scope.teamsOfSoccer = response.data
                $scope.teamsOfSoccerTeams = response.data.teams
                $scope.teamsLogo = response.data.teams.crestUrl
                
            }, function errorCallback(response) {
                console.log('deu Ruim')
            });
        }
            const idtimes = document.querySelector('#idtimes').textContent
            console.log(idtimes)
            getIdTimes(idtimes)
        });
    
        app.controller("campeonatoCtrl", function($scope, $http){
            function getCompetition(competition) {
            const champonshipOfSoccer = $http.get(`https://api.football-data.org/v2/competitions/${competition}`, {
                headers: {'X-Auth-Token': '57e859a930fe402fb0f144f90458f5dc'}
            }).then(function successCallback(response) {
                $scope.campOfSoccer = response.data
                
            }, function errorCallback(response) {
                console.log('deu Ruim')
            });
            }
            competition = document.querySelector('#compet').textContent
            getCompetition(competition)
        });
    


