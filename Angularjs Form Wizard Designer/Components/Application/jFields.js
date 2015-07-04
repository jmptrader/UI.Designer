//Horizontal form Configration
var jFieldsForm1 = {
    data:  [
        { label: 'Language Indicator', values: tempRepeat, valid: "valid=select", hint: 'Example: Alpha Numeric fields required', cls: 'col-sm-3' },
        { label: 'Reg. B Indicator',values: tempRepeat },
        { label: 'Sales Entity',values: tempRepeat },
        { label: 'Source',values: tempRepeat },
        { label: 'Sales Rep',values: tempRepeat },
        { label: 'Reservation code',values: tempRepeat },
        { btnlabel: 'Save', click: "btnSave()", cls: 'pull-right' }
    ]
};

var jFieldsForm2 = {
    data: [
        { label: 'Activity Code', text: "", valid: 'valid=number#_#vmsg=Activity code important', hint: 'Example: Numeric fields required' },
        { label: 'Activity Date', dtvalue: "03/09/2015" },
        { label: 'Activity Time', text: "" },
        { label: 'Activity Date', text: "" },
        { label: 'General Comments', text: "" },
        { label: 'CCH Misc', text: "" },
        { label: 'Route To', text: "" },
        { label: 'User ID', text: "" },
        { label: 'Workstate', values: tempRepeat },
        {
            btnlabel: 'Continue',
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

var jFieldsForm3 = {
    data: [
        { label: 'For TextBox', text: "" },
        { label: 'For Dropdown', values: tempRepeat },
        { label: 'For Check Box', chkvalue: "checked", chklabel: "Check box Component" },
        { label: 'For radio ', optvalue: "checked", optcheck:"a1", optlabel: "Radio Component" },
        { label: 'For radio ', optvalue: "unchecked", optcheck: "a1", optlabel: "Radio Component" },
        { btnlabel: 'Button', click: "", cls: 'pull-right' },
        
    ]

}

//Joining Diffrent Form into one layout and setting template
var jForms = {
    C2C:
        {
            heading: "C2CScreen", template: "HorizontalForm", fields: jFieldsForm2.data, menus: jMenu,
            space: "col-lg-6", classlabel: 'col-sm-4', clscomp: 'col-sm-8'
        },
    discovery:
        {
            heading: "Discovery", template: "HorizontalForm", fields: jFieldsForm1.data, menus: jMenu,
            space: "col-lg-6", classlabel: 'col-sm-4', clscomp: 'col-sm-8'
        }
};

//New Layout with jCard Form
var jCards = {
    Card: { heading: "Cards", template: "CardTemplate", fields: jFieldsForm4.data, space: "col-lg-12", clscomp: 'col-sm-8' },
    discovery:
            {
                heading: "Discovery", template: "HorizontalForm", fields: jFieldsForm1.data, menus: jMenu,
                space: "col-lg-6", classlabel: 'col-sm-4',clscomp:'col-sm-8'
            },
    C2C:
        {
            heading: "C2CScreen", template: "HorizontalForm", fields: jFieldsForm2.data, menus: jMenu,
            space: "col-lg-6", classlabel: 'col-sm-4', clscomp: 'col-sm-8'
        },
};


//
var TestForm = { "jFormPreview": { "heading": "Preview", "template": "HorizontalForm", "fields": [ { "label": "Activity Code", "type": "text", "model": "act_code", "valid": "valid=number#_#vmsg=Activity code important", "hint": "Example: Numeric fields required" }, { "label": "", "type": "button", "btnlabel": "Continue", "clickparam": { "p1": "nasir", "p2": "zakir" }, "blurparam": { "b1": "Mark", "b2": "Jolly" }, "cls": "pull-right" } ], "space": "col-lg-12", "clscomp": "col-lg-8", "classlabel": "col-lg-4" } }