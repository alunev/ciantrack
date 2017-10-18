$( document ).ready(function() {
    $("[class^='offer-container-']").each(function (i) {
        $(this).css('border', '3px solid black');

        var match = $(this).find("[class ^= 'description-']").text().match(/EMLS ID :?(\d+)/);
        if (match === null || match[1] === null) {
            return;
        }

        var emlsId = match[1];
        var commentElem = $(this).find("[class^='comment-textarea-']");

        var offerContainer = this;

        saveAndUpdate(emlsId,
            function getComment() {
                return commentElem === undefined ? '' : commentElem.text();
            },
            function setComment(comment) {
                offerContainer.append('Все коменты для EMLS ID ' + emlsId + ' : ' + comment);
            }
        )
    })
})
