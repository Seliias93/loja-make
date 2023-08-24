const searchInput = document.getElementById('pesquisar-ps');
const productItems = document.querySelectorAll('.product');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    productItems.forEach(item => {
        const productName = item.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});