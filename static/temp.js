// Repeater

// when the Repeat button is clicked
$('#btnRepeat').click( () => {
  // get the input from the web page
  let text = $('#txtInput').val()

  // output to the web page
  $('#txtOutput').text('You wrote: ' + text)
})