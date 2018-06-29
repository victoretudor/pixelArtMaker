function makeGrid() {
  // Select the size input
  let table = $("#pixel_canvas");
  const colorPicker = $("#colorPicker");
  let cols = $("#input_width").val();
  let rows = $("#input_height").val();

  table.children().remove();

  for (let i = 0; i < rows; i++) {
    table.append("<tr></tr>");

    for (let j = 0; j < cols; j++)
      table
        .children()
        .last()
        .append("<td></td>");
  }
  // Select color input
  table.on("click", "td", function() {
    let color = $("input[type='color']#colorPicker").val();

    $(this).attr("bgcolor", color);
  });
}
// When size is submitted by the user, call makeGrid()
const submitButton = $("input[type='submit']");

submitButton.click(function(e) {
  e.preventDefault();
  makeGrid();
});
