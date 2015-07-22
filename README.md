#iib-ops-widgets

Angular module for bootstrapping widgets that visualize operational data for IBM Integration bus and exposing them as angular directives.

See demo here - http://ot4i.github.io/iib-ops-widgets/index.html


## Try it
### Install
1. Download and install node.js - http://nodejs.org/download/
2. Install http static server for node ```npm install -g http-server```
3. Download - [iib-ops-widgets] (https://github.com/ot4i/iib-ops-widgets/archive/master.zip)  and unzip
4. Change directory to the Test directory ``` cd iib-ops-widgets\src\public\Test ```
5. Install the dependancies using bower ``` bower install ```

### Take a look
1. cd to the public directory and start the static http server ``` http-server -p 8080 -c-1 ```
2. point your browser at [http://127.0.0.1:8080/Test](http://127.0.0.1:8080/Test) and click on the links for "Flow stats", "Sun burst", and "Circle chart".  You will see examples of these widgets visualising randomly simulated data.
3. If you happen to have an instance of [iib-ops-rest](https://github.com/ot4i/iib-ops-rest) running on your local system, then you can point your broswer at [http://127.0.0.1:8080/Test?integration=true](http://127.0.0.1:8080/Test?integration=true) to see these widgets visualising the data from the Ingeration Nodes that you confiugured iib-ops-rest with.  NOTE: in this mode, the flow stats widget shows not data unless you happen to have a message flow named "Flow1111" deployed to one of your Integration Servers.

### What next
Using the application code under src\public\Test as a sample, you can now build your own application that embeds these widgets.  The key pieces of infomation that you want to glean from that sample are.. 

you want to do something like this in your ```<html><head> ```
```
 <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">

    <link rel="stylesheet" type="text/css" href="/css/style.css">

    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    
    <script src="/directives/iib-widgets.js"></script>
    <script src="/directives/circle-chart.js"></script>

    <!-- Angular UI-->
    <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    
    <!-- other dependancies -->
    <script src="bower_components/d3/d3.min.js"></script>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="bower_components/bower-mqttws/mqttws31.js"></script>
    
    <script src="https://github.com/ot4i/iib-ops-js/releases/download/v0.1/integrationBus.js"></script>
    <script src="https://github.com/ot4i/iib-ops-js/releases/download/v0.1/integration-bus-angular.js"></script>
```
 
... do something like this in your Javascript

```
... angular.module("MyApp",['iibWidgets']);..
```


... and do this in your ``` <html><body> ```

```
<div ng-app="MyApp"> 
  <div iib-flow-stats iib-flow-name='MyFlow'></div>
  <div iib-circle-chart></div>
  <div iib-sun-burst iib-simulation='true'></div>
</div>
```
