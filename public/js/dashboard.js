const postHandler = (event) => {
    // event delegation to determine delete vs edit btn
    if (event.target.hasAttribute('data-delete-id')) {
        deletePost(event);       
    } else if (event.target.hasAttribute('data-edit-id')) {
        editPost(event);
    }
};
    
// get post.id to DELETE request by id
const deletePost = async (event) => {
    const id = event.target.getAttribute('data-delete-id');

    let confirmation = confirm('Are you sure you want to delete this post?');

    if (confirmation === true) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};
    
// get post.id to go to edit-post view
const editPost = async (event) => {
    const id = event.target.getAttribute('data-edit-id');
    window.location.replace(`/edit-post/${id}`)
}
    
// document.querySelector('.posts-card').addEventListener('click', postHandler)
