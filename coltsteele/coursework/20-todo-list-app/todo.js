// Default: todo__add is hidden
$(".todo__add").slideToggle(0);

// Toggle visibility of .todo__add
$(".todo__toggle").on("click", function() {
  $(".todo__add").slideToggle();
});

// Create new list items on ENTER
$(".todo__add").on("keypress", function(e) {
    // If key pressed is enter,
    if (e.which === 13) {
        // Adds list item to todo__list
        let todoText = $(this).val();
        // If input is not empty,
        if (todoText !== "") {
            // Add value to new list item in list
            $(".todo__list").append(
                `<li class="todo__list-item">
                    <span class="todo__list-trash">
                        <i class="fa fa-trash"></i>
                    </span>
                    <span class="todo__list-item-text">
                        ${$(this).val()}
                    </span>
                </li>`
            );
            // Reset input field
            $(this).val("");
        }
    }
});

// Toggle list item on click
$(".todo__list").on("click", ".todo__list-item-text", function() {
  $(this).toggleClass("todo__list-item-text--is-done");
});

// Destroy list item if trash bin is clicked
$(".todo__list").on("click", ".todo__list-trash", function(e) {
  // Prevent other click handlers from activating
  e.stopPropagation();
  // Delete parent item after fade animation
  $(this)
    .parent()
    .fadeOut(1000, function() {
      $(this).remove();
    });
});
