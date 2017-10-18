$(".offer-item").each(function (i) {
    $(this).css('border', '3px solid black');

    var match = $(this).find(".objects_item_info_col_comment_text").text().match(/EMLS ID :?(\d+)/);
    if (match === null) {
        return;
    }

    var emlsId = match[1];
    if (emlsId === null) {
        return;
    }

    var commentElem = $(this).find(".object_user_data_comment").find("dl").find("dt");

    saveAndUpdate(emlsId,
        function getComment() {
            return commentElem.text();
        },
        function setComment(comment) {
            return commentElem.text('Все коменты для EMLS ID ' + emlsId + " : " + comment);
        }
    )
})
