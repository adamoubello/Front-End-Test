Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', 'ux/');

Ext.require([
    'Ext.data.*',
    'Ext.grid.*',
    'Ext.util.*',
    'Ext.tip.QuickTipManager',
    'Ext.ux.data.PagingMemoryProxy',
    'Ext.toolbar.Paging',
    'Ext.ux.SlidingPager'
]);

Ext.onReady(function(){
    
    Ext.tip.QuickTipManager.init();

    var myData = [
        ['Pellentesque ligula nibh, lacinia eget pharetra ut, vulputate vitae odio. Donec non mattis nisi. Pellentesque elit leo, tincidunt nec felis vitae, aliquet imperdiet purus. In elit ante, vestibulum non accumsan at, volutpat eget dolor. Quisque ut tincidunt elit. Curabitur rutrum dignissim enim ac aliquet. Curabitur et aliquam nisl.',71.72,5,'Malcolm Reynolds','9/1 12:00am'],
        ['Duis ac nisi id lorem rhoncus tempus eu sit amet nisi. Aenean ultrices congue ligula, ac molestie velit ultricies a. Nulla ac nunc et nisi placerat interdum sit amet ut erat. Integer vulputate nulla id orci cursus, eget ullamcorper justo ultricies. Nulla lorem dui, euismod non porttitor eu, sagittis in lacus. In suscipit lectus non viverra luctus. Pellentesque egestas, dolor at luctus eleifend, velit dui viverra risus, ac rutrum sapien ante at massa. Donec imperdiet consequat laoreet.',29.01,8,'Zoe Washburne','9/1 12:00am'],
        ['Etiam posuere, magna sit amet ullamcorper auctor, odio urna tempor velit, sit amet tincidunt lorem diam a velit. Integer a dapibus nunc. In iaculis vel sem ut gravida.',83.81,3,'Hoban Washburne','9/1 12:00am'],
        ['Etiam condimentum sodales dui in vestibulum. Vivamus euismod egestas porttitor. Proin dictum tempor euismod. Suspendisse elit nulla, elementum eu ornare in, tempus in massa. Proin elit sem, posuere nec tempor eget, suscipit sit amet dui. Aliquam in vehicula lorem. Praesent vitae vestibulum ante, nec vestibulum metus. Morbi commodo diam in leo semper ornare. Phasellus et diam magna.',52.55,10,'Inara Serra','9/1 12:00am'],
        ['Maecenas cursus ut erat vitae vestibulum. Fusce feugiat dignissim augue consequat condimentum. Donec risus felis, ultricies a velit sed, varius ullamcorper enim. Suspendisse ultrices non tortor non lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',52.55,9,'Jayne Cobb','9/1 12:00am'],
        ['Donec adipiscing lacus sed neque cursus ullamcorper. Vestibulum tellus lectus, molestie vitae augue et, egestas convallis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec porttitor mi vitae mauris aliquam, non accumsan odio tincidunt. Aliquam semper enim quam, ac cursus lectus dignissim vitae. Suspendisse nec rutrum ligula.',31.61,4,'Kaylee Frye','9/1 12:00am'],
        ['Nullam et leo placerat lectus fringilla varius vel a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh eros, blandit at aliquam eu, ullamcorper eu diam. Etiam id viverra lacus, rutrum suscipit nulla. Maecenas adipiscing, mi sit amet iaculis congue, urna massa vestibulum tortor, a tempus nibh tortor id dui.',75.43,7,'Simon Tam','9/1 12:00am'],
        ['Maecenas semper, orci eget cursus aliquam, orci tellus sodales urna, nec varius nisi arcu gravida velit. Proin ultrices egestas nunc, eget dapibus erat sollicitudin in. Fusce fermentum dignissim ipsum sollicitudin tincidunt. Aliquam erat volutpat. Suspendisse in ornare ante.',67.27,2,'River Tam','9/1 12:00am'],
        ['Nullam purus ante, rhoncus ac malesuada at, bibendum nec urna. Cras lobortis viverra feugiat. Praesent sapien elit, sagittis vel orci sed, congue consequat nulla.',49.37,10,'Derrial Book','9/1 12:00am'],
        ['Donec malesuada semper lectus sed sagittis. Sed laoreet consectetur tortor, ac tempus ipsum malesuada non. Aenean dapibus leo sed sapien rhoncus, at dapibus ligula porta. Morbi tincidunt, urna eget ullamcorper aliquam, augue lectus placerat orci, tristique aliquet ipsum nisi id orci. Nulla vulputate lectus justo, eu dapibus lectus sodales ac. Donec volutpat nibh mi. Proin eu justo vitae dolor accumsan ultrices vel non ante.',40.48,9,'Sheriff Bourne','9/1 12:00am'],
        ['Sed consectetur, lorem vitae laoreet tempus, neque elit fringilla nisl, nec tempus urna quam eu nulla. Nunc tempor nec magna vel viverra. In dapibus aliquam velit, ut malesuada nibh ornare eget. Suspendisse in risus posuere, hendrerit odio id, tincidunt lacus. Nunc fermentum metus sit amet mauris pellentesque, vitae sollicitudin dui facilisis. Etiam at velit id dolor rhoncus porttitor. Vestibulum quis blandit felis.',68.1,3,'Lawrence Dobson','9/1 12:00am'],
        ['Suspendisse in risus posuere, hendrerit odio id, tincidunt lacus. Nunc fermentum metus sit amet mauris pellentesque, vitae sollicitudin dui facilisis. Etiam at velit id dolor rhoncus porttitor. Vestibulum quis blandit felis.',34.14,7,'Jubal Early','9/1 12:00am'],
        ['Phasellus venenatis tortor ac lectus dapibus, sit amet pellentesque turpis mollis. Nam laoreet magna non leo facilisis auctor. Fusce neque augue, lobortis eget orci vel, lobortis porta lectus. Fusce venenatis, metus quis accumsan auctor, ipsum lectus volutpat tellus, viverra vulputate risus dolor porta lacus',30.27,8,'Fanty and Mingo','9/1 12:00am'],
        ['Sed molestie ipsum ac diam feugiat tempus. Donec sed mi tortor. Donec dolor augue, tincidunt sed dignissim ac, congue ac sapien. Morbi molestie nibh eget neque rutrum tincidunt. Quisque adipiscing pulvinar massa eu laoreet. Aenean ipsum nisl, convallis eget tortor nec, convallis consequat tellus.',36.53,1,'Stitch Hessian','9/1 12:00am'],
        ['Etiam porttitor ut massa sit amet pellentesque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur facilisis commodo nulla ut laoreet. Integer vel felis sit amet dolor sollicitudin gravida. Nam quis congue lorem. Aenean quis purus leo. Nunc iaculis enim odio, eu feugiat augue porta sit amet. Fusce quis commodo nisl. Nunc laoreet leo vel egestas volutpat. Suspendisse et cursus leo.',38.77,10,'Fess Higgins','9/1 12:00am'],
        ['Nunc vel suscipit mi. Morbi semper diam urna, sit amet elementum turpis egestas nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer aliquet mi at dui blandit accumsan. Aliquam laoreet enim vel volutpat fermentum. Etiam feugiat arcu mi, sed blandit magna dictum vitae. Ut tristique id nunc ut molestie. Curabitur et augue rhoncus, consectetur mauris vel, laoreet sapien.',19.88,9,'Magistrate Higgins','9/1 12:00am'],
        ['Mauris in ligula quis orci auctor blandit. Maecenas venenatis quis mi vitae sagittis. Sed tincidunt laoreet mi nec ullamcorper. Pellentesque elementum ut lacus ac iaculis. Sed suscipit ipsum ut bibendum ullamcorper. Cras ac est risus. Praesent in risus velit. Donec placerat hendrerit nibh vitae auctor.',81.41,6,'Dr. Mathias','9/1 12:00am'],
        ['Sed ut ipsum in tellus tristique venenatis quis sit amet nibh. Phasellus pretium eget est ac consequat. Vivamus accumsan semper dui, nec vestibulum mauris rutrum sollicitudin. Mauris quis lorem fermentum, dignissim eros faucibus, tempor justo. Donec nec interdum risus.',64.72,8,'Adelei Niska','9/1 12:00am'],
        ['Sed felis erat, laoreet vitae tincidunt non, interdum et elit. Nunc sit amet malesuada lorem. Suspendisse sagittis nulla quis elit pulvinar accumsan. Sed massa nibh, consequat ut mi in, consectetur pharetra nisl. Proin adipiscing semper quam, eget vestibulum risus pharetra ut. Ut sed elit neque.',45.73,9,'Tracey Smith','9/1 12:00am'],
        ['Nam sit amet elit in nibh faucibus bibendum sed quis metus. Vivamus aliquam orci sed porta rhoncus. Mauris aliquam purus ut gravida gravida. Mauris sit amet quam enim. Aenean fringilla sed ligula luctus adipiscing. Donec ac augue tortor. In ultricies luctus nulla.',36.76,4,'Atherton Wing','9/1 12:00am'],
        ['Mauris id adipiscing justo, eget volutpat mauris. Sed lorem ligula, fermentum at interdum eu, pulvinar vel felis. Aliquam malesuada eros augue, at sollicitudin urna accumsan ultrices.',40.96,3,'Monty','9/1 12:00am'],
        ['Sed urna est, sagittis eu ligula sit amet, pellentesque lacinia velit. Sed imperdiet enim non risus bibendum semper. Curabitur gravida consequat magna, nec lobortis elit pretium nec. Morbi eget lacus eget ipsum vehicula pharetra. Donec vehicula aliquam euismod. Nulla facilisi. Donec non est nec eros volutpat placerat in et massa.',25.84,6,'Lenore','9/1 12:00am'],
        ['Aliquam scelerisque ullamcorper vehicula. Aenean ut aliquam mi, nec faucibus tortor. Aliquam erat volutpat. Pellentesque et pellentesque mi. Aenean sem neque, cursus lacinia lectus in, egestas aliquet lorem. Sed aliquam, dolor in hendrerit fringilla, dui arcu pulvinar orci, non suscipit urna nibh id odio.',27.96,2,'Mr. Universe','9/1 12:00am'],
        ['Morbi vel nisi vel nibh rhoncus vestibulum non sagittis nisl. Curabitur varius dolor massa, ut pulvinar mauris blandit a. Phasellus vestibulum arcu turpis, ut consequat risus sagittis ut. Proin non elit sit amet magna lacinia molestie. Sed eget vulputate augue. In hac habitasse platea dictumst. Cras imperdiet leo nec ante dapibus, in mollis risus interdum. Nullam pharetra nibh eu diam tempus, eget lobortis metus vulputate.',45.07,8,'Sir Warwick Harrow','9/1 12:00am'],
        ['Curabitur quis augue cursus, cursus massa ac, dapibus magna. Curabitur non sapien vel lorem pellentesque rhoncus. Nam sagittis, metus aliquet malesuada egestas, leo purus cursus turpis, tempor pharetra tellus nibh posuere turpis. Cras viverra, nisi eget ornare suscipit, erat velit facilisis elit, quis interdum justo magna a tortor. Donec condimentum quam id felis sollicitudin porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus.',34.64,9,'Simon Tam','9/1 12:00am'],
        ['Quisque eros sapien, tempus vel ullamcorper nec, faucibus eget ante. Curabitur vel velit ac libero tempus fringilla in dignissim ligula. Integer eget laoreet ligula, eget ultricies ligula. Donec convallis augue a dolor sagittis feugiat. Aliquam adipiscing, ipsum eget pulvinar pulvinar, elit nisl vestibulum ligula, id interdum felis sem quis mi. Sed vel leo nisl. Sed consequat pharetra diam, vitae ultrices augue varius ac.',61.91,10,'Dr. Caron','9/1 12:00am'],
        ['Etiam elementum at est sit amet sagittis. Curabitur euismod tellus leo, vitae porta justo ultricies vitae. Aliquam posuere nunc sit amet mauris interdum lacinia',63.26,8,'Bridget','9/1 12:00am'],
        ['Uspendisse mollis leo et nisl laoreet, a molestie justo consectetur. Aliquam et leo vulputate, tincidunt massa vel, volutpat leo. Suspendisse potenti.',35.57,7,'Bester','9/1 12:00am'],
        ['non convallis enim porttitor. Nulla ut fermentum sem. Aliquam tincidunt, dui malesuada venenatis pulvinar, justo tellus tempus nulla, sit amet pretium orci metus sed purus. Phasellus lobortis cursus lacus vitae volutpat. Nulla at velit ut orci varius placerat. Aenean est elit, adipiscing et nunc varius, accumsan tempus magna. Donec consectetur orci nec mattis hendrerit.',45.45,8,'Badger','9/1 12:00am']
    ];

    // example of custom renderer function
    function change(val){
        if(val > 0){
            return '<span style="color:green;">' + val + '</span>';
        }else if(val < 0){
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    }

    // example of custom renderer function
    function pctChange(val){
        if(val > 0){
            return '<span style="color:green;">' + val + '%</span>';
        }else if(val < 0){
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }

    // register model
    Ext.define('Company', {
        extend: 'Ext.data.Model',
        idProperty: 'company',
        fields: [
           {name: 'company'},
           {name: 'price', type: 'float'},
           {name: 'change', type: 'float'},
           {name: 'pctChange', type: 'string'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ]        
    });
    

    // create the data store
    var store = Ext.create('Ext.data.Store', {
        model: 'Company',
        remoteSort: true,
        pageSize: 5,
        proxy: {
            type: 'pagingmemory',
            data: myData,
            reader: {
                type: 'array'
            }
        }
    });
    
    // create the Grid
    var grid = Ext.widget('gridpanel', {
        title:'Reviews',
        store: store,
        columns: [{
                text: 'Score',
                sortable: true,
                renderer: change,
                dataIndex: 'change',
                width: 65
            },{
                id:'company',
                text: 'Comments',
                sortable: true,
                dataIndex: 'company',
				flex: 1
            },{
                text: 'Author',
                sortable: true,
                renderer: pctChange,
                dataIndex: 'pctChange',
                width: 110
            },{
                text: 'Date',
                sortable: true,
                dataIndex: 'lastChange',
                width: 300
            }],
        stripeRows: true,
        height:980,
        minHeight: 160,
        width:920,
        frame:true,
        resizable: {
            handles: 's'  
        },
        bbar: Ext.create('Ext.PagingToolbar', {
            pageSize: 10,
            store: store,
            displayInfo: true,
            plugins: Ext.create('Ext.ux.SlidingPager', {})
        })
    });

    grid.render('grid-example-paging');

    store.load();
});