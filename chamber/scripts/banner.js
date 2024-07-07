document.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('closeBanner');
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (today === 1 || today === 2 || today === 3) { // Monday, Tuesday, Wednesday
        banner.classList.remove('hidden');
        banner.style.display = 'block';
    }

    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});