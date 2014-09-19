Ext.define('PhotoBomb.view.LoginView',{
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Password',  'Ext.Img'

    ],
    xtype:'vulamobi-loginview',
    id:'loginForm',

    config:{
        fullscreen: true,
        scrollable: true,
        styleHtmlContent: true,
        title: 'Login',
        iconCls:'user',


        layout: {
            type:'vbox'
        },

        items:[
            {
                xtype:'titlebar',
                title: 'PhotoBomb',
                docked:'top'
            },
            {
                xtype   : 'panel',
                html    : '<img width=100% src="resources/images/logo1.jpg" />'
            },
            {
                xtype: 'fieldset',
                title: 'Login',
                items:[
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        name: 'username',
                        value: 'donovan.thomson'

                    },
                    {
                        xtype:'passwordfield',
                        label: 'Password',
                        name: 'password',
                        value: 'password$123'

                    }
                ]
            },
            {
                xtype: 'button',
                ui:'confirm',
                text:'Login',
                action:'submitLogin'
                //  id:'loginButton'
            }
        ]
    }
});


