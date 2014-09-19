Ext.define('PhotoBomb.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.Button',
        'Ext.Img'
    ],
    config: {
        layout: {
            type:"vbox",
            pack:"center",
            align:"center"
        },
        items: [
            {
                xtype: "image",
                src: "http://placehold.it/200x200",
                width: 200,
                height: 200
            },
            {
                xtype: "button",
                text: "Photo",
                handler: function()
                {
                    console.log('Handler for launching camera');
                    navigator.camera.getPicture(onSuccess, onFail, {quality:50, destinationType:Camera.DestinationType.DATA_URL});

                    function onSuccess(imageData){
                        console.log(imageData);
                             Ext.Viewport.mask({xtype:'loadmask', message:'Uploading image...'});
                             Ext.Ajax.request({
                                 url:'http://192.168.0.213:8080/app/api/rest//uploadImage/',
                                 method: 'POST',
                                 headers: {Authorization: 'TOKEN_BASED_AUTHENTICATION '+ localStorage.getItem('Token')},
                                 timeout: 12000,
                                 params:{ image:imageData },
                                 success: function(response) {
                                     Ext.Viewport.unmask();
                                     Ext.Msg.alert("Success");
                                     refreshImages();
                                     console.log(response.responseText);
                                 },
                                 failure: function(response){
                                     Ext.Viewport.unmask();
                                     Ext.Msg.alert("Failure");
                                     console.log(response.responseText);
                                 }
                             });
                    }// end of on success function

                    function onFail(){
                        Ext.Msg.alert(message);
                        console.log(message);
                    }

                    function refreshImages()
                    {

                        console.log('Image Gallery refreshed');
                    }

                }
            }
        ]
    }
});
