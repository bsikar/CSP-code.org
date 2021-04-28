console.log("before");
onEvent("button1", "click", function() {
    console.log("button1 clicked!");
});
console.log("middle");
onEvent("button2", "click", function() {
    console.log("button2 clicked!");
});
console.log("after");