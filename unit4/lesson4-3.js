/* Global Variables:
 * likes: the number of likes
 * comments: the comments found
 * in the "allCommentsOutput" text box
 */
var likes = 0;
var comments = "OMG soooo cute!";
/* This code allows for the likes to increase
 * whenever the user presses the like button
 */
onEvent("upButton", "click", function() {
    setProperty("likeCounterOutput", "text",
        "Likes: " + (++likes));
    playSound("like.mp3");
});
/* This code allows for the likes to decrease
 * whenever the user presses the dislike button
 */
onEvent("downButton", "click", function() {
    setProperty("likeCounterOutput", "text",
        "Likes: " + (--likes));
    playSound("dislike.mp3");
});
/* This code gets user input from the
 * "newCommentInput" and then displays
 * it appending it to the pre-existing comments
 * then it sets the comment field to nothing
 */
onEvent("commentButton", "click", function() {
    comments += "
    " + getText("
    newCommentInput ");
    setProperty("newCommentInput", "text", " ");
    setProperty("allCommentsOutput", "text", comments);
    playSound("click.mp3");
});