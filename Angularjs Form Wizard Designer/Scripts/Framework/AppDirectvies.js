app.directive('appInput', function() {
    var directive = {};

    directive.restrict = 'E';

    directive.template = [
        '<single-calandar ng-if="option.type == \'calendar\'" prop="option"></single-calandar>' +
        '<single-select ng-if="option.type == \'dropdown\'" mapmodel="option.model" prop="option"></single-select>' +
        '<single-map ng-if="option.type == \'map\'" mapmodel="option.model" prop="option"></single-map>' +
        '<single-logo ng-if="option.type == \'logo\'" mapmodel="option.model" prop="option"></single-logo>' +
        '<single-picture ng-if="option.type == \'picture\'" mapmodel="option.model" prop="option"></single-picture>' +
             '<single-label ng-if="option.type == \'label\'" mapmodel="option.model" prop="option"></single-label>' +
             '<single-checkbox ng-if="option.type == \'chk\'" prop ="option"></single-checkbox>' +
        '<single-radio ng-if="option.type == \'rdo\'" prop ="option"></single-radio>' +

        '<single-button ng-if="option.type == \'button\'"  prop="option" ></single-button>' +
        '<single-text ng-if="option.type == \'text\'" mapmodel="option.model" prop="option"></single-text>'
        
    ].join('');

    directive.scope = {
        option: '='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleSelect', function () {
    var directive = {};

    directive.restrict = 'E';
   
    directive.template = [
        '<select ng-model_="{{prop.model}}" name={{prop.model}} valid="{{prop.valid}}" class="form-control m-b">',
        '<option value="{{value.value}}" ng-repeat="value in prop.values">{{value.label}}</option>',
        '</select>'
    ].join('');

    directive.scope = {
        mapmodel: '=',
        prop: '='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleLogo', function () {
    var directive = {};

    directive.restrict = 'E';

      directive.template = [
                                    '<input type="text" name="{{prop.model}}"  ><div name="{{prop.model}}_preview"></div><iframe src="http://kent.nasz.us/mumbra/php/webimageupload.php?name=logo" frameborder="0" scrolling="no"  style="height:100px;width:200px"  />'
                                    ].join('');



    directive.scope = {
        mapmodel: '=',
        prop:'='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singlePicture', function () {
    var directive = {};

    directive.restrict = 'E';

      directive.template = [
                                    '<input type="text" name="{{prop.model}}"  ><div name="{{prop.model}}_preview"></div><iframe src="http://kent.nasz.us/mumbra/php/webimageupload.php?name=picture" frameborder="0" scrolling="no"  style="height:100px;width:200px" />'
                                    ].join('');



    directive.scope = {
        mapmodel: '=',
        prop:'='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleLabel', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.template = [
        '<input type="hidden" ng-model_="{{prop.model}}" name={{prop.model}} valid={{prop.valid}}  class="form-control" value="{{prop.label}}" ></input>'
    ].join('');

    directive.scope = {
        mapmodel: '=',
        prop:'='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleText', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.template = [
        '<input type="text" ng-model_="{{prop.model}}" name={{prop.model}} valid={{prop.valid}}  class="form-control" value="{{prop.text}}" ></input>'
    ].join('');

    directive.scope = {
        mapmodel: '=',
        prop:'='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleCalandar', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.template = [
        '<input type="text" name={{prop.model}} ng-model_="{{prop.model}}"  valid="{{prop.valid}}"  class="form-control datecomp" value="{{prop.text}}" ></input>'
    ].join('');

    directive.scope = {
        mapmodel: '=',
        prop: '='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleMap', function () {
              var directive = {};

              directive.restrict = 'E';

              directive.template = [
                                    '<input type="text"  name={{prop.model}} ng-model_="{{prop.model}}"  valid="{{prop.valid}}"  class="form-control hide"  value="{{prop.text}}" ></input><iframe src="map.html" frameborder="0" scrolling="no" id="iframe" onload="javascript:resizeIframe(this);" />'
                                    ].join('');

              directive.scope = {
              mapmodel: '=',
              prop: '='
              };

              directive.link = function (scope, element, attrs) {
              };

              return directive;
              });



app.directive('singleRadio', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.template = [
        ' <div class="radio i-checks"><label> <input type="radio" name={{prop.model}} ng-model_="{{prop.model}}"  checked="{{prop.optcheck}}" value="{{prop.optvalue}}" name="a"> <i></i> {{prop.complabel}} </label></div>'
    ].join('');

    directive.scope = {
       prop: '='
    };

    directive.link = function (scope, element, attrs) {
    };

    return directive;
});
app.directive('singleCheckbox', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.template = [
        '<div class="checkbox i-checks" ><label><input type="hidden"  name={{prop.model}} /> <input type="checkbox" chkmapid="{{prop.model}}"  ng-model_="{{prop.model}}"  value="{{prop.complabel}}"  chk="chk"><i></i> {{prop.complabel}} </label></div>'
    ].join('');

    directive.scope = {
        prop:'='
    };

    directive.link = function (scope, element, attrs) {

    };

    return directive;
});

app.directive('singleButton', function ($compile) {
    var obj = '<a ng-click="prop.click(prop.clickparam)" name={{prop.model}} ng-blur="prop.blur(prop.blurparam)"  class="btn btn-sm btn-primary {{prop.cls}}"><strong>{{prop.complabel}}</strong></a>';
  var directiveObj =  {
        restrict: 'E',
        replace: true,
        scope: {
            prop: '=',
            value: '=',
            cls: '='
          
            
        },
        template: obj
    };
    return directiveObj;

});
app.directive('jform', function () {
    return {
         scope: {
            form: "=",
            space: "@",
            template: "@"

        },
         template: '<ng-include src="getTemplateUrl()"/>',
         controller: function ($scope) {
             //function used on the ng-include to resolve the template
             $scope.getTemplateUrl = function() {
                 //basic handling
                 if ($scope.template == "HorizontalForm")
                     return "./Shared/Template/HorizontalForm.html ";
                 else if ($scope.template == "CardTemplate")
                     return "./Shared/Template/CardTemplate.html";
                 else if ($scope.template == "TabTemplate")
                     return "./Shared/Template/TabTemplate.html";

                
             };
         }
    };
});
app.directive('jmultiform', function () {
    return {
        scope: {
            attr: "=",
            template: "@",
            jform: "="

        },
        template: '<ng-include src="getTemplateUrl()"/>',
        controller: function ($scope) {
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function () {
                //basic handling
              
                 if ($scope.template == "TabTemplate")
                    return "./Shared/Template/TabTemplate.html";
                 else if ($scope.template == "CardTemplate")
                     return "./Shared/Template/CardTemplate.html";
                 else if ($scope.template == "HorizontalForm")
                     return "./Shared/Template/HorizontalForm.html";
                 else if ($scope.template == "ModalTemplate")
                     return "./Shared/Template/ModalTemplate.html";


            };
        }
    };
});


/* will remove this directive and call it on StateProvider service */
app.directive('componentbind', function () {
    return {
        
       
        controller: function ($scope) {
             setTimeout(function() { init(); }, 500);
        }
    };
});



/* Content Template adding */
app.directive('contentItem', function () {
    return {
            controller: function ($scope) {
                 alert("HI");
            }
        };
});