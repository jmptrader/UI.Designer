app.controller("BaseController", ['$scope','API','$http','$compile', function ($scope,API,$http,$compile) {
    $scope.City = params['city'];
    $scope.Category =  params['category'];
    $scope.Mobile = params['mobile'];
    $scope.Search = params['search'];
    $scope.Page = "Details";
    if ($scope.City == undefined && $scope.Category == undefined){
        $scope.City = "Mumbra";
        $scope.Category = "Classes";
    }
    $scope.webdata = "";
    $scope.webHtml = "nasir";
     $scope.id = params['id'];


    API.sideBar().then(function (response) {
       console.log("----Side Bar Data/HTML----");

         $scope.SideBarMumbraJson = response;
     });


    $scope.bind = function(){
        $("[contenteditable=true]").removeAttr("contenteditable");

    }
   $scope.open = function(city,category){
       $scope.City = city;
       $scope.Category =  category;
        if ($scope.id == undefined){
           HttpQry = "action=web&qry=cols  categoy = '"+city + "|" + category+"'";

      }
      else
      {

      }
        var WebData = "";


          HttpQry = "qry=select layout from template where category = '"+city + "|" + category+"' and layout != '' order by datetime desc limit 1";
          console.log(HttpQry);
          API.call().then(function (response) {

              if (response != null){
              try{

                      console.log("----Layout HTML----");
                      console.log(response);
                      if (response[0].layout == "") return;
                      var html = response[0].layout;
                      var tElement = $("#baseid");
                      var el = angular.element(html);
                      tElement.append(el);
                      compiled = $compile(el);
             //           $(".dn").remove();
                    HttpQry = "action=web&qry=cols id_web = "+$scope.id;
                     API.call().then(function (response) {

                                try{
                                         console.log("----APICALL Details Json Data----");
                                         WebData = response;
                                         $scope.webdata =  WebData;
                                         console.log($scope.webdata);
                                         toastr.success("Found: " + response.length, "Status");

                                    }catch(e){
                                        console.log(e);
                                                     toastr.error("error", "Status");
                                    }
                                 setTimeout(function() { init(); }, 500);
                             });


                      compiled($scope);
                      $scope.$digest();
                      $scope.bind();

                  }catch(e){
                      console.log(e);
                       toastr.error(e, "Status");
                  }
                  setTimeout(function() { init(); }, 500);
         }
        });

    }
    $scope.open($scope.City,$scope.Category);


}]);

