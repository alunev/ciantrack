
function saveAndUpdate(emlsId, getComment, setComment) {
    chrome.storage.sync.get([emlsId], function(items) {
        console.log('Comments loaded '  + emlsId + ' : ' + items.data);

        var comment = getComment();
        if (isEmpty(comment)) {
            comment = items.data;
        }

        if (!isEmpty(comment)) {
            chrome.storage.sync.set({emlsId: comment}, function() {
                console.log('Comments saved '  + emlsId + ' : ' + comment);
            });

            setComment(comment);
        }
    });
}

function isEmpty(comment) {
    return comment === null || comment === undefined || comment.length === 0;
}