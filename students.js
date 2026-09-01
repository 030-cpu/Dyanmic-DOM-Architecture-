/* Version 1 */
let discussionContainer = document.getElementById("discussion-board");
let discussionArticle = document.createElement("article");
discussionArticle.className = "discussion-post, version-one";
discussionArticle.id = "post-101";
discussionContainer.appendChild(discussionArticle);
let postAuthor = document.createElement("div");
postAuthor.className = "post-author";
discussionContainer.appendChild(postAuthor);
let profileImage = document.createElement("img");
profileImage.className = "profile-image";
profileImage.src = "";
profileImage.alt = "Profile Image";
postAuthor.appendChild(profileImage);
let authorInfo = document.createElement("div");
authorInfo.className = "author-info";
postAuthor.appendChild(authorInfo);
let authorName = document.createElement("h2");
authorName.className = "author-name";
authorInfo.appendChild(authorName);
let authorUsername = document.createElement("p");
authorUsername.className = "author-username";
authorInfo.appendChild(authorUsername);

/* Version 2 */

/* Version 3 */
