var tempRepeat = [

  { label: 'Select', value: "" },
  { label: 'John', value: 25 },
  { label: 'Jessie', value: 30 },
  { label: 'Johanna', value: 28 },
  { label: 'Joy', value: 15 },
  { label: 'Mary', value: 28 },
  { label: 'Peter', value: 95 },
  { label: 'Sebastian', value: 50 },
  { label: 'Erika', value: 27 },
  { label: 'Patrick', value: 40 },
  { label: 'Samantha', value: 60 }
]





var jColSize = [
    
        { label: 'Free Size', value: '' },
        { label: 'Size 1', value: 'col-sm-1' },
        { label: 'Size 2', value: 'col-sm-2' },
         { label: 'Size 3', value: 'col-sm-3' },
    { label: 'Size 4', value: 'col-sm-4' },
        { label: 'Size 5', value: 'col-sm-5' },
         { label: 'Size 6', value: 'col-sm-6' },
    { label: 'Size 7', value: 'col-sm-7' },
        { label: 'Size 8', value: 'col-sm-8' },
         { label: 'Size 9', value: 'col-sm-9' },
    { label: 'Size 10', value: 'col-sm-10' },
        { label: 'Size 11', value: 'col-sm-11' },
         { label: 'Size 12', value: 'col-sm-12' },
    { label: 'Pull Right', value: 'pull-right' },
        { label: 'pull left', value: 'pull-left' }
]
var jLayoutSize = [

        { label: 'Single Cols', value: 'col-sm-12' },
        { label: 'Two Cols', value: 'col-sm-6' },
        { label: 'Multi Cols', value: 'col-sm-3' },
        
        
]
jLayoutSize = jLayoutSize.concat(jColSize);

var jDBFields = [
                   
                   { label: 'Name', value: 'Name' },
                   { label: 'Register Mobile', value: 'Intensity' },
                  { label: 'Category', value: 'categoy' },
                 { label: 'Lat & Lng', value: 'lat_lng' },
                 { label: 'Item Type', value: 'sublevel' },
                 { label: 'Logo', value: 'logo' },
                 { label: 'Picture', value: 'picture' },
                 { label: 'Price', value: 'remedies.Price' },
                 { label: 'HTML', value: 'remedies.Html' },
                 { label: 'Phone', value: 'remedies.Phone' },
                 { label: 'Time (Eg. 20Min Left)', value: 'remedies.Time' },
                 { label: 'Hours (Eg. Open 9AM to 10PM)', value: 'remedies.Hours' },
                 { label: 'Address', value: 'remedies.Address' },
                 { label: 'Description', value: 'remedies.Details' },
                 { label: 'Menu', value: 'remedies.Menu' },
                 { label: 'Group Name', value: 'remedies.Group_' },
                 { label: 'Website', value: 'remedies.Website' },
                 { label: 'Email', value: 'remedies.Email' },
                 { label: 'Check Item', value: 'remedies.chk~Group_' },
                 { label: 'Other (Ex. remedies.***)', value: 'remedies.' },
                   
                   ]




  var  JStaticData = [
                 { label:"Office Time (9 Hours)", value : [
                                                 { label: '7:00AM to 3:00PM', value: '7:00AM to 3:00PM' },
                                                 { label: '8:00AM to 4:00PM', value: '8:00AM to 4:00PM' },
                                                 { label: '9:00AM to 5:00PM', value: '9:00AM to 5:00PM' },
                                                 { label: '10:00AM to 6:00PM', value: '10:00AM to 6:00PM' },
                                                 { label: '11:00AM to 7:00PM', value: '11:00AM to 7:00PM' },
                                                 { label: '12:00AM to 8:00PM', value: '12:00AM to 8:00PM' },
                                                 { label: '1:00PM to 9:00PM', value: '1:00PM to 9:00PM' },
                                                           { label: '2:00PM to 10:00PM', value: '2:00PM to 10:00PM' },
                                                           { label: '3:00PM to 11:00PM', value: '3:00PM to 11:00PM' },
                                                           { label: '4:00PM to 12:00PM', value: '3:00PM to 12:00AM' },
                                                 ]
                 },{ label:"Restaurant Time", value : [
                                                       { label: 'Name', value: 'Name' },
                                                       { label: 'Register Mobile', value: 'Intensity' },
                                                       { label: 'Category', value: 'categoy' },
                                                       
                                                       ]
                 },{ label:"School Time", value : [
                                                   { label: 'Name', value: 'Name' },
                                                   { label: 'Register Mobile', value: 'Intensity' },
                                                   { label: 'Category', value: 'categoy' },
                                                   
                                                   ]
                 },{ label:"Classes Time", value : [
                                                    { label: 'Name', value: 'Name' },
                                                    { label: 'Register Mobile', value: 'Intensity' },
                                                    { label: 'Category', value: 'categoy' },
                                                    
                                                    ]
                 },{ label:"Booking Time", value : [
                                                    { label: 'Name', value: 'Name' },
                                                    { label: 'Register Mobile', value: 'Intensity' },
                                                    { label: 'Category', value: 'categoy' },
                                                    
                                                    ]
                 },{ label:"Namaz Time", value : [
                                                  { label: 'Fazar', value: 'Name' },
                                                  { label: 'Register Mobile', value: 'Intensity' },
                                                  { label: 'Category', value: 'categoy' },
                                                  
                                                  ]
                 }
                 ]


var jMenu = [
        { title: 'Reset', href: 'somevalue' },
        { title: 'Delete', href: 'myvalue' },
         { title: 'Your Menu', href: 'myvalue' }
]





var jLayout = [

    {title:'Select', value:"Select"},
    {title:'Row', value:"Row"},
    {title:'Col', value:"Col"},
    {title:'iBox', value:"iBox"},
    {title:'iBoxCard', value:"iBoxCard"},
    {title:'iBoxChat', value:"iBoxChat"},
    {title:'iBoxChatWindow', value:"iBoxChatWindow"},
    {title:'iBoxCheckList', value:"iBoxCheckList"},
    {title:'iBoxFeed', value:"iBoxFeed"},
    {title:'iBoxFrame', value:"iBoxFrame"},
    {title:'iBoxFramePoster', value:"iBoxFramePoster"},
    {title:'iBoxFrameSquare', value:"iBoxFrameSquare"},
    {title:'iBoxFrameSquareOrange', value:"iBoxFrameSquareOrange"},
    {title:'iBoxGallery', value:"iBoxGallery"},
    {title:'iBoxGalleryCaption', value:"iBoxGalleryCaption"},
    {title:'iBoxGallerySlider', value:"iBoxGallerySlider"},
    {title:'iBoxIcons', value:"iBoxIcons"},
    {title:'iBoxInfoLike', value:"iBoxInfoLike"},
    {title:'iBoxInfoTextView', value:"iBoxInfoTextView"},
    {title:'iBoxInfoUser', value:"iBoxInfoUser"},
    {title:'iBoxIPinBoard', value:"iBoxIPinBoard"},
    {title:'iBoxList', value:"iBoxList"},
    {title:'iBoxMultipleHCols', value:"iBoxMultipleHCols"},


    {title:'iBoxMultipleVRows', value:"iBoxMultipleVRows"},
    {title:'iBoxPoster', value:"iBoxPoster"},
    {title:'iBoxProfile', value:"iBoxProfile"},
    {title:'iBoxQuestionFAQ', value:"iBoxQuestionFAQ"},
    {title:'iBoxSimpleCard', value:"iBoxSimpleCard"},


    {title:'iBoxSimpleChat', value:"iBoxSimpleChat"},
    {title:'iBoxSimpleComments', value:"iBoxSimpleComments"},
    {title:'iBoxSimplePoster', value:"iBoxSimplePoster"},
    {title:'iBoxTab', value:"iBoxTab"},
    {title:'iBoxTable', value:"iBoxTable"},


    {title:'iBoxTablePreview', value:"iBoxTablePreview"},
    {title:'iBoxTablePreviewWithMap', value:"iBoxTablePreviewWithMap"},
    {title:'iBoxTableWithButtonText', value:"iBoxTableWithButtonText"},
    {title:'iBoxTabPanel', value:"iBoxTabPanel"},
    {title:'iBoxTimeLine', value:"iBoxTimeLine"},



    {title:'iBoxVideo', value:"iBoxVideo"},
    {title:'iBoxVideoDescription', value:"iBoxVideoDescription"},
    {title:'iBoxTableWithButtonText', value:"iBoxTableWithButtonText"},
    {title:'iBoxWebsite', value:"iBoxWebsite"},



    {title:'iBoxIcons', value:"iBoxIcons"},
    {title:'iBoxButtons', value:"iBoxButtons"},


]




































var jFieldsForm4 = {
    data: [
        { phone: "(123) 456-7890", address: "795 Folsom Ave ", company: "Twitter, In", location: "Riviera State 456/4566", designation: "Graphics designer", src: 'a2', cls: "img-circle m-t-xs img-responsive" },
        
         { phone: "(345) 567-3456", address: "Harrison,\n Santa Clara", company: "Yahoo, Inc", location: "Van Nuys State 32/106", designation: "Software designer", src: 'a4', cls: "img-circle m-t-xs img-responsive" },
        
         { phone: "(567) 456-7890", address: "1220 Concord Ave\n Concord", company: "Microsoft", location: "Mark Street 65/345", designation: "Marketing", src: 'a3', cls: "img-circle m-t-xs img-responsive" },
        
        { phone: "(345) 567-3456", address: "1239 Harrison St, \n Santa Clara", company: "Yahoo, Inc", location: "Van Nuys State 32/106", designation: "Software designer", src: 'a5', cls: "img-circle m-t-xs img-responsive" },
        

         { phone: "(567) 456-7890", address: "1220 Concord Ave\n Concord", company: "Microsoft", location: "Mark Street 65/345", designation: "Marketing", src: 'a1', cls: "img-circle m-t-xs img-responsive" },
        
         { phone: "(123) 456-7890", address: "795 Folsom Ave, Suite 600\n San Francisco", company: "Twitter, In", location: "Riviera State 456/4566", designation: "Graphics designer", src: 'a7', cls: "img-circle m-t-xs img-responsive" },

    ]

};