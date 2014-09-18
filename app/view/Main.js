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
                    navigator.camera.getPicture(onSuccess, onFail, {quality:50, destinationType:0});

                    function onSuccess(imageData){
//                             Ext.Viewport.mask({xtype:'loadmask', message:'Uploading image...'});
//                             Ext.Ajax.request({
//                                 url:'http://people.cs.uct.ac.za/~swatermeyer/VulaMobi/ajax.php?gallery/upload',
//                                 method: 'POST',
//                                 timeout: 12000,
//                                 params:{
//                                     image:imageData,
//                                     username:localStorage.getItem("username"),
//					                    password:localStorage.getItem("password")
//                                 },
//                                 success: function(response)
//                                 {
//                                     Ext.Viewport.unmask();
//                                     Ext.Msg.alert(response.responseText);
//                                     refreshImages();
//                                     console.log(response.responseText);
//                                 },
//                                 failure: function(response){
//                                     Ext.Viewport.unmask();
//                                     Ext.Msg.alert(response.responseText);
//                                     console.log(response.responseText);
//                                 }
//                             });
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
