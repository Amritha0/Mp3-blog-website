// Within the <script> tag or a separate JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    const submitPostForm = document.getElementById('submitPostForm');
    
    submitPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(submitPostForm);
        const postData = {
            title: formData.get('postTitle'),
            content: formData.get('postContent'),
            author: formData.get('postAuthor')
        };
        
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit post');
            }
            
            const data = await response.json();
            alert(data.message);
            submitPostForm.reset();
        } catch (error) {
            console.error('Error submitting post:', error);
            alert('Failed to submit post');
        }
    });
});
