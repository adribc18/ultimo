function addComment() {
    let displayName = $('#display-name').val();
    let commentContent = $('#comment-content').val();

    let commentItem = $('<li>').addClass('comment-item').html(`
        <strong>${displayName}</strong>
        <p>${commentContent}</p>
        <button onclick="deleteComment(this)">Delete</button>
        <button onclick="editComment(this)">Edit</button>
    `);

    $('#comments-list').prepend(commentItem);
    $('#display-name').val('');
    $('#comment-content').val('');
}

function deleteComment(button) {
    $(button).closest('.comment-item').remove();
}

function editComment(button) {
    let commentItem = $(button).closest('.comment-item');
    let content = commentItem.find('p').text();

    commentItem.addClass('editing').html(`
        <textarea>${content}</textarea>
        <button onclick="submitEdit(this)">Submit</button>
    `);
}

function submitEdit(button) {
    let commentItem = $(button).closest('.comment-item');
    let newContent = commentItem.find('textarea').val();

    commentItem.removeClass('editing').html(`
        <strong>${commentItem.find('strong').text()}</strong>
        <p>${newContent}</p>
        <button onclick="deleteComment(this)">Delete</button>
        <button onclick="editComment(this)">Edit</button>
    `);
}
