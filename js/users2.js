function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users){
    const usersContainer = document.getElementById('users-container');
    for( const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
            <h2>id: ${user.id}</h2>
            <h3>Name: ${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p> User Name: ${user.username}</p>
        `;
        usersContainer.appendChild(userDiv)

    }
}

loadUsers()