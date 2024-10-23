var dataJson = [
    {
        "name": "Text 1",
        "width": "60%"
    }, {
        "name": "Text 2",
        "width": "60%"
    }, {
        "name": "Text 3",
        "width": "60%"
    },{
        "name": "Text 4",
        "width": "60%"
    }, {
        "name": "Text 5",
        "width": "60%"
    }
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function(item){
    raw_progress += `<p class="txt-color">${item.name}</p>
    <div class="progress mb-5 p-0">
      <div class="filled-progress-bar" style="width: ${item.width}">${item.width}</div>
    </div>`
    createRow(raw_progress)
})

function createRow(data) {
    raw_html += "<div class=\"col-lg-6 col-sm-10 col-md-6\">".concat(data, "</div>");
    raw_progress = "";
}
document.getElementById('stats-data').innerHTML = raw_html;
