document.addEventListener("DOMContentLoaded", function() {
    const pathSingle = 'single.html'
    const cards = [
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic1.jpg',
            webp_src: './img/cards/pic1.webp',
            img_alt: 'Lorem Ipsum is simply',
            title: 'Lorem Ipsum is simply.',
            old_price: '',   
            price: '$304,00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: '',
            img_src: './img/cards/pic2.jpg',
            webp_src: './img/cards/pic2.webp',
            img_alt: ' Nullam vestibulum',
            title: ' Nullam vestibulum.',
            old_price: '',  
            price: '$70,00', 
        },
    
        {   
            link: pathSingle,
            Sale: 'product-sale',
            newProduct: '',
            img_src: './img/cards/pic3.jpg',
            webp_src: './img/cards/pic3.webp',
            img_alt: 'Donec et lorem suscipit',
            title: 'Donec et lorem suscipit.', 
            old_price: '$460', 
            price: '$300,00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: '',
            img_src: './img/cards/pic4.jpg',
            webp_src: './img/cards/pic4.webp',
            img_alt: 'Curabitur pretium dui',
            title: 'Curabitur pretium dui.',
            old_price: '', 
            price: '$300,00', 
        },
    
        {   
            link: pathSingle,
            Sale: 'product-sale',
            newProduct: '',
            img_src: './img/cards/pic5.jpg',
            webp_src: './img/cards/pic5.webp',
            img_alt: 'Lorem Ipsum is simply',
            title: 'Lorem Ipsum is simply.',
            old_price: '$342', 
            price: '$278,00', 
        },
    
        {   
            link: pathSingle,
            newProduct: '',
            Sale: '',
            img_src: './img/cards/pic6.jpg',
            webp_src: './img/cards/pic6.webp',
            img_alt: ' Sed tempus tellus',
            title: ' Sed tempus tellus.',
            old_price: '', 
            price: '$212,00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic7.jpg',
            webp_src: './img/cards/pic7.webp',
            img_alt: 'Lorem Ipsum is simply',
            title: 'Lorem Ipsum is simply.',
            old_price: '', 
            price: '$350,00', 
        },
    
        {   
            link: pathSingle,
            Sale: 'product-sale',
            newProduct: '',
            img_src: './img/cards/pic8.jpg',
            webp_src: './img/cards/pic8.webp',
            img_alt: 'Etiam egestas velit',
            title: 'Etiam egestas velit.',
            old_price: '$340', 
            price: '$200,00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic9.jpg',
            webp_src: './img/cards/pic9.webp',
            img_alt: 'Mauris viverra magna',
            title: 'Mauris viverra magna.',
            old_price: '', 
            price: '$323,00', 
        },
    ]

    const favoritesCards = [
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic1.jpg',
            webp_src: './img/cards/pic1.webp',
            img_alt: 'Nulla accumsan lect',
            title: 'Nulla accumsan lect.',
            old_price: '',   
            price: '$60.00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: '',
            img_src: './img/cards/pic2.jpg',
            webp_src: './img/cards/pic2.webp',
            img_alt: ' Nullam vestibulum',
            title: ' Nullam vestibulum.',
            old_price: '',  
            price: '$278,00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic3.jpg',
            webp_src: './img/cards/pic3.webp',
            img_alt: 'Donec et lorem suscipit',
            title: 'Donec et lorem suscipit.', 
            old_price: '', 
            price: '$188,00', 
        },
    ]

    const newproductsCards = [
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic6.jpg',
            webp_src: './img/cards/pic7.webp',
            img_alt: 'Curabitur pretium dui',
            title: 'Curabitur pretium dui.',
            old_price: '',   
            price: '$188.00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic4.jpg',
            webp_src: './img/cards/pic4.webp',
            img_alt: 'Sed tempus tellus',
            title: 'Sed tempus tellus.',
            old_price: '',  
            price: '$90.00', 
        },
    
        {   
            link: pathSingle,
            Sale: '',
            newProduct: 'new-product',
            img_src: './img/cards/pic6.jpg',
            webp_src: './img/cards/pic6.webp',
            img_alt: 'Nulla accumsan lect',
            title: 'Nulla accumsan lect.', 
            old_price: '', 
            price: '$60.00', 
        },
    ]
    
    function CreateCategory(category) {
        return `
            <li class="cards-item">
                <article class="card-item__wrapper">
                    <span class="${category.newProduct}${category.Sale}"></span>

                    <a href="${category.link}">
                        <picture>
                            <source srcset="${category.webp_src}" type="image/webp" title="Product image">
                            <img src="${category.img_src}" alt="${category.img_alt}" class="card-item__img" title="Product image">
                        </picture>
                    </a>
    
                    <h3 class="card-item__title" title="Product Name">${category.title}</h3>
                    
                    <s class="card-item__price-old" title="Old price" aria-label="Old price">${category.old_price}</s>
    
                    <span class="card-item__price" title="Price" aria-label="Price">${category.price}</span>
    
                    <button class="card-item__purchase" title="Add to Cart" aria-label="Add to Cart"></button>
                </article>
            </li> `  
    }
    
    const newproductsCards_templates = newproductsCards.map(category => CreateCategory(category))
    const favoritesCards_templates = favoritesCards.map(category => CreateCategory(category))
    const templates = cards.map(category => CreateCategory(category))

    const newproductsCards_html = newproductsCards_templates.join(' ')
    const favoritesCards_html = favoritesCards_templates.join(' ')
    const html = templates.join(' ')

    document.querySelector('.newproducts-block__list').innerHTML = newproductsCards_html
    document.querySelector('.favorites-block__list').innerHTML = favoritesCards_html
    document.querySelector('.products-block__list').innerHTML = html

    $('.new-product').text('NEW!');
    $('.product-sale').text('SALE!');
})


