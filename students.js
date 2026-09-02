/* Version 1 */
let discussionContainer = document.getElementById("discussion-board");

let discussionArticle = document.createElement("article");
discussionArticle.className = "discussion-post, version-one";
discussionArticle.id = "post-101";
discussionContainer.appendChild(discussionArticle);

let postAuthor = document.createElement("div");
postAuthor.className = "post-author";
discussionArticle.appendChild(postAuthor);

let profileImage = document.createElement("img");
profileImage.className = "profile-image";
profileImage.src = "";
profileImage.alt = "";
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

let postDate = document.createElement("p");
postDate.className = "post-date";
postAuthor.appendChild(postDate);

let postTitle = document.createElement("h3");
postTitle.className = "post-title";
discussionArticle.appendChild(postTitle);

let articleImage = document.createElement("img");
articleImage.className = "article-image";
articleImage.src = "";
articleImage.alt = "";
discussionArticle.appendChild(articleImage);

let postMessage = document.createElement("p");
postMessage.className = "post-message";
discussionArticle.appendChild(postMessage);

let postCategories = document.createElement("div");
postCategories.className = "post-categories";
discussionArticle.appendChild(postCategories);

let category = document.createElement("span");
category.className = "category";
postCategories.appendChild(category);

let postEngagement = document.createElement("div");
postEngagement.className = "post-engagement";
discussionArticle.appendChild(postEngagement);

let likes = document.createElement("p");
likes.className = "likes";
postEngagement.appendChild(likes);

let views = document.createElement("p");
views.className = "views";
postEngagement.appendChild(views);

let replies = document.createElement("p");
replies.className = "replies";
postEngagement.appendChild(replies);



/* Version 2 */


/* Version 3 */
