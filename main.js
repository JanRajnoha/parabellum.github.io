window.onload = (event) => {
    const observer = window.lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
};