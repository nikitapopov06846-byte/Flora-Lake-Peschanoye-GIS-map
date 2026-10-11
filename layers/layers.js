var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_samplecollectionboundaries_1 = new ol.format.GeoJSON();
var features_samplecollectionboundaries_1 = format_samplecollectionboundaries_1.readFeatures(json_samplecollectionboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samplecollectionboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samplecollectionboundaries_1.addFeatures(features_samplecollectionboundaries_1);
var lyr_samplecollectionboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samplecollectionboundaries_1, 
                style: style_samplecollectionboundaries_1,
                popuplayertitle: 'sample collection boundaries',
                interactive: true,
                title: '<img src="styles/legend/samplecollectionboundaries_1.png" /> sample collection boundaries'
            });
var format_plaints_2 = new ol.format.GeoJSON();
var features_plaints_2 = format_plaints_2.readFeatures(json_plaints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plaints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plaints_2.addFeatures(features_plaints_2);
var lyr_plaints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plaints_2, 
                style: style_plaints_2,
                popuplayertitle: 'plaints',
                interactive: true,
    title: 'plaints<br />\
    <img src="styles/legend/plaints_2_0.png" /> Брусника обыкновенная <br />\
    <img src="styles/legend/plaints_2_1.png" /> Вереск обыкновенный <br />\
    <img src="styles/legend/plaints_2_2.png" /> Земляника лесная <br />\
    <img src="styles/legend/plaints_2_3.png" /> Иван-чай узколистный (кипрей)<br />\
    <img src="styles/legend/plaints_2_4.png" /> короставник полевой<br />\
    <img src="styles/legend/plaints_2_5.png" /> Подорожник большой<br />\
    <img src="styles/legend/plaints_2_6.png" /> Черника обыкновенная<br />\
    <img src="styles/legend/plaints_2_7.png" /> Шиповник коричный (дикорост)<br />\
    <img src="styles/legend/plaints_2_8.png" /> <br />' });

lyr_EsriWorldImagery_0.setVisible(true);lyr_samplecollectionboundaries_1.setVisible(true);lyr_plaints_2.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_samplecollectionboundaries_1,lyr_plaints_2];
lyr_samplecollectionboundaries_1.set('fieldAliases', {'fid': 'fid', 'место сбора': 'место сбора', });
lyr_plaints_2.set('fieldAliases', {'fid': 'fid', 'Вид': 'Вид', 'Дата отметки': 'Дата отметки', 'Жизненность по шкале Воронова': 'Жизненность по шкале Воронова', 'Фенофаза': 'Фенофаза', 'Ярус/слой': 'Ярус/слой', 'Код маршрута (номер)': 'Код маршрута (номер)', 'Обилие растений по шкале Друде': 'Обилие растений по шкале Друде', 'фото': 'фото', });
lyr_samplecollectionboundaries_1.set('fieldImages', {'fid': 'TextEdit', 'место сбора': 'TextEdit', });
lyr_plaints_2.set('fieldImages', {'fid': 'TextEdit', 'Вид': 'ValueMap', 'Дата отметки': 'DateTime', 'Жизненность по шкале Воронова': 'ValueMap', 'Фенофаза': 'ValueMap', 'Ярус/слой': 'ValueMap', 'Код маршрута (номер)': 'UniqueValues', 'Обилие растений по шкале Друде': 'ValueMap', 'фото': 'ExternalResource', });
lyr_samplecollectionboundaries_1.set('fieldLabels', {'fid': 'no label', 'место сбора': 'no label', });
lyr_plaints_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Вид': 'inline label - always visible', 'Дата отметки': 'inline label - always visible', 'Жизненность по шкале Воронова': 'inline label - always visible', 'Фенофаза': 'inline label - always visible', 'Ярус/слой': 'inline label - always visible', 'Код маршрута (номер)': 'inline label - always visible', 'Обилие растений по шкале Друде': 'inline label - always visible', 'фото': 'no label', });
lyr_plaints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});