function getPost() {
    const form = document.querySelector('.send form').email;

    form.addEventListener('change', () => {
        let text = '';

        text = form.value;

        if (text.indexOf('@') > 0) {
            const feedback = async (event) => {
                event.preventDefault();
                const postEmail = {
                    email: text
                };

                await fetch('http://localhost:3000/post', {
                    method: 'POST',
                    body: JSON.stringify(postEmail),
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        
            window.addEventListener('submit', feedback);
        } else {
            return false;   
        }
    });    
}

getPost();