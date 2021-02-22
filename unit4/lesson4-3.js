/* MIT License
 *
 * Copyright (c) 2021 Brighton Sikarskie
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
" + getText("newCommentInput");
  setProperty("newCommentInput", "text", " ");
  setProperty("allCommentsOutput", "text", comments);
  playSound("click.mp3");
});