// This is an "Immediately Invoked Function Expression" (IIFE).
// It runs automatically as soon as the file is loaded.
(function() {
    // Check if the bridge has already stored the data
    if (window.SE_FIELD_DATA) {
        init(window.SE_FIELD_DATA);
    } 
    // This is a fallback in the rare case the external script loads FIRST.
    // It will wait for the 'onWidgetLoad' event itself.
    else {
        window.addEventListener('onWidgetLoad', function (obj) {
            init(obj.detail.fieldData);
        });
    }
})();

// The main function that starts your widget
function init(fieldData) {
    console.log("External script initialized successfully!");
    console.log("Received fieldData:", fieldData);
}
