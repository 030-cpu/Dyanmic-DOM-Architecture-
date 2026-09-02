/* Version 1 */
let discussionContainer = document.getElementById("discussion-board");

function createCategories(post){
    const categoriesContainer = document.createElement("div");
    categoriesContainer.className = "post-categories";
    categoriesContainer.classList.add("post-categories");

    for(let i=0; i < post.categories.length; i++){
        const tag = document.createElement('span');
        tag.classList.add('category');
        tag.textContent = post.categories[i];
        categoriesContainer.appendChild(tag);
    }

    return categoriesContainer;
}

function renderVersionOne(post) {
    let discussionArticle = document.createElement("article");
    discussionArticle.className = "discussion-post, version-one";
    discussionArticle.id = `post-${post.id}`;


    let postAuthor = document.createElement("div");
    postAuthor.className = "post-author";
    discussionArticle.appendChild(postAuthor);

    let profileImage = document.createElement("img");
    profileImage.className = "profile-image";
    profileImage.src= post.author.image;
    postAuthor.appendChild(profileImage);

    let authorInfo = document.createElement("div");
    authorInfo.className = "author-info";
    postAuthor.appendChild(authorInfo);

    let authorName = document.createElement("h2");
    authorName.className = "author-name";
    authorName.textContent = post.author.name;
    authorInfo.appendChild(authorName);

    let authorUsername = document.createElement("p");
    authorUsername.className = "author-username";
    authorUsername.textContent = post.author.username;
    authorInfo.appendChild(authorUsername);

    let postDate = document.createElement("p");
    postDate.className = "post-date";
    postDate.textContent = post.postedDate;
    postAuthor.appendChild(postDate);

    let postTitle = document.createElement("h3");
    postTitle.className = "post-title";
    postTitle.textContent = post.title;
    discussionArticle.appendChild(postTitle);

    let articleImage = document.createElement("img");
    articleImage.className = "article-image";
    articleImage.src= post.articleImage;
    discussionArticle.appendChild(articleImage);

    let postMessage = document.createElement("p");
    postMessage.textContent = post.message;
    postMessage.className = "post-message";
    discussionArticle.appendChild(postMessage);

    let postCategories = createCategories(post);
    discussionArticle.appendChild(postCategories);
    
    /*
    let category = document.createElement("span");
    category.className = "category";
    postCategories.appendChild(category);

    let postEngagement = document.createElement("div");
    postEngagement.className = "post-engagement";
    discussionArticle.appendChild(postEngagement);

    let likes = document.createElement("p");
    likes.className = "likes";
    likes.textContent = `❤️ ${post.likes}`;
    postEngagement.appendChild(likes);

    let views = document.createElement("p");
    views.className = "views";
    views.textContent = `👁️ ${post.views}`;
    postEngagement.appendChild(views);

    let replies = document.createElement("p");
    replies.className = "replies";
    replies.textContent = `💬 ${post.replies}`;
    postEngagement.appendChild(replies);
     */

    return discussionArticle;
};

/* Version 2 */
function renderVersionTwo(post) {
    let discussionArticle = document.createElement("article");
    discussionArticle.className = "discussion-post, version-two";
    discussionArticle.id = `post-${post.id}`;

    let articleImage = document.createElement("img");
    articleImage.className = "article-image";
    articleImage.src= post.articleImage;
    discussionArticle.appendChild(articleImage);

    let versionTwoOverlay = document.createElement("div");
    versionTwoOverlay.className = "version-two-overlay";
    discussionArticle.appendChild(versionTwoOverlay);

    let postTopRow = document.createElement("div");
    postTopRow.className = "post-top-row";
    versionTwoOverlay.appendChild(postTopRow);

    let postCategories = document.createElement("div");
    postCategories.className = "post-categories";
    postTopRow.appendChild(postCategories);

    let postAuthor = document.createElement("div");
    postAuthor.className = "post-author";
    postTopRow.appendChild(postAuthor);

    
}

/* Version 3 */

/* for loop for cycling discussion posts */

for (let i=0; i < discussionPosts.length; i++) {
    const post = discussionPosts[i];
    let card;

    if (i % 3===0){
        card = renderVersionOne(post);
    } else if (i % 3 ===1){
        card = renderVersionOne(post);
    } else {
        card = renderVersionOne(post);
    }

    discussionContainer.appendChild(card);
}

