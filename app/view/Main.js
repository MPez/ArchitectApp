/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ArchitectApp.view.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.dataview.List',
        'Ext.Panel',
        'Ext.form.Panel',
        'Ext.field.Text',
        'Ext.field.Email',
        'Ext.field.DatePicker',
        'Ext.field.Radio',
        'Ext.Map',
        'Ext.form.FieldSet',
        'Ext.Audio',
        'Ext.Video',
        'Ext.Img'
    ],

    config: {
        itemId: 'mainView',
        items: [
            {
                xtype: 'container',
                title: 'Home',
                iconCls: 'home',
                itemId: 'homeView',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        itemId: 'homeTitleBar',
                        title: 'Home',
                        items: [
                            {
                                xtype: 'button',
                                hidden: true,
                                itemId: 'backMediaButton',
                                ui: 'back',
                                iconCls: 'arrow_left'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    console.log('onConnectionButtonHandler');

                                    var type = navigator.connection.type;

                                    var states = {};
                                    states[Connection.UNKNOWN]  = 'Unknown connection';
                                    states[Connection.ETHERNET] = 'Ethernet connection';
                                    states[Connection.WIFI]     = 'WiFi connection';
                                    states[Connection.CELL_2G]  = 'Cell 2G connection';
                                    states[Connection.CELL_3G]  = 'Cell 3G connection';
                                    states[Connection.CELL_4G]  = 'Cell 4G connection';
                                    states[Connection.CELL]     = 'Cell generic connection';
                                    states[Connection.NONE]     = 'No network connection';

                                    Ext.Msg.alert('Connection information', 'Connection type: ' + states[type]);
                                },
                                itemId: 'connectionButton',
                                iconCls: 'refresh'
                            },
                            {
                                xtype: 'button',
                                align: 'right',
                                hidden: true,
                                itemId: 'loadContactsButton',
                                text: 'Load Contacts'
                            },
                            {
                                xtype: 'button',
                                align: 'right',
                                hidden: true,
                                itemId: 'trashContactsButton',
                                iconCls: 'trash'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        flex: 1,
                        itemId: 'sensorList',
                        ui: 'round',
                        itemTpl: [
                            '<div>{name}</div>'
                        ],
                        store: 'Sensors',
                        onItemDisclosure: false
                    },
                    {
                        xtype: 'container',
                        flex: 4,
                        itemId: 'sensorView',
                        layout: {
                            type: 'card'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                itemId: 'barcode',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: {
                                            align: 'center',
                                            pack: 'center',
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                itemId: 'barcodeButton',
                                                margin: 10,
                                                text: 'Scan barcode'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'list',
                                        flex: 6,
                                        itemId: 'barcodeList',
                                        emptyText: 'No barcodes found.',
                                        itemTpl: [
                                            '<div>Code: {code}, Format: {format}</div>'
                                        ],
                                        store: 'Barcodes'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                itemId: 'camera',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: {
                                            align: 'center',
                                            pack: 'center',
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                itemId: 'cameraButton',
                                                margin: 10,
                                                text: 'Take a picture from camera'
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'galleryButton',
                                                margin: 10,
                                                text: 'Load from gallery'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'dataview',
                                        flex: 6,
                                        itemId: 'pictureDataView',
                                        emptyText: 'No images found.',
                                        itemTpl: [
                                            '<div><img src="{url}" />{timestamp}</div>'
                                        ],
                                        store: 'Pictures'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                itemId: 'media',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        flex: 7,
                                        height: '100%',
                                        itemId: 'mediaContainer',
                                        layout: {
                                            type: 'card'
                                        },
                                        items: [
                                            {
                                                xtype: 'panel',
                                                itemId: 'mediaPanel',
                                                layout: {
                                                    type: 'vbox'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'panel',
                                                        flex: 1,
                                                        layout: {
                                                            align: 'center',
                                                            pack: 'center',
                                                            type: 'hbox'
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'button',
                                                                itemId: 'audioButton',
                                                                margin: 10,
                                                                text: 'Capture Audio'
                                                            },
                                                            {
                                                                xtype: 'button',
                                                                itemId: 'videoButton',
                                                                margin: 10,
                                                                text: 'Capture Video'
                                                            },
                                                            {
                                                                xtype: 'button',
                                                                itemId: 'imageButton',
                                                                margin: 10,
                                                                text: 'Capture Image'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'list',
                                                        flex: 6,
                                                        itemId: 'mediaList',
                                                        itemTpl: [
                                                            '<div>Name: {name}, Type: {type}, Timestamp: {timestamp}</div>'
                                                        ],
                                                        store: 'AudioVideos',
                                                        onItemDisclosure: true
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                itemId: 'audioPanel',
                                                items: [
                                                    {
                                                        xtype: 'audio',
                                                        centered: true,
                                                        hidden: false,
                                                        itemId: 'audio',
                                                        width: '100%'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                itemId: 'videoPanel',
                                                items: [
                                                    {
                                                        xtype: 'video',
                                                        centered: true,
                                                        height: 320,
                                                        itemId: 'video',
                                                        width: 640
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                itemId: 'imagePanel',
                                                items: [
                                                    {
                                                        xtype: 'image',
                                                        centered: true,
                                                        height: 400,
                                                        itemId: 'image',
                                                        width: 400
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        hidden: true,
                                        itemId: 'mediaControlPanel',
                                        layout: {
                                            align: 'center',
                                            pack: 'center',
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                handler: function(button, event) {
                                                    console.log('onPlayButtonHandler');

                                                    var panel = Ext.ComponentQuery.query('container#mediaContainer')[0].getActiveItem();
                                                    //var media = panel.getComponent('#audio' || '#video');
                                                    var media = panel.getAt(0);
                                                    media.play();
                                                },
                                                itemId: 'playButton',
                                                margin: 10,
                                                ui: 'confirm',
                                                text: 'Play'
                                            },
                                            {
                                                xtype: 'button',
                                                handler: function(button, event) {
                                                    console.log('onPauseButtonHandler');

                                                    var panel = Ext.ComponentQuery.query('container#mediaContainer')[0].getActiveItem();
                                                    //var media = panel.getComponent('#audio' || '#video');
                                                    var media = panel.getAt(0);
                                                    media.pause();
                                                },
                                                itemId: 'pauseButton',
                                                margin: 10,
                                                ui: 'action',
                                                text: 'Pause'
                                            },
                                            {
                                                xtype: 'button',
                                                handler: function(button, event) {
                                                    console.log('onStopButtonHandler');

                                                    var panel = Ext.ComponentQuery.query('container#mediaContainer')[0].getActiveItem();
                                                    //var media = panel.getComponent('#audio' || '#video');
                                                    var media = panel.getAt(0);
                                                    media.stop();
                                                },
                                                itemId: 'stopButton',
                                                margin: 10,
                                                ui: 'decline',
                                                text: 'Stop'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'formpanel',
                                itemId: 'fileForm',
                                scrollable: 'vertical',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        itemId: 'fileFieldSet',
                                        instructions: 'Tell us about yourself',
                                        title: 'Personal Info',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Name',
                                                name: 'name',
                                                required: true,
                                                value: '',
                                                placeHolder: 'Your name'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Surname',
                                                name: 'surname',
                                                required: true,
                                                value: '',
                                                placeHolder: 'Your surname'
                                            },
                                            {
                                                xtype: 'emailfield',
                                                label: 'Email',
                                                name: 'email',
                                                value: '',
                                                placeHolder: 'email@example.com'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Address',
                                                name: 'address',
                                                value: '',
                                                placeHolder: 'Your address'
                                            },
                                            {
                                                xtype: 'datepickerfield',
                                                label: 'Date of Birth',
                                                name: 'birthday',
                                                value: {
                                                    year: 1980,
                                                    month: 1,
                                                    day: 1
                                                },
                                                placeHolder: 'dd/mm/yyyy',
                                                dateFormat: 'd/m/Y',
                                                picker: {
                                                    slotOrder: [
                                                        'day',
                                                        'month',
                                                        'year'
                                                    ],
                                                    yearFrom: 1960,
                                                    yearTo: 2000
                                                }
                                            },
                                            {
                                                xtype: 'radiofield',
                                                label: 'Male',
                                                name: 'sex',
                                                value: 'male',
                                                checked: true
                                            },
                                            {
                                                xtype: 'radiofield',
                                                label: 'Female',
                                                name: 'sex',
                                                value: 'female'
                                            },
                                            {
                                                xtype: 'selectfield',
                                                label: 'Colour',
                                                name: 'colour',
                                                placeHolder: 'Your favourite colour',
                                                autoSelect: false,
                                                options: [
                                                    {
                                                        text: 'Red',
                                                        value: 'red'
                                                    },
                                                    {
                                                        text: 'Orange',
                                                        value: 'orange'
                                                    },
                                                    {
                                                        text: 'Yellow',
                                                        value: 'yellow'
                                                    },
                                                    {
                                                        text: 'Green',
                                                        value: 'green'
                                                    },
                                                    {
                                                        text: 'Blue',
                                                        value: 'blue'
                                                    },
                                                    {
                                                        text: 'Violet',
                                                        value: 'violet'
                                                    }
                                                ],
                                                usePicker: true
                                            },
                                            {
                                                xtype: 'checkboxfield',
                                                label: 'Sencha Touch',
                                                name: 'touch'
                                            },
                                            {
                                                xtype: 'checkboxfield',
                                                label: 'Apache Cordova',
                                                name: 'cordova'
                                            },
                                            {
                                                xtype: 'checkboxfield',
                                                label: 'Sencha Architect',
                                                name: 'architect'
                                            },
                                            {
                                                xtype: 'textareafield',
                                                label: 'Note',
                                                name: 'note',
                                                placeHolder: 'Write some notes...'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        layout: {
                                            align: 'center',
                                            pack: 'end',
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                itemId: 'restoreFileButton',
                                                margin: '0 5',
                                                ui: 'action',
                                                text: 'Restore'
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'backupFileButton',
                                                margin: '0 5',
                                                ui: 'action',
                                                text: 'Backup'
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'deleteFileButton',
                                                margin: '0 10 0 5',
                                                ui: 'decline',
                                                text: 'Delete'
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'cancelFileButton',
                                                margin: '0 5',
                                                ui: 'action',
                                                text: 'Cancel'
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'loadFileButton',
                                                margin: '0 5 0 10',
                                                ui: 'action',
                                                text: 'Load'
                                            },
                                            {
                                                xtype: 'button',
                                                centered: false,
                                                itemId: 'saveFileButton',
                                                margin: '0 5',
                                                ui: 'confirm',
                                                text: 'Save'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                itemId: 'contacts',
                                emptyText: 'No contacts found.',
                                itemTpl: [
                                    '<div>{name} {surname} {address} {phoneNumber} {email}</div>'
                                ],
                                store: 'Contacts',
                                grouped: true
                            },
                            {
                                xtype: 'formpanel',
                                itemId: 'device',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        itemId: 'deviceFieldSet',
                                        title: 'Device info',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Model',
                                                name: 'model',
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Platform',
                                                name: 'platform',
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Version',
                                                name: 'version',
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Cordova',
                                                name: 'cordova',
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'UUID',
                                                name: 'uuid',
                                                readOnly: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Location',
                iconCls: 'maps',
                itemId: 'locationView',
                layout: {
                    animation: 'flip',
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'panel',
                        itemId: 'locationPanel',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Location',
                                items: [
                                    {
                                        xtype: 'button',
                                        align: 'right',
                                        itemId: 'locateButton',
                                        iconCls: 'locate'
                                    },
                                    {
                                        xtype: 'button',
                                        align: 'right',
                                        itemId: 'positionButton',
                                        iconCls: 'search'
                                    }
                                ]
                            },
                            {
                                xtype: 'map',
                                height: '100%',
                                itemId: 'map'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        itemId: 'locationVisitedPanel',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Location Visited',
                                items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'backLocationButton',
                                        ui: 'back',
                                        iconCls: 'arrow_left'
                                    }
                                ]
                            },
                            {
                                xtype: 'list',
                                height: '100%',
                                itemId: 'positionList',
                                emptyText: 'No positions found...',
                                itemTpl: [
                                    '<div>Latitude: {latitude}, Longitude: {longitude}, Timestamp: {timestamp}</div>'
                                ],
                                store: 'Positions'
                            }
                        ]
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});