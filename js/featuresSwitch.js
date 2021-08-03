document.addEventListener("DOMContentLoaded", () => {
    let featurePoints = document.querySelectorAll('.feature-point');
    let featureButtons = document.querySelectorAll('.feature__switcher__btn_active');

    let clearActivePoints = () => {
        for (let point of featurePoints) {
            point.classList.remove("active");
        }
    };

    let showFeature = (page) => {
        for (let point of featurePoints) {
            if (point.dataset.order === page) {
                point.classList.add("active");
            }
        }
    };

    for (let button of featureButtons) {
        button.addEventListener('click', () => {
            clearActivePoints();
            showFeature(button.dataset.feature);
        });
    }
});