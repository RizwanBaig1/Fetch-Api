
// Fetch user data and posts for a specific user ID
function fetchUserData(userId, userContainerId) {
    const userContainer = document.getElementById(userContainerId);

    // Fetch user data
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            // Display user name in h1 tag
            const nameElement = document.createElement('h1');
            nameElement.textContent = user.name;
            userContainer.appendChild(nameElement);

            // Display user email in p tag
            const emailElement = document.createElement('p');
            emailElement.textContent = `Email: ${user.email}`;
            userContainer.appendChild(emailElement);

            const buttonElement = document.createElement('button');
            buttonElement.textContent = `Showpost` ;
            userContainer.appendChild(buttonElement);

            // Fetch user's posts
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        })
        .then(response => response.json())
        .then(posts => {
            
            // Display each post in a p tag
            posts.forEach(post => {
                const postElement = document.createElement('p');
                postElement.textContent = post.title;
                userContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Fetch and display data for user 1 and user 2
fetchUserData(1, 'user1');
fetchUserData(2, 'user2');
fetchUserData(3, 'user3');
fetchUserData(3, 'user4');
fetchUserData(3, 'user5');
fetchUserData(3, 'user6');
fetchUserData(3, 'user7');
fetchUserData(3, 'user8');
fetchUserData(3, 'user9');
fetchUserData(3, 'user10');