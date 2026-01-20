const offcanvas = document.getElementById('mobileSidebar');
const toggler = document.querySelector('.sidebar-toggler');

offcanvas.addEventListener('shown.bs.offcanvas', () => {
    toggler.style.display = 'none';
});

offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    toggler.style.display = 'block';
});
