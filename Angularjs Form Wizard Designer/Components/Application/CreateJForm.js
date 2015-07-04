
var JFormArray = {
    data: [
        { label: 'Activity Code', type: "picture", model:"act_code", valid: 'valid=number#_#vmsg=Activity code important', hint_: 'Example: Numeric fields required' },
        { label: 'Activity Date', dtvalue: "03/09/2015", type: "calendar", model: "act_date" },
        { label: 'Activity Time', type: "text", model: "act_time" },
        { label: 'General Comments', type: "text", model: "gen_comment" },
        { label: 'CCH Misc', type: "text", model: "cch_misc" },
        { label: 'Route To', type: "text", model: "route_to" },
        { label: 'User ID', type: "text", model: "user_id" },
         { label: 'For Check Box', type: "chk", chkvalue: "checked", complabel: "Check box Component" },
        { label: 'For radio ', type: "rdo", optvalue: "checked", optcheck: "a1", complabel: "Radio Component" },
        { label: 'For radio ', type: "rdo", optvalue: "unchecked", optcheck: "a1", complabel: "Radio Component" },
        { label: 'Workstate', type: "dropdown", values: tempRepeat, model: "work_state" },
        {
            label: '',
            type: "button",
            complabel:"Continue",
            click: function (param) {
                
                alert("click even triggered " + param);
            },
            clickparam: {
                "p1": "nasir",
                "p2":"zakir"
            },
            blur: function(param) {
                alert("blur even triggered " + param);
            },
            blurparam: {
                "b1": "Mark",
                "b2": "Jolly"
            },
            cls: 'pull-right'
        }
    ]

};
//Preview Form
var jPreviewForm = {
    jFormPreview: { heading: "Preview", layout: "col-lg-12", template: "HorizontalForm", fields: JFormArray.data, space: "col-lg-12", clscomp: 'col-lg-8', classlabel: 'col-lg-4' }

};

var JModel = {};
app.controller("JFormController", ['$scope','API','$http', function ($scope,API,$http) {
    $scope.jform = JFormArray;
    $scope.jPreviewForm = angular.copy(jPreviewForm);
   $scope.City = params['city'];
   $scope.Category =  params['category'];
   $scope.Mobile = params['mobile'];
   $scope.id = params['id'];
   $scope.Edit= params['edit'];
   $scope.View= params['view'];
   $scope.Action= params['action'];
   $scope.GroupName = "";
   $scope.Page= "EditForm";

    $scope.autoFillGroupName  = function(item){
        console.log($scope.GroupName);
        item.model = $scope.GroupName + '.' + item.complabel;
        console.log(item);

    }
    $scope.autoSetGroupName  = function(item){
            $scope.GroupName = item.model;
            console.log($scope.GroupName);
console.log(item);

        }
    $scope.addfields = function (index) {

        if (index != undefined){
           $scope.jPreviewForm.jFormPreview.fields.splice(index+1, 0, { label: '', type: "text", model: "" });
        }
        else{
            $scope.jPreviewForm.jFormPreview.fields.push({ label: '', type: "text", model: "" });
        }
        setTimeout(function() { init(); }, 500);
    };
    $scope.removefields = function (index) {
        $scope.jPreviewForm.jFormPreview.fields.splice(index, 1)
    };
                                   $scope.update = function(item,curval){
                                   item.values = angular.fromJson(curval);
                                   
                                   };
    $scope.change = function(item, valid) {
        if (valid.type == ""){
            item.valid = "";
            item.hint = "";
           }
        else{
            if (valid.type  != undefined){
                item.valid = "valid=" + valid.type + "#_#" + "vmsg=" + valid.vmsg;
            }
            item.hint = valid.vmsg;
        }
    };
    $scope.setList = function (item, valuesName) {
        if (valuesName == "")
            item.values = "";
        else
            item.values = valuesName;

    };
    $scope.jColSize = jColSize;
                                   
    $scope.jLayoutSize = jLayoutSize;
    $scope.jDBFields = jDBFields;
    $scope.JStaticData = JStaticData;
    $scope.SaveTemplate = function (filename) {
           var jsonString = angular.toJson($scope.jPreviewForm);
           HttpQry = "insert into template (category,template,datetime) value ('"+$scope.City + "|" + $scope.Category+"','"+jsonString+"',NOW()); ";
        //   console.log(HttpQry);
           $.post(HttpUrl,{qry:HttpQry,action:"write"},function(data){
            console.log(data);
             toastr.success("Saved Successfully", "Status");
            setTimeout(function() { init(); }, 500);
           })

    };

   API.sideBar().then(function (response) {
         $scope.SideBarMumbraJson = response;
     });
$scope.City = "Mumbra";
     $scope.openTemplate = function(city,category){
            $scope.City = city;
            $scope.jForms =  category;
            HttpQry = "qry=select template from template where category = '"+city + "|" + category+"' and template != '' order by datetime desc limit 1";
            API.call().then(function (response) {
                    if (response[0].template  != null){
                    try{
                        console.log(response);
                         $scope.jPreviewForm = angular.fromJson(response[0].template);
                                                toastr.success("Template Loaded", "Status");
                                                }catch(e){
                                                    console.log(e);
                                                              $scope.jPreviewForm = angular.copy(jPreviewForm);

                                                                 toastr.error("Default Template", "Status");
                                                }
setTimeout(function() { init(); }, 500);
               }

             });

           // HttpQry = "qry=insert into template (category) value ('"+$scope.City + "|" + $scope.Category+"'); ";
           // API.call().then(function (response) {

             //});
     }
     $scope.openTemplate($scope.City,$scope.Category);
}]);
