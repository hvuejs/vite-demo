/**
 *  npm: toggle-selection@1.0.6
 *  github: https://github.com/sudodoki/toggle-selection
 */
function toggleSelection() {
    var selection = document.getSelection();
    if (!selection.rangeCount) {
        return function () {};
    }
    var active: Element = document.activeElement;

    var ranges: any[] = [];
    for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
    }

    switch (
        active.tagName.toUpperCase() // .toUpperCase handles XHTML
    ) {
        case "INPUT":
        case "TEXTAREA":
            (active as HTMLTextAreaElement | HTMLInputElement).blur();
            break;

        default:
            active = null;
            break;
    }

    selection.removeAllRanges();
    return function () {
        selection.type === "Caret" && selection.removeAllRanges();

        if (!selection.rangeCount) {
            ranges.forEach(function (range) {
                selection.addRange(range);
            });
        }

        active && (active as HTMLTextAreaElement | HTMLInputElement).focus();
    };
}

export default toggleSelection;
