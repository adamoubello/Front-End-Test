Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.form.field.Number',
    'Ext.form.field.Date',
    'Ext.tip.QuickTipManager'
]);

Ext.define('Task', {
    extend: 'Ext.data.Model',
    idProperty: 'taskId',
    fields: [
        {name: 'projectId', type: 'string'},
        {name: 'project', type: 'string'},
        {name: 'taskId', type: 'int'},
        {name: 'description', type: 'string'},
        {name: 'occupancy', type: 'string'},
        {name: 'estimate', type: 'int'},
        {name: 'night', type: 'int'},
        {name: 'rate', type: 'float'},
        {name: 'cost', type: 'float'},
        {name: 'due', type: 'date', dateFormat:'m/d/Y'}
    ]
});

var data = [
    {projectId: 'Offers', project: 'Yes', taskId: 112, description: 'Basement 1 Bed', occupancy: '2', estimate: 0, night: 0, rate: 9.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 113, description: 'Single Room', occupancy: '1',  estimate: 0, night: 0, rate: 28.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 114, description: 'Basic 2 Bed', occupancy: '2',  estimate: 0, night: 0, rate: 88.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 101, description: 'Basic Family Room', occupancy: '4', estimate: 0, night: 0, rate: 98.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 102, description: 'Deluxe Family Room', occupancy: '7', estimate: 0, night: 0, rate: 112.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 103, description: 'Deluxe 2 Bed', occupancy: '2',  estimate: 0, night: 0, rate: 109.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 121, description: 'One+One', occupancy: '2', estimate: 0, night: 0, rate: 78.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 105, description: 'Bridal Suite', occupancy: '2', estimate: 0, night: 0, rate: 167.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 106, description: 'President Suite', occupancy: '2', estimate: 0, night: 0, rate: 301.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 107, description: 'Queen Room', occupancy: '2',  estimate: 0, night: 0, rate: 99.99, due:'04/10/2015'},
    {projectId: 'Offers', project: 'Yes', taskId: 108, description: 'Mega XL Suite', occupancy: '9', estimate: 0, night: 0, rate: 412.99, due:'04/10/2015'}    
];

Ext.onReady(function(){
    
    Ext.tip.QuickTipManager.init();
    
    var store = Ext.create('Ext.data.Store', {
        model: 'Task',
        data: data,
        sorters: {property: 'rate', direction: 'ASC'},
        groupField: 'projectId'
    });

    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    });
    var showSummary = true;
    var grid = Ext.create('Ext.grid.Panel', {
        width: 920,
        height: 650,
        frame: true,
        title: 'Select your room',
        iconCls: 'icon-grid',
        renderTo: document.body,
        store: store,
        plugins: [cellEditing],
        dockedItems: [{
            dock: 'top',
            xtype: 'toolbar',
            items: [{
                tooltip: 'Toggle the visibility of the summary row',
                text: 'Toggle Summary',
                enableToggle: true,
                pressed: true,
                handler: function(){
                    var view = grid.getView();
                    showSummary = !showSummary;
                    view.getFeature('group').toggleSummaryRow(showSummary);
                    view.refresh();
                }
            },{
                tooltip: 'Click to book for your rooms',
                text: 'Book now',
                enableToggle: true,
                pressed: true,
				margin  : '5 0 0 742',
                handler: function(){
                    alert('Welcome in Hotel Fantastique!'); 
                    view.refresh();
                }
            }]
        }],
        features: [{
            id: 'group',
            ftype: 'groupingsummary',
            groupHeaderTpl: '{name}',
            hideGroupedHeader: true,
            enableGroupingMenu: false
        }],
        columns: [{
            text: 'Room name',
            flex: 1,
            tdCls: 'task',
            sortable: true,
            dataIndex: 'description',
            hideable: false,
            summaryType: 'count',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return 'Total';
            }
        },{
            text: 'Occupancy',
            width: 90,
            sortable: true,
            dataIndex: 'occupancy',
            hideable: false
        }, {
            header: 'Available',
            width: 80,
            sortable: true,
            dataIndex: 'project'
        }, {
            header: 'Price per room',
            width: 105,
            sortable: true,
            dataIndex: 'rate'
        }, {
            header: 'Number of rooms',
            width: 120,
			sortable: true,
            dataIndex: 'estimate',
            summaryType: 'sum',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return value ;
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return value ;
            },
            field: {
                xtype: 'numberfield'
            }
        }, {
            header: 'Overnight stay',
            width: 120,
            sortable: true,
            dataIndex: 'night',
            summaryType: 'sum',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return value ;
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return value ;
            },
            field: {
                xtype: 'numberfield'
            }
        }, {
            header: 'First Date',
            width: 90,
            sortable: true,
            dataIndex: 'due',
            renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            field: {
                xtype: 'datefield'
            }            
        }, {
            id: 'cost',
            header: 'Cost',
            width: 75,
            sortable: false,
            groupable: false,
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
                //return Ext.util.Format.usMoney(record.get('estimate') * record.get('rate') * record.get('night'));
				return Ext.util.Format.currency(record.get('estimate') * record.get('rate') * record.get('night'),' €',2,true);
            },
            dataIndex: 'cost',
            summaryType: function(records){
                var i = 0,
                    length = records.length,
                    total = 0,
                    record;

                for (; i < length; ++i) {
                    record = records[i];
                    total += record.get('estimate') * record.get('rate') * record.get('night');
                }
                return Ext.util.Format.number(total, '0,000.00') + ' €';
            }
        }]
    });
});
