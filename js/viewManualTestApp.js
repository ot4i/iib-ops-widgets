/*
Copyright 2014-2015 IBM Corporation 
Author John Hosie 
 
  All rights reserved. This program and the accompanying materials
  are made available under the terms of the MIT License
  which accompanies this distribution, and is available at
  http://opensource.org/licenses/MIT
 
  Contributors:
      John Hosie - initial implementation 
*/
(function(){
  var testApp = angular.module("ManualTestApp",['ngRoute','iibWidgets']);
  testApp.config(function($routeProvider,iibIntegrationBusProvider){

    if(getQueryVariable("integration")=="true"){
      //do nothing, it will try to use iib-admin-proxy REST api by default
    }else{      
  
      iibIntegrationBusProvider.simulate(function(integrationBusSimulation){
        var node1           = integrationBusSimulation.addIntegrationNode("Node1");
        
        var server11        = node1.addIntegrationServer("Server11");
        var server12        = node1.addIntegrationServer("Server12");
        
        var application111  = server11.addApplication("Application111");
        var application112  = server11.addApplication("Application112");
        var application121  = server12.addApplication("Application121");
        var application122  = server12.addApplication("Application122");
        var application123  = server12.addApplication("Application123");
        
        var flow1111        = application111.addMessageFlow("Flow1111");
        var flow1112        = application111.addMessageFlow("Flow1112");
        var flow1121        = application112.addMessageFlow("Flow1121");
        var flow1122        = application112.addMessageFlow("Flow1122");
        
        var flow1211        = application121.addMessageFlow("Flow1211");
        var flow1212        = application121.addMessageFlow("Flow1212");
        var flow1221        = application122.addMessageFlow("Flow1221");
        var flow1222        = application122.addMessageFlow("Flow1222");
        
        var flow1231        = application123.addMessageFlow("Flow1231");
        var flow1232        = application123.addMessageFlow("Flow1232");
        var flow1233        = application123.addMessageFlow("Flow1233");
        
        
        
        var node2           = integrationBusSimulation.addIntegrationNode("Node2");
        var server21        = node2.addIntegrationServer("Server21");
        var application211  = server21.addApplication("Application221");
        var flow2111        = application211.addMessageFlow("Flow2111");
        
      });
    }
    $routeProvider
    .when('/flowStats',
          {
            templateUrl:'partials/flowStats.html'
          })
    .when('/sunBurst',
          {
            templateUrl:'partials/sunBurst.html'
          })
    .when('/circleChart',
          {
            templateUrl:'partials/circleChart.html'
          })
	.otherwise({redirectTo:'/'});
  });
  testApp.controller("MainController",function(){
   
  });


})();

function getQueryVariable(variable)
{
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
             if(pair[0] == variable){return pair[1];}
     }
     return(false);
}
