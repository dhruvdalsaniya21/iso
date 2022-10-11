function assignTooltip() {
    const imageElements = Array.from(document.querySelectorAll('img'));

    for (const imageElement of imageElements) {
        tippy(`.${imageElement.className}`, {
            content: imageElement.className,
        })
    }
}

window.onload = assignTooltip;