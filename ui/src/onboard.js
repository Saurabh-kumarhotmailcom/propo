 var app = angular.module('myApp', ['ngCookies']);
        app.controller('myCtrl', function ($scope, $http, $cookies) {
        	  $scope.childrenCal = function () {
            var childrenCount = $scope.children;
            if(childrenCount != 0 && childrenCount != ""){
            		var childrenDetails = ""
            		for(var i=0;i<childrenCount;i++){
            			childrenDetails+="Age of child "+(i+1)+" : <select class='children-catg'><option value=''>--Select--</option><option value='0-3'>0-3 years</option><option value='4-12'>4-12 years</option><option value='12-18'>12-17 years</option><option value='18+'>18+ years</option></select><br>"
            		}
            		$("#childrencount").html(childrenDetails)
            }else{
            	$("#childrencount").html("")
            }
        	  
        	  }
        	  
        	  $scope.OwershipType = function (val) {
        		  var rentDetails="";
        		  if(val == "rent"){
        			  rentDetails="Monthly rent : <p><input type='text' ng-model='rent'><br>"
        		  }else{
        			  rentDetails="Monthly mortgage : <p><input type='text' ng-model='mortgage'><br> WOZ value of house :<input type='text' ng-model='worth'>" 
        		  }
        		  $("#rentDetails").html(rentDetails)
        		  
        	  }
        	  
        	  $scope.carDetails = function(){
        		  var rentDetails = $scope.userSelectType;
        		  if(rentDetails != ""){
        			  if(rentDetails == "No"){
        				  $("#carDetailsDiv").css("display","none")
            		  }else{
            			  $("#carDetailsDiv").css("display","block")
            		  }
        		  }else {
        			  $("#carDetailsDiv").css("display","none")
        		  }
        	  }

			
			$scope.types = [{
				"type": "No"
				}, {
				"type": "Mini"
				}, {
				"type": "Compact"
				},{
				"type": "Compact middle class"
				},{
				"type": "Mid-range"
				}];
			
			$scope.kilometers = [{
				"kilometer": "<10,000"
				}, {
				"kilometer": "10,000- 20,000"
				},{
				"kilometer": ">20,000"
				}];
			
			$scope.prices = [{
				"price": "New"
				}, {
				"price": "Second hand"
				},{
				"price": "Mid-range"
				}];

        });

        