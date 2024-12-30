function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('posts-contsiner');
    for( const post of posts){
        console.log(post)
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h4>User id: ${post.userId}</h4>
            <h5>Post title: ${post.title}</h5>
            <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv)

    }
}

loadPosts()