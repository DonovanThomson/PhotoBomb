function onPhotoUriSuccess(imageUriToUpload){
    var url=encodeURI("http://192.168.2.4:8080/app/api/rest//uploadImage/");

    var params = new Object();
    params.your_param_name = "something";  //you can send additional info with the file

    var options = new FileUploadOptions();
    options.fileKey = "the_name_of_the_image_field"; //depends on the api
    options.fileName = imageUriToUpload.substr(imageUriToUpload.lastIndexOf('/')+1);
    options.mimeType = "image/jpeg";
    options.params = params;
    options.chunkedMode = true; //this is important to send both data and files

    var headers={'Authorization':'TOKEN_BASED_AUTHENTICATION '+ localStorage.getItem('Token')};
    options.headers = headers;

    var ft = new FileTransfer();
    console.log("Donovan");
    console.log("image uri" + imageUriToUpload)
    ft.upload(imageUriToUpload, url, win, fail, options, true);

}

function win(r) {
    console.log("Code = " + r.responseCode.toString()+"\n");
    console.log("Response = " + r.response.toString()+"\n");
    console.log("Sent = " + r.bytesSent.toString()+"\n");
    alert("Code Slayer!!!");
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
}

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
                    navigator.camera.getPicture(onPhotoUriSuccess, onFail,
                        {
                            quality: 40,
                            destinationType:Camera.DestinationType.FILE_URI,
                            encodingType : navigator.camera.EncodingType.JPEG,
                            targetWidth: 500,
                            targetHeight: 500,
                            saveToPhotoAlbum: 1
                        });

//                    function onSuccess(imageData){
//                        var image = document.getElementById('myImage');
//                        image.src = "data:image/jpeg;base64," + imageData;
//
//                        console.log(image);
//                             Ext.Viewport.mask({xtype:'loadmask', message:'Uploading image...'});
//                             Ext.Ajax.request({
//                                 url:'http://192.168.2.4:8080/app/api/rest//uploadImage/',
//                                 method: 'POST',
//                                 headers: {Authorization: 'TOKEN_BASED_AUTHENTICATION '+ localStorage.getItem('Token')},
//                                 params:{ image:image },
//                                 success: function(response) {
//                                     Ext.Viewport.unmask();
//                                     Ext.Msg.alert("Success");
//                                     refreshImages();
//                                     console.log(response.responseText);
//                                 },
//                                 failure: function(response){
//                                     Ext.Viewport.unmask();
//                                     Ext.Msg.alert("Failure");
//                                     console.log(response.responseText);
//                                 }
//                             });
//                    }// end of on success function

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
