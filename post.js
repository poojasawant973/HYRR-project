const postsContainer = document.getElementById('posts');
let page = 1;

function fetchPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then(response => response.json())
        .then(posts => {
            const postElements = posts.map(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('col');
                postElement.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;
                return postElement;
            });
            postsContainer.append(...postElements);
            page++;
        });
}

function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        fetchPosts();
    }
}

fetchPosts();
window.addEventListener('scroll', handleScroll);

