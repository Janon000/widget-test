// Create a global object to hold your widget's logic
const myWidget = {
    // The init function will be called by the bridge script
    init: function(fieldData) {
        console.log("External script initialized!");
        console.log("Received fieldData:", fieldData);

        // All of your widget's logic now goes here.
        // You have access to the settings via the 'fieldData' parameter.
        
    }
};
