window.isStaging = () => {
    return window.location.href.indexOf('preview.pagescdn.com') > -1;
};

window.onReady =(cb) => {
    if (document.readyState === "complete"
            || document.readyState === "loaded"
            || document.readyState === "interactive") {
        cb.bind(this)();
    } else {
        document.addEventListener('DOMContentLoaded', cb.bind(this));
    }
}