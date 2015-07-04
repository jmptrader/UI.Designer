app.controller("BaseController", ['$scope','API','$http', function ($scope,API,$http) {
    $scope.developer = params['developer'];
    $scope.City = params['city'];
    $scope.Category =  params['category'];
    $scope.Mobile = params['mobile'];
    $scope.id = params['id'];
    $scope.Edit= params['edit'];
    $scope.View= params['view'];
    $scope.Action= params['action'];

    $scope.Page= "Edit";
  $scope.jform = jForms;
    console.log($scope.jform);

    API.sideBar().then(function (response) {
         $scope.SideBarMumbraJson = response;
     });

           $scope.EditEntry = function(city,category){
                                  $scope.City = city;
                                  $scope.Category =  category;
                                  HttpQry = "qry=cols intensity = '" + $scope.Mobile + "' and id_web = " + $scope.id;
                                  API.call().then(function (response) {

                                          try{
                                                   console.log("----APICALL----");
                                                   console.log(response);
                                                   console.log("----Finish----");
                                                   var data = angular.fromJson(response[0]);
                                                   console.log(data);
                                                   $("input[name='Edit']").val($scope.Edit);
                                                   $("input[name='Name']").val(data.Name);
                                                   var Details = data.remedies.split("--,--");
                                                   for(var i=0; i <= Details.length - 1; i++){
                                                        console.log(Details[i]);
                                                        var items = Details[i].split("-,-");
                                                        items[0] = items[0].replace(/_/g," ");
                                                        console.log(items);
                                                         $("input[name='remedies."+items[0]+"']").val(items[1]);
                                                         if ($("input[name='remedies."+items[0]+"']").attr("chk") != undefined){

                                                            $("input[name='remedies."+items[0]+"']").attr("CHECKED","CHECKED")

                                                         }
                                                   }
                                                    var Selected = data.selected.split(",");
                                                    console.log(Selected);
                                                    for(var i=0;i <= Selected.length - 1; i++){
                                                        if (Selected[i].indexOf("_logo") != -1){
                                                             $("input[name='logo']").val(Selected[i]);

                                                            previewimage("logo",Selected[i]);
                                                        }
                                                        else
                                                        {
                                                            if ($("input[name='picture']").val() != "")
                                                                $("input[name='picture']").val($("input[name='picture']").val() + ",")


                                                            $("input[name='picture']").val($("input[name='picture']").val() + Selected[i]);


                                                            previewimage("picture",Selected[i]);
                                                        }
                                                    }
                                                   toastr.success("Form Ready for edit", "Status");
                                              }catch(e){
                                                  console.log(e);
                                                  $scope.id = "";
                                                  $scope.Edit = "";
                                                  toastr.error("Sorry you are not authorized to edit this details. Please contact nasihere@gmail.com or Check Admin", "Status");
                                              }


                                    setTimeout(function() { init(); }, 500);

                                   });

                           }

                           $scope.openTemplate = function(city,category){
                               $scope.City = city;
                               $scope.Category =  category;
                               HttpQry = "qry=cols template from template where category = '"+city + "|" + category+"' and template != '' order by datetime desc limit 1";
                               API.call().then(function (response) {

                                       try{
                                                console.log("----APICALL----");
                                                console.log(response);
                                                console.log("----Finish----");
                                                $scope.jform = angular.fromJson(response[0].template);
                                                console.log($scope.jform);
                                                toastr.success("Form Ready", "Status");
                                                if ($scope.Edit == "true"){
                                                        $scope.EditEntry($scope.City,$scope.Category);
                                                }
                                           }catch(e){
                                               console.log(e);
                                                            toastr.error("error", "Status");
                                           }


                                setTimeout(function() { init(); }, 500);

                        });

                }
                 $scope.openTemplate($scope.City,$scope.Category);


}]);

