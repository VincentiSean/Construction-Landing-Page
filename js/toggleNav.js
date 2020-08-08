function toggleNav() {
    mobileNav = document.getElementById('mobile-nav');

    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
}