var actionList = $('.sustain-resources');
var add = $('.add');


add.on("click", addActionToList);

function addActionToList() {
  event.preventDefault();
  var action = $('.favActions').val();
  actionList.append(`
    <p>${action}</p>
  `);
}