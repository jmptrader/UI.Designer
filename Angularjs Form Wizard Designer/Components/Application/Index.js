app.controller("BaseController", ['$scope','API','$http', function ($scope,API,$http) {
    $scope.City = params['city'];
    $scope.Category =  params['category'];
    $scope.Mobile = params['mobile'];
    $scope.Search = params['search'];
    $scope.Page = "Index";
    if ($scope.City == undefined && $scope.Category == undefined){
        $scope.City = "Mumbra";
        $scope.Category = "Classes";
    }

    API.sideBar().then(function (response) {
         $scope.SideBarMumbraJson = response;
     });



                           $scope.open = function(city,category){
                               $scope.City = city;
                               $scope.Category =  category;
                               if ($scope.Search != undefined){
                                    HttpQry = "action=web&qry=cols remedies lik "+$scope.Search+ "%' or Name lik " + $scope.Search + "%'";

                               }
                               else
                               {
                                  HttpQry = "action=web&qry=cols categoy = '"+city + "|" + category+"'";
                               }

                                API.call().then(function (response) {

                                       try{
                                                console.log("----APICALL----");
                                                console.log(response);
                                                console.log("----Finish----");
                                                $scope.webdata = response;
                                                console.log($scope.jform);
                                                toastr.success("Found: " + response.length, "Status");

                                           }catch(e){
                                               console.log(e);
                                                            toastr.error("error", "Status");
                                           }


                                setTimeout(function() { init(); }, 500);

                        });

                }
                 $scope.open($scope.City,$scope.Category);


}]);

