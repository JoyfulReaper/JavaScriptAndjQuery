"use strict";

$(document).ready( () => {
    $("#image_rollovers img").each( (index, img) => {
        const oldUrl = img.src;
        const newUrl = img.id;

        const rolloverImage = new Image();
        rolloverImage.src = newUrl;

        $(img).hover(
            () => img.src = newUrl,
            () => img.src = oldUrl
        );
    });
});