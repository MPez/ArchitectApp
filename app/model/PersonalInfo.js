/*
 * File: app/model/PersonalInfo.js
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

Ext.define('ArchitectApp.model.PersonalInfo', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'surname',
                type: 'string'
            },
            {
                name: 'email',
                type: 'string'
            },
            {
                name: 'address',
                type: 'string'
            },
            {
                dateFormat: 'c',
                name: 'birthday',
                type: 'date'
            },
            {
                name: 'sex',
                type: 'string'
            },
            {
                name: 'colour',
                type: 'string'
            },
            {
                name: 'touch',
                type: 'string'
            },
            {
                name: 'cordova',
                type: 'string'
            },
            {
                name: 'architect',
                type: 'string'
            },
            {
                name: 'note',
                type: 'string'
            }
        ],
        validations: [
            {
                type: 'presence',
                field: 'name'
            },
            {
                type: 'presence',
                field: 'surname'
            },
            {
                type: 'inclusion',
                field: 'sex',
                list: [
                    'male',
                    'female'
                ]
            }
        ]
    }
});