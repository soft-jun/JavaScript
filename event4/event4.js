function bubblingAndCapturing(useCapture, stop) {
    document.querySelector('body').addEventListener('click', function() {
        console.log("body");
    }, useCapture)
    document.querySelector(',root').addEventListener('click', function() {
        console.log("root");
    },useCapture)
    document.querySelector(',parent').addEventListener('click', function() {
        console.log("parent");
    },useCapture)
    document.querySelector(',child').addEventListener('click', function() {
        console.log("child");
    },useCapture)
    document.querySelector(',target').addEventListener('click', function() {
        console.log("target");
        if (stop) {
            e.stopPropagation();
        }
    }, useCapture)
}
bubblingAndCapturing();
//bubblingAndCapturing(true);
//bubblingAndCapturing(false, true);