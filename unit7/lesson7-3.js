onEvent("nextButton", "click", function() {
    // Write your code here
    var cat = Cats.randomBreed();
    setProperty("catImage", "image", Cats.breedImage(cat));
    setProperty("breedName", "text", cat);
});