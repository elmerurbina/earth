document.getElementById('facts-section-link').addEventListener('click', function (event) {
    event.preventDefault(); 

  
    var popupStyles = 'width=400,height=250,top=100,left=100,scrollbars=yes';

    // Create the window
    var privacyWindow = window.open('', '_blank', popupStyles);

    // Write the fact
    privacyWindow.document.write('<html><head><title>Curious fact</title>');
    // Agregar estilos CSS
    privacyWindow.document.write('<link rel="stylesheet" type="text/css" href="style.css">');
    privacyWindow.document.write('</head><body>');
    privacyWindow.document.write('<div class="popup-container">');
    privacyWindow.document.write('<h3>Curious fact</h3>');
    privacyWindow.document.write('<div class="atmosphere">');
    privacyWindow.document.write('<p>The Earth\'s atmosphere is composed of approximately 78% nitrogen, 21% oxygen, and trace amounts of other gases, including carbon dioxide and methane.</p>');
    privacyWindow.document.write('</div>');
    privacyWindow.document.write('<p>Isn\'t that amazing?</p>');
    privacyWindow.document.write('</div>');    
    privacyWindow.document.write('</body></html>');

    // Close the windows
    window.addEventListener('beforeunload', function () {
        privacyWindow.close();
    });
});
