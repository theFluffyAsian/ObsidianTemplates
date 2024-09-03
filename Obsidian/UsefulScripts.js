// Get user input and append it to a file name
<%-* const fileTitle = moment().format("YYYY") + " " + await tp.system.prompt("<message>"); -%>
/*using it in the file:*/ <% fileTitle %>

// Move the file to a folder
<% await tp.file.move("/<folder>/" + fileTitle ) %>

