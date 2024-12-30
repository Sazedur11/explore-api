// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// const url = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(response => response.json())
        .then(json => displayPost(json))
}

function displayPost(posts){
    const ul = document.getElementById('post-title');
    for( const post of posts){
        console.log(post)
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.appendChild(li)
    }
}