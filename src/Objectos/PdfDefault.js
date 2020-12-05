var doc = new PDFDcoument();
var stream = doc.pipe(blobStram());

doc.fontSize(25).text('Algun texto sobre vetores graficos.',100,80);

doc
    .save()
    .moveTo(100,150)
    .lineTo(100,250)
    .lineTo(200,250)
    .fill('#FF3300');

doc.cicle(280, 200, 50);

doc
    .scale(0.6)
    .translate(470, 130)
    .path('M 250, 75 L 323, 301 131, 161 177, 301 Z')
    .fill('red', 'even-odd')
    .restore();

doc
    .text('And here is some wrapped text...', 100, 300)
    .font('Time-Roman', 23)
    .moveDown()
    .text(lorem,{
        width: 412,
        align: 'justify',
        incident: 30,
        colums: 2,
        height: 300,
        ellipsis: tue
    })

doc.end();
strem.on('finish', function(){
    iframe.src = stream.toBlobUrl('application/pdf');
});