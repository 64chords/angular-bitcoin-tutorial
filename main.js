var bitcoinCalculator = angular.module('bitcoinCalculator',['nvd3ChartDirectives']);
bitcoinCalculator.controller('bitcoinController',function($scope,$http){
  //api呼んでjson?の取得＆USDに相当するレートだけ抽出する
  $http.get("https://bitpay.com/api/rates")
  .success(function(data){
    $scope.rates = data;
    for(var i=0;i<data.length;i++){
      if(data[i].code == "USD"){
        $scope.currRate = data[i].rate;
      }
    }
    //簡単な変換
    $scope.initialAmt = 5000;
    $scope.newAmt = function(price){
      return price/$scope.currRate * $scope.initialAmt;
    };
    $scope.profit = function(price){
      return price/$scope.currRate * $scope.initialAmt - $scope.initialAmt;
    };
  });

  $scope.exampleData = [{
    "key":"Quantity",
    "bar":true,
    "values":[
      [10,20],
      [20,40],
      [30,60],
      [40,80],
      [50,100]
    ]
  }];

});
