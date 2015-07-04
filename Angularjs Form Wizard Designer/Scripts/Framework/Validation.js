/*

--------Signature-------
Created By: Nasir Sayed
Date: 06 Dec 2014
Reason: 
To void angular directive in html i made this class to handle validation in one place and update all other elements. 
Example" Alert box, Continue or submit button and red border to each element with description.
*/

//Valid directive has four attributes
/*
    1) Valid = "number", "text", checkbox
    2) vmin = to check minimul length
    3) vmax - to check maxlenght
    4) vid to update errormsg and set auto focus 
    5) vmsg = to show in alert box
    6) vminval = minimum data example: 1M value shoule be entered or seleect box minimum value should be select

*/
var reName = new RegExp(/^[a-zA-Z]+$/);
var reText = new RegExp(/^([a-zA-Z0-9 _-]+)$/);
var reEmail = new RegExp(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/);
var reAddress = new RegExp(/^[0-9a-zA-Z]+$/);
var rePostalZip = new RegExp(/^[0-9]+$/);
var reDate = new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
var reNumber = new RegExp(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);
app.directive('valid', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            element.on('change', function (e) {

                validation(element, attrs, scope, $parse);

                //scope.$digest();
                //scope.$apply();

            });


        }
    };
}]);
app.directive('reset', [function ($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            element.on('change', function () {
                if ($(element).is(":visible") == false || $(element).is(":disabled") == true) {

                    ngModel.$setViewValue("", "");
                    scope.$apply();
                }
            });



        }
    };
}]);

var validation = function (element, attr, scope, $parse) {
    var currentValue = element.val();
    //var attrs = attrs.valid.split("#_#");
    
    var type = ParameterValidation(attr,"valid");
    var minlength = ParameterValidation(attr,"vmin");
    var maxlength = ParameterValidation(attr,"vmax");
    var errormsg = ParameterValidation(attr,"vmsg");
    var minvalue = ParameterValidation(attr,"vminval");
    var vif = ParameterValidation(attr,"vif");
    var errorid = $(element).attr("vid");//attrs.vid;
    var errorFlag = true;
    var errorInfo = true;
    if (errorid == undefined || errorid == "") {
        errorid = Math.random();
        $(element).attr("vid", errorid);


    }

    if (minvalue == undefined) {
        minvalue = 0;
    }
    /*     console.log(currentValue);
         console.log(minlength);
         console.log(maxlength);
         console.log(minvalue)
      */
    if (errorFlag == true && vif != undefined) {
        var template = $parse(vif);
        var obj;
        obj = template(scope); // Hello Joe

        if (obj == true) {
            errorFlag = true;

        } else {
            removeError(errorid);
            element.removeClass("ng-invalid");
            removeErrorInfo(element);
            return;
        }
    }
    if (errorFlag == true && maxlength != undefined && currentValue.length > maxlength) {
        if (errormsg == undefined) errormsg = "";
        //errormsg += " value entered exceeds the maximum length";
        errorInfo = false;
        errorFlag = false;
    }
    if (errorFlag == true && minlength != undefined && currentValue.length < minlength) {
        if (errormsg == undefined) errormsg = "";
        //errormsg += " minimum " + minlength + " characters ";
        errorInfo = false;
        errorFlag = false;
    }
    if (errorFlag == true && type == "text" && !reText.test(currentValue)) {
        //  failure.error[errorid] = errormsg;
        errorFlag = false;
        errorInfo = false;
    }
    if (errorFlag == true && type == "number" && !INTEGER_REGEXP.test(currentValue)) {
        //  failure.error[errorid] = errormsg;
        errorFlag = false;
        errorInfo = false;
    }
    if (errorFlag == true && type == "email" && !reEmail.test(currentValue)) {
        //  failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && type == "zip" && !rePostalZip.test(currentValue)) {
        //    failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && type == "date" && !reDate.test(currentValue)) {
        //   failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && type == "if") {
        errorFlag = false;
        errorInfo = false;
    }
    if (errorFlag == true && type == "daterange") {
        var daterecd = Date.parse(currentValue);
        var now = new Date();
        var yesterdayMs = now.getTime() - 1000 * 60 * 60 * 24 * minvalue; // Offset by one day;
        now.setTime(yesterdayMs);
        var datemmin = Date.parse(now);

        if (daterecd > datemmin) {
            errorInfo = false;
            errorFlag = false;
        } else {
            removeError(errorid);
            element.removeClass("ng-invalid");
            removeErrorInfo(element);
            return;
        }

    }
    if (errorFlag == true && type == "name" && !reName.test(currentValue)) {
        //   failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && type == "addr" && !reAddress.test(currentValue)) {
        //   failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && type == "phone" && !reNumber.test(currentValue)) {
        //   failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && type == "select" && currentValue == "") {
        //   failure.error[errorid] = errormsg;
        errorFlag = false;
    }
    if (errorFlag == true && parseInt(minvalue) > parseInt(currentValue)) {
        if (errormsg == undefined) errormsg = "";
        //errormsg += " minimum " + minvalue + " value expecting";
        errorInfo = false;
        errorFlag = false;
    }
    if (errorFlag == true && type.indexOf("[") != -1 && currentValue != "") {
        var testExp = new RegExp(type);
        if (testExp.test(currentValue) == false) {
            errorFlag = false;
        }
    }
    if (errorFlag == true && type.indexOf("[") == -1 && currentValue == "") {
        //    failure.error[errorid] = errormsg;
        errorFlag = false;

    }



    try {
        if (errorFlag == false) {
            addOrUpdateError(errorid, errormsg);
            //ngModel.$setValidity('invalid', false);
            element.addClass("error");
            if (errormsg == ""){
                errormsg = "Please provide the required information highlighted in red";
            }
            toastr.error(errormsg, "Validation");            if (errorInfo == false) {
                addErrorInfo(element, errormsg);
            }


            //This condition only for SVP Template...
            /*   if (type == "select") {
               svpApp.util.buildSelects();
            }*/
            //This condition only for SVP Template...

        } else {
            removeError(errorid);
            element.removeClass("error");

            removeErrorInfo(element);

        }

    } catch (e) {
        alert("error " + e)
    }
}
var addErrorInfo = function (element, errormsg) {
    if (errormsg != undefined) {
        var obj = element.parent();
        if (obj != undefined) {
            if (obj.find(".infoicon").length == 0) {

                obj.append('<a href="javascript:void(0)"  class="infoicon infoicon-error" data-toggle="tooltip" data-placement="right" title="' + errormsg + '">&nbsp;</a>');
                $('[data-toggle="tooltip"]').tooltip();
            }
        }
    }
}
var removeErrorInfo = function (element) {
    var obj = element.parent();
    if (obj != undefined) {
        if (obj.find(".infoicon").length > 0) {
            var removeObj = obj.find(".infoicon");
            removeObj.remove();
        }
    }
}
var ParameterValidation = function (attrs, key) {
    //This function will break vaildation parameter and return key value pair 
    var obj = attrs.valid.split("#_#");
    for (var i = 0; i <= obj.length - 1; i++) {
        var spl = obj[i].split("=");
        if (spl[0] == key) {
            return spl[1];
            
        }
    }
    return undefined;
    


}
var addOrUpdateError = function (errorid, errormsg) {
    //Add / Update Error Summary
    if (pageError.errorSummary.length != 0) {
        var alreadyErrorIdExists = false;
        for (var j = 0; j < pageError.errorSummary.length; j++) {
            if (pageError.errorSummary[j] != null && pageError.errorSummary[j].errorId == errorid) {
                alreadyErrorIdExists = true;
                pageError.errorSummary[j].errorId = errorid;
                pageError.errorSummary[j].errorMsg = errormsg;

            }
        }
        if (alreadyErrorIdExists == false) {
            pageError.errorSummary.push({ errorId: errorid, errorMsg: errormsg });
        }
    } else {
        pageError.errorSummary.push({ errorId: errorid, errorMsg: errormsg });
    }
   
};

var removeError = function (errorid) {
    //If the user updated correct value then remove that error

    for (var i = 0; i < pageError.errorSummary.length; i++) {
        if (pageError.errorSummary[i] != null) {
            if (pageError.errorSummary[i] != undefined && pageError.errorSummary[i].errorId == errorid) {
                //delete failure.errorSummary[i];
                pageError.errorSummary.splice(i, 1);
                break;
            }
        }
    }
    //setIframeHeight("ScsNavigator_wealthCreditDetailCtl_appHost");
};



var pageError = {
    submit: false,
    error: {},
    errorSummary: []
};
var INTEGER_REGEXP = /^\-?\d+$/;

var pageValidator = function (Parent) {


    /*
        $.each($("[reset]"), function (i, j) {
            if ($(j).is(":visible") == false || $(j).is(":disabled") == true) {
            //    $(j).trigger("change");
               
            }
        });*/
    setTimeout(function () {
        svpApp.util.buildSelects();
    }, 100);

    var searchObjStart = null;
    if (Parent == "modal") {
        searchObjStart = $(".modalcontainer").find("[valid]");
    }
    if (searchObjStart == null) {
        searchObjStart = $("[valid]");
    }
    $.each($(searchObjStart), function (i, j) {
        if ($(j).is(":visible") == false || $(j).is(":disabled") == true) {
            $(j).removeClass("ng-invalid");
            removeError($(j).attr("vid"));
        } else {
            $(j).trigger('change');
        }


    });

    //console.log(failure);
    var submitFlag = true;
    var scrollToId = "";
    angular.forEach(pageError.errorSummary, function (object, index) {
        if (object != undefined && object.errorMsg != "") {
            submitFlag = false;
            $("[vid='" + object.errorId + "']").addClass("ng-invalid");
            if (scrollToId == "")
                scrollToId = "[vid = '" + object.errorId + "']";
        }
    });
    pageError.submit = submitFlag;
    try {
        if (scrollToId != "") {
            $('html, body').scrollTop(0);
            $(parent.window).scrollTop(0);
        }
    } catch (e) {
    }
    return pageError.submit;
}
