// --------------------------------------------------------------------------------------------------------------------
// <copyright file="appjs" company="Wells Fargo">
//  Wells Fargo Consumer Lending Sales Presentation
//  Copyright ©2010 - 2020 Wells Fargo. All rights reserved.
//  This Software is the confidential and proprietary information of Wells Fargo.
//  Usage governed by the license agreement with Wells Fargo.
// </copyright>
// <summary>
//  It Start the angularjs engine to work on html
//  veryimportant call in the project to begin
//	
// </summary>
// <remarks></remarks>
// <author></author>
// <version>1.0</version>
// <revision></revision>
// <includesource>yes</includesource>
// <todo></todo>
// <developer>Nasir Sayed</developer>
// --------------------------------------------------------------------------------------------------------------------

var HttpUrl = "http://kent.nasz.us/mumbra/php/qry.php";
var HttpQry = "";
function resizeIframe(obj) {
                                       obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                                       obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
                        }

var get_params = function(search_string) {

  var parse = function(params, pairs) {
    var pair = pairs[0];
    var parts = pair.split('=');
    var key = decodeURIComponent(parts[0]);
    var value = decodeURIComponent(parts.slice(1).join('='));

    // Handle multiple parameters of the same name
    if (typeof params[key] === "undefined") {
      params[key] = value;
    } else {
      params[key] = [].concat(params[key], value);
    }

    return pairs.length == 1 ? params : parse(params, pairs.slice(1))
  }

  // Get rid of leading ?
  return search_string.length == 0 ? {} : parse({}, search_string.substr(1).split('&'));
}

var params = get_params(location.search);



var previewimage = function(ElementName,ElementValue){
    if(ElementValue == "") return;
     if (ElementName == "logo"){
        $('div[name = "'+ElementName+'_preview"]').html("<img src='http://kent.nasz.us/app_php/shifaappsettings/mumbra/" + ElementValue + "_thumb.jpg' />");
    }
    else {
        if (ElementValue != "")
        {
            $('div[name = "'+ElementName+'_preview"]').html($('div[name = "'+ElementName+'_preview"]').html() + "<span> </span>");
        }
        $('div[name = "'+ElementName+'_preview"]').html($('div[name = "'+ElementName+'_preview"]').html() + "<img src='http://kent.nasz.us/app_php/shifaappsettings/mumbra/" + ElementValue + "_thumb.jpg' />");

    }
}
var app = angular.module("service", []);
var app = angular.module("app", ['service']);


app.factory('API', function($http) {

var myService = {
    sideBar: function() {
      var promise = $http.post(HttpUrl + "?qry=select Name from mumbra where deleted = 0 and categoy = 'Mumbra'").then(function (response) {
        console.log(response);
        return response.data;
      });
      return promise;
    },


    call: function() {
                console.log(HttpUrl +"?"+ HttpQry);
              var promise = $http.post(HttpUrl +"?"+ HttpQry).then(function (response) {
                console.log("API CALL() ");
                console.log(response);
                return response.data;
              });
              return promise;
            },

  };

  return myService;

      });
