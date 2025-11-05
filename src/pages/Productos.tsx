import React, { useState, useEffect, useCallback, useMemo } from 'react';


// --- 1. Tipos de Datos (Interfaces) ---

interface Product {
    id: number;
    name: string;
    price: number;
    original_price: number;
    discount: number;
    image: string;
    brand: string;
    rating: number;
    reviews: number;
    availability: string;
    installments: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface Category {
    title: string;
    description: string;
    image: string;
    alt: string;
}

// --- 2. Datos de Mock ---

const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: 'Cámara de Seguridad Giratoria para Casa Wi-Fi 2K TAPO C212', price: 74.10, original_price: 195.00, discount: -62, image: 'https://oechsle.vteximg.com.br/arquivos/ids/18353484/image-e9973dc0a8304dc6a3cb84a1dd4e6fee.jpg?v=638563413734730000', brand: 'INFOCOM', rating: 5, reviews: 1, availability: 'Llega mañana', installments: '18 Cuotas Sin Interés' },
    { id: 2, name: 'Micrófono Solapero Double K15 Tipo Lightning y Auxiliar', price: 60.39, original_price: 99.00, discount: -59, image: 'https://digitronik.pe/cdn/shop/files/image.png?v=1690827121&width=700', brand: 'DADATECNO', rating: 4, reviews: 2, availability: 'Retira mañana', installments: '18 Cuotas Sin Interés' },
    { id: 3, name: 'iPhone 13 128GB', price: 989.55, original_price: 2199.00, discount: -55, image: 'https://pe.tiendasishop.com/cdn/shop/files/IMG-12496198_f5def5ea-2ecf-46d2-a7a5-694a6a19047e.jpg?v=1741363380', brand: 'FALABELLA', rating: 4, reviews: 1754, availability: 'Llega hoy', installments: '18 Cuotas Sin Interés' },
    { id: 4, name: 'Galaxy A56 5g 256gb Black', price: 1263.21, original_price: 1599.00, discount: -21, image: 'https://media.falabella.com/falabellaPE/20933319_1/w=800,h=800,fit=pad', brand: 'FALABELLA', rating: 4, reviews: 371, availability: 'Retira hoy', installments: '18 Cuotas Sin Interés' },
    { id: 5, name: 'Laptop Oficina Pro', price: 2449.90, original_price: 2450.00, discount: -53, image: 'https://alfatechperu.com/wp-content/uploads/2025/10/laptop-dell-inspiron-3530-intel-core-i5-1334u-8gb-ram-512gb-ssd-15-6-fhd-500x500.webp', brand: 'INFOCOM', rating: 5, reviews: 45, availability: 'Llega hoy', installments: '18 Cuotas Sin Interés' },
    { id: 6, name: 'Monitor 4K 32 pulgadas', price: 550.00, original_price: 1200.00, discount: -54, image: 'https://cdn.memorykings.pe/files/2024/07/06/350261-MK037106-A1.jpg', brand: 'DADATECNO', rating: 5, reviews: 89, availability: 'Retira mañana', installments: '18 Cuotas Sin Interés' }
];

const MOCK_CATEGORIES: Category[] = [
    { title: 'Gaming', description: 'PCs, consolas y accesorios gaming', image: 'https://mipclista.com/img/cms/a2-3-600x400.png', alt: 'Gaming' },
    { title: 'Smartphones', description: 'Los últimos modelos y accesorios', image: 'https://hiraoka.com.pe/media/mageplaza/blog/post/i/p/iphone-16-precio-caracteristicas-peru.jpg', alt: 'Smartphones' },
    { title: 'Laptops & PCs', description: 'Equipos de última generación para trabajo y estudio', image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg', alt: 'Laptops y Computadoras' },
    { title: 'Accesorios Tech', description: 'Todo lo que necesitas para complementar tu setup', image: 'https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg', alt: 'Accesorios Tecnológicos' }
];

// --- 3. Estilos Globales (Componente de Estilos) ---

const GlobalStyles: React.FC = () => (
    <style dangerouslySetInnerHTML={{ __html: `
        :root {
            --blue: #0052cc;
            --orange: #ff7a00;
            --light-gray: #f5f5f5;
            --dark-gray: #333;
            --light-blue: #ffffff;
            --navbar-bg: #090909ff;
            --navbar-text: #06bdebff;
            --navbar-hover: #0052cc;
            --navbar-active: #06bdebff;
            --why-us-bg: #ffffffff;
            --products-bg: #ffffffff;
            --footer-bg: #0b0b0b; /* Ajustado para el footer en línea */
            --footer-text: #d1d5db; /* Ajustado para el footer en línea */
        }

        body {
            font-family: "Poppins", sans-serif;
            color: #333;
            overflow-x: hidden;
            background-color: var(--light-blue);
        }

        .navbar {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 15px 0;
            background-color: var(--navbar-bg) !important;
        }

        .navbar-brand img { height: 40px; }
        .nav-link { font-weight: 500; color: var(--navbar-text) !important; margin: 0 10px; transition: all 0.3s; }
        .nav-link:hover { color: var(--navbar-hover) !important; }
        .nav-link.active { color: var(--navbar-active) !important; border-bottom: 2px solid var(--navbar-active); }
        .user-icon { font-size: 1.2rem; color: var(--navbar-text); cursor: pointer; transition: color 0.3s; }
        .user-icon:hover { color: var(--navbar-hover); }
        .cart-icon { position: relative; margin-left: 20px; cursor: pointer; }
        .cart-counter {
            position: absolute; top: -8px; right: -8px; background-color: var(--orange); color: white; border-radius: 50%;
            width: 20px; height: 20px; font-size: 12px; display: flex; align-items: center; justify-content: center;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("https://static.vecteezy.com/system/resources/previews/042/960/123/non_2x/ai-generated-gamepad-in-the-hands-of-a-gamer-on-a-technological-background-neon-lighting-video-games-online-with-friends-winnings-prizes-fun-entertainment-youth-culture-virtual-reality-photo.jpg");
            background-size: cover; background-position: center; color: white; padding: 220px 0; min-height: 700px;
        }
        .hero h1 { font-size: 3.5rem; font-weight: 700; margin-bottom: 25px; animation: fadeInUp 1s; }
        .hero p { font-size: 1.4rem; margin-bottom: 35px; animation: fadeInUp 1.2s; }
        
        .btn-primary { background-color: var(--blue); border: none; padding: 10px 25px; font-weight: 600; transition: all 0.3s; }
        .btn-primary:hover { background-color: #004099; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0, 82, 204, 0.3); }
        .btn-secondary { background-color: var(--orange); border: none; padding: 10px 25px; font-weight: 600; transition: all 0.3s; }
        .btn-secondary:hover { background-color: #e06900; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255, 122, 0, 0.3); }

        /* General Section */
        .why-us, .products { padding: 80px 0; background-color: var(--products-bg); }
        .section-title { text-align: center; font-weight: 700; margin-bottom: 50px; color: var(--dark-gray); position: relative; }
        .section-title:after { content: ""; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 70px; height: 3px; background: var(--blue); }

        /* Why Us */
        .benefit-item { text-align: center; padding: 20px; transition: all 0.3s; }
        .benefit-item:hover { transform: translateY(-5px); }
        .benefit-icon { font-size: 3rem; color: var(--blue); margin-bottom: 20px; }

        /* Categories Section (Estilos Personalizados) */
        .categories {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), 
                        url('https://i.postimg.cc/bYHKxZMD/image.png') center/cover no-repeat;
            background-attachment: scroll;
            padding: 60px 0;
            position: relative;
        }
        .categories > .container { position: relative; z-index: 1; }
        .categories .section-title { color: #fff; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }
        .category-card { border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); margin-bottom: 30px; cursor: pointer; }
        .category-card:hover { transform: translateY(-8px); box-shadow: 0 16px 32px rgba(0, 150, 255, 0.4); }
        .category-card img { width: 100%; height: 280px; object-fit: cover; display: block; transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .category-card:hover img { transform: scale(1.08) rotate(1deg); filter: brightness(1.1); }
        .category-content { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 25px; border-left: 4px solid #0096ff; }
        .category-content h3 { margin: 0 0 10px 0; font-size: 1.5rem; color: #0096ff; font-weight: bold; }
        .category-content p { margin: 0; color: #cccccc; font-size: 0.95rem; line-height: 1.5; }
        .category-card:hover .category-content h3 { color: #00d4ff; text-shadow: 0 0 10px rgba(0, 150, 255, 0.6); }

        /* Products Section - Listado */
        .products-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .results-count { color: #999; font-size: 14px; margin: 5px 0 0 0; }
        .sort-container { display: flex; align-items: center; gap: 15px; }
        .sort-select { padding: 8px 15px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; background: white; cursor: pointer; }
        .products-grid-store { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-top: 30px; }
        @media (max-width: 1024px) { .products-grid-store { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .products-grid-store { grid-template-columns: 1fr; gap: 20px; } .products-header { flex-direction: column; align-items: flex-start; gap: 15px; } }

        .product-card-store { background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .product-card-store:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); transform: translateY(-4px); border-color: #0066ff; }
        .product-image-wrapper { position: relative; width: 100%; height: 350px; background: linear-gradient(135deg, #fcfcfc 0%, #f5f5f5 100%); display: flex; align-items: center; justify-content: center; overflow: visible; border-bottom: 1px solid #ececec; }
        .product-image { max-width: 95%; max-height: 95%; width: auto; height: auto; object-fit: contain; transition: transform 0.3s ease; }
        .product-card-store:hover .product-image { transform: scale(1.08); }
        .discount-badge { position: absolute; top: 10px; right: 10px; background: #ff6600; color: white; padding: 6px 10px; border-radius: 4px; font-weight: 700; font-size: 13px; }
        .product-info { padding: 15px; flex-grow: 1; display: flex; flex-direction: column; }
        .brand-name { color: #0066ff; font-size: 12px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px; }
        .product-title { font-size: 13px; font-weight: 600; margin: 0 0 10px 0; line-height: 1.4; color: #333; min-height: 32px; }
        .rating span { color: #ffc107; }
        .reviews { color: #999; font-size: 12px; }
        .price-section { display: flex; gap: 10px; margin-bottom: 10px; }
        .original-price { text-decoration: line-through; color: #999; font-size: 12px; }
        .current-price { font-size: 18px; font-weight: 700; color: #0066ff; }
        .availability { font-size: 12px; color: #00aa00; font-weight: 600; margin: 5px 0; }
        .installments { font-size: 11px; color: #666; margin: 5px 0 10px 0; }
        .btn-add-cart-store { background: white; border: 1px solid #ddd; padding: 10px; border-radius: 4px; font-weight: 600; font-size: 13px; cursor: pointer; transition: all 0.3s ease; margin-top: auto; width: 100%; }
        .btn-add-cart-store:hover { background: #f0f0f0; border-color: #0066ff; color: #0066ff; }

        .view-more-container { display: flex; justify-content: center; margin-top: 50px; padding: 30px 0; }
        .btn-view-more { display: inline-block; text-decoration: none; text-align: center; background: white; border: 2px solid #0066ff; color: #0066ff; padding: 12px 50px; border-radius: 6px; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
        .btn-view-more:hover { background: #0066ff; color: white; transform: translateY(-2px); box-shadow: 0 5px 20px rgba(0, 102, 255, 0.3); text-decoration: none; }

        /* Search Bar */
        .search-container { position: sticky; top: 80px; z-index: 99; background: white; padding: 15px; border-radius: 30px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); margin: 0 auto; max-width: 700px; margin-bottom: 40px; display: flex; align-items: center; }
        .search-icon { color: var(--blue); font-size: 1.2rem; margin-right: 10px; }
        .search-input { border: none; flex: 1; padding: 10px 0; font-size: 1rem; }
        .search-input:focus { outline: none; }
        .filter-btn { background: none; border: none; color: var(--orange); font-size: 1.2rem; cursor: pointer; padding: 0 10px; }
        .filter-modal-content { border-radius: 15px; }
        .filter-header { background-color: var(--blue); color: white; border-radius: 15px 15px 0 0; }
        .range-slider { margin-top: 10px; }

        /* Cart Sidebar */
        .cart-sidebar { position: fixed; top: 0; right: -400px; width: 400px; height: 100vh; background: white; z-index: 1000; box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; padding: 20px; overflow-y: auto; }
        .cart-sidebar.active { right: 0; }
        .cart-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 20px; }
        .close-cart { font-size: 1.5rem; cursor: pointer; }
        .cart-item { display: flex; align-items: center; padding: 15px 0; border-bottom: 1px solid #eee; }
        .cart-item-image { width: 80px; height: 80px; overflow: hidden; margin-right: 15px; }
        .cart-item-image img { width: 100%; height: 100%; object-fit: contain; }
        .cart-item-details { flex: 1; }
        .cart-item-title { font-weight: 600; margin-bottom: 5px; }
        .cart-item-price { color: var(--blue); font-weight: 600; }
        .cart-item-actions { display: flex; align-items: center; margin-top: 10px; }
        .quantity-btn { background: var(--light-gray); border: none; width: 30px; height: 30px; border-radius: 50%; font-weight: 700; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .item-quantity { margin: 0 10px; font-weight: 600; }
        .remove-item { color: #ff3b30; background: none; border: none; margin-left: auto; cursor: pointer; }
        .cart-footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
        .cart-total { display: flex; justify-content: space-between; font-weight: 700; font-size: 1.2rem; margin-bottom: 20px; }
        .checkout-btn { background: var(--blue); color: white; border: none; width: 100%; padding: 12px; border-radius: 5px; font-weight: 600; font-size: 1.1rem; transition: all 0.3s; }
        .checkout-btn:hover { background: #004099; }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999; display: none; opacity: 0; transition: opacity 0.3s; }
        .overlay.active { display: block; opacity: 1; }

        /* Footer */
        @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `}} />
);

// --- 4. Componentes Reutilizables ---

const ProductCard: React.FC<{ product: Product, onAddToCart: (id: number) => void }> = React.memo(({ product, onAddToCart }) => {
    return (
        <div className="product-card-store">
            <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="discount-badge">{product.discount}%</div>
            </div>
            <div className="product-info">
                <p className="brand-name">{product.brand}</p>
                <h3 className="product-title">{product.name}</h3>
                <div className="rating">
                    {'★'.repeat(product.rating)}
                    <span className="reviews">({product.reviews})</span>
                </div>
                <div className="price-section">
                    <span className="original-price">S/ {product.original_price.toFixed(2)}</span>
                    <span className="current-price">S/ {product.price.toFixed(2)}</span>
                </div>
                <p className="availability">{product.availability}</p>
                <p className="installments">{product.installments}</p>
                <button className="btn-add-cart-store" onClick={() => onAddToCart(product.id)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
});

// --- 5. Componente Navbar ---

const Navbar: React.FC<{ cartCount: number, onCartToggle: () => void }> = ({ cartCount, onCartToggle }) => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://i.postimg.cc/sxSqqXDz/LOGO-png.png" alt="JB S.A.C. Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                </ul>
                <div className="ms-3 d-flex align-items-center">
                    <div className="user-icon me-3"><i className="fas fa-user"></i></div>
                    <div className="cart-icon" onClick={onCartToggle}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-counter">{cartCount}</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

// --- 6. Componente CartSidebar ---

const CartSidebar: React.FC<{
    isCartOpen: boolean,
    cart: CartItem[],
    cartTotal: number,
    onClose: () => void,
    onUpdateQuantity: (id: number, quantity: number) => void,
    onRemove: (id: number) => void,
    onCheckout: () => void
}> = ({ isCartOpen, cart, cartTotal, onClose, onUpdateQuantity, onRemove, onCheckout }) => {

    const handleQuantityChange = (id: number, delta: number) => {
        const item = cart.find(i => i.id === id);
        if (item) {
            const newQuantity = item.quantity + delta;
            if (newQuantity >= 1) {
                onUpdateQuantity(id, newQuantity);
            }
        }
    };

    return (
        <>
            <div className={`overlay ${isCartOpen ? 'active' : ''}`} onClick={onClose}></div>
            <div className={`cart-sidebar ${isCartOpen ? 'active' : ''}`}>
                <div className="cart-header">
                    <h3>Tu Carrito</h3>
                    <span className="close-cart" onClick={onClose}>&times;</span>
                </div>
                <div id="cartItems">
                    {cart.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h6 className="cart-item-title">{item.name}</h6>
                                    <p className="cart-item-price">S/{item.price.toFixed(2)}</p>
                                    <div className="cart-item-actions">
                                        <button className="quantity-btn decrease-btn" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                        <span className="item-quantity">{item.quantity}</span>
                                        <button className="quantity-btn increase-btn" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                        <button className="remove-item" onClick={() => onRemove(item.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span id="cartTotal">S/{cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn" onClick={onCheckout}>Proceder al pago</button>
                    </div>
                )}
            </div>
        </>
    );
};

// --- 7. Componentes de Maquetación (Sin lógica de estado) ---

const Hero: React.FC = () => (
    <section className="hero" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <h1>Tu Tecnología al Mejor Precio</h1>
                    <p>Descubre las últimas innovaciones en electrónicos, gaming y tecnología con garantía y envío gratis.</p>
                    <div className="d-flex gap-3 flex-wrap">
                        <button className="btn btn-secondary">Comprar Ahora</button>
                        <button className="btn btn-primary">Ver Ofertas</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhyUs: React.FC = () => (
    <section className="why-us" id="why-us">
        <div className="container">
            <h2 className="section-title">¿Por qué elegirnos?</h2>
            <p className="text-center mb-5">¿Por qué elegir JB S.A.C.? Calidad garantizada, precios competitivos y atención personalizada.</p>
            <div className="row benefits-container">
                <div className="col-md-4">
                    <div className="benefit-item">
                        <div className="benefit-icon"><i className="fas fa-shipping-fast"></i></div>
                        <h4>Envío seguro</h4>
                        <p>Entregas rápidas a todo el Perú con seguimiento en tiempo real</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="benefit-item">
                        <div className="benefit-icon"><i className="fas fa-shield-alt"></i></div>
                        <h4>Garantía oficial</h4>
                        <p>Todos nuestros productos cuentan con garantía directa del fabricante</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="benefit-item">
                        <div className="benefit-icon"><i className="fas fa-headset"></i></div>
                        <h4>Soporte técnico</h4>
                        <p>Asistencia técnica especializada para resolver todas tus dudas</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Categories: React.FC<{ categories: Category[] }> = ({ categories }) => (
    <section className="categories" id="categories">
        <div className="container">
            <h2 className="section-title">Nuestras Categorías</h2>
            <div className="row">
                {categories.map((category, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="category-card">
                            <img src={category.image} alt={category.alt} loading="lazy" />
                            <div className="category-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ProductsSection: React.FC<{
    products: Product[],
    onAddToCart: (id: number) => void,
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchTerm: string
}> = ({ products, onAddToCart, onSearchChange, searchTerm }) => (
    <section className="products" id="products">
        <div className="container">
            <div className="products-header">
                <div>
                    <h2 className="section-title">PRODUCTOS</h2>
                    <p className="results-count">Resultados ({products.length})</p>
                </div>
                <div className="sort-container">
                    <label>Ordenar por:</label>
                    <select className="sort-select">
                        <option>Recomendados</option>
                        <option>Precio: Menor a Mayor</option>
                        <option>Precio: Mayor a Menor</option>
                        <option>Más Vendidos</option>
                    </select>
                </div>
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <i className="fas fa-search search-icon"></i>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={onSearchChange}
                />
                <button className="filter-btn" data-bs-toggle="modal" data-bs-target="#filterModal">
                    <i className="fas fa-filter"></i>
                </button>
            </div>

            <div className="products-grid-store" id="productsContainer">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>

            <div className="view-more-container">
                <a href="productos.php" className="btn-view-more">Ver más productos</a>
            </div>
        </div>
    </section>
);

// --- 8. Modals (Necesitan data-bs-toggle/target para Bootstrap JS) ---

const FilterModal: React.FC<{
    filterPrice: number,
    onPriceRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onApplyFilters: () => void
}> = ({ filterPrice, onPriceRangeChange, onApplyFilters }) => (
    <div className="modal fade" id="filterModal" tabIndex={-1} aria-labelledby="filterModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content filter-modal-content">
                <div className="modal-header filter-header">
                    <h5 className="modal-title" id="filterModalLabel">Filtrar Productos</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* Campos de filtro (simplificados) */}
                    <div className="mb-4">
                        <label className="form-label fw-bold">Categoría</label>
                        <div className="form-check"><input className="form-check-input" type="checkbox" value="gaming" id="filterGaming" /><label className="form-check-label" htmlFor="filterGaming">Gaming</label></div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-bold">Rango de Precio</label>
                        <div className="range-slider">
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="5000"
                                value={filterPrice}
                                onChange={onPriceRangeChange}
                                id="priceRange"
                            />
                            <div className="d-flex justify-content-between">
                                <span>S/0</span>
                                <span id="priceValue">S/{filterPrice}</span>
                                <span>S/5000</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-bold">Marca</label>
                        <select className="form-select" id="brandSelect">
                            <option value="">Todas las marcas</option>
                            <option value="ryzer">Ryzer</option>
                            <option value="halion">Halion</option>
                        </select>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={onApplyFilters}>Aplicar Filtros</button>
                </div>
            </div>
        </div>
    </div>
);

const CheckoutModal: React.FC<{ onConfirmOrder: () => void }> = ({ onConfirmOrder }) => (
    <div className="modal fade" id="checkoutModal" tabIndex={-1} aria-labelledby="checkoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="checkoutModalLabel">Finalizar Compra</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h6 className="fw-bold mb-3">Información de Envío</h6>
                            {/* Campos del formulario de envío */}
                            <input type="text" className="form-control mb-3" placeholder="Nombre completo" required />
                            <input type="email" className="form-control mb-3" placeholder="Email" required />
                            <input type="text" className="form-control mb-3" placeholder="Dirección de envío" required />
                            <div className='row'><div className='col-md-6'><input type="text" className="form-control mb-3" placeholder="Ciudad" required /></div><div className='col-md-6'><input type="text" className="form-control mb-3" placeholder="Código Postal" required /></div></div>
                        </div>
                        <div className="col-md-6">
                            <h6 className="fw-bold mb-3">Información de Pago</h6>
                            {/* Campos del formulario de pago */}
                            <input type="text" className="form-control mb-3" placeholder="Nombre en la tarjeta" required />
                            <input type="text" className="form-control mb-3" placeholder="Número de tarjeta (XXXX-XXXX-XXXX-XXXX)" required />
                            <div className='row'><div className='col-md-6'><input type="text" className="form-control mb-3" placeholder="MM/AA" required /></div><div className='col-md-6'><input type="text" className="form-control mb-3" placeholder="CVV (XXX)" required /></div></div>
                            <div className="d-flex justify-content-between mt-4">
                                <h6 className="fw-bold">Total:</h6>
                                <h6 className="fw-bold" id="checkoutTotal">S/0.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={onConfirmOrder}>Confirmar Orden</button>
                </div>
            </div>
        </div>
    </div>
);

const Footer: React.FC = () => (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '3rem 1.5rem' }}>
        <div className="container">
            <div className='row footer-grid'>
                {/* Logo + Descripción */}
                <div className='col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center text-center'>
                    <div style={{ marginBottom: '1.5rem', width: '144px', height: '144px', perspective: '1200px' }}>
                        <img src="https://i.postimg.cc/qBZLn0wd/image.png" alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover', transform: 'rotateX(15deg) rotateY(-25deg) rotateZ(5deg)', transition: 'transform 0.3s ease', boxShadow: '-15px 15px 30px rgba(0, 0, 0, 0.6)' }} />
                    </div>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: '#9ca3af' }}>Impulsamos el éxito de tu negocio con soluciones digitales innovadoras y diseño creativo, adaptados a tus necesidades para asegurar tu crecimiento.</p>
                </div>

                {/* Servicios */}
                <div className='col-lg-3 col-md-6 mb-4'>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>Servicios</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Tecnología de información</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Ingeniería eléctrica</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Marketing digital</a></li>
                    </ul>
                </div>

                {/* Nosotros */}
                <div className='col-lg-3 col-md-6 mb-4'>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>Nosotros</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>¿Quiénes Somos?</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Convenios</a></li>
                        <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Términos y Garantías</a></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div className='col-lg-3 col-md-6 mb-4'>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>Conecta con nosotros</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#06b6d4' }}>📍</span> Av. Lopez de Zúñiga Nº 547 2º Piso, Chancay</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#06b6d4' }}>✉️</span> <a href="mailto:consultas@solucionesintegralesjb.com" style={{ color: 'inherit', textDecoration: 'none' }}>consultas@solucionesintegralesjb.com</a></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#06b6d4' }}>📞</span> <a href="tel:+51996720630" style={{ color: 'inherit', textDecoration: 'none' }}>+51 996 720 630</a></li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#06b6d4' }}>📞</span> <a href="tel:+51979687700" style={{ color: 'inherit', textDecoration: 'none' }}>+51 979 687 700</a></li>
                    </ul>
                </div>
            </div>
            {/* Línea inferior */}
            <div style={{ borderTop: '1px solid #374151', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>
                    © {new Date().getFullYear()} Soluciones Integrales JB S.A.C. - Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>
);

// --- 9. Componente App principal (Lógica de Estado) ---

const App: React.FC = () => {
    // Estado del carrito y UI
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    // Estado de filtros
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPrice, setFilterPrice] = useState(5000); // Rango máximo inicial

    // --- Persistencia del Carrito ---
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // --- Lógica del Carrito (Optimizada con useCallback) ---
    const addToCart = useCallback((productId: number) => {
        const product = MOCK_PRODUCTS.find((p) => p.id === productId);
        if (!product) return;

        setCart(prevCart => {
            const existingItem = prevCart.find((item) => item.id === productId);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setIsCartOpen(true);
    }, []);

    const removeFromCart = useCallback((productId: number) => {
        setCart(prevCart => prevCart.filter((item) => item.id !== productId));
    }, []);

    const updateQuantity = useCallback((productId: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCart(prevCart => prevCart.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ));
    }, []);

    // --- Cálculos Derivados (Optimizados con useMemo) ---
    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);

    const cartCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    // --- Lógica de Interacción (Modals) ---
    const handleCheckout = () => {
        if (cart.length > 0) {
            const checkoutModalElement = document.getElementById('checkoutModal');
            if (checkoutModalElement) {
                document.getElementById('checkoutTotal')!.textContent = `S/${cartTotal.toFixed(2)}`;
                // Usar la clase Modal de Bootstrap global
                new (window as any).bootstrap.Modal(checkoutModalElement).show();
                setIsCartOpen(false); // Cierra la sidebar del carrito
            }
        }
    };
    
    const confirmOrder = () => {
        setCart([]); // Vaciar carrito
        const checkoutModalElement = document.getElementById('checkoutModal');
        if (checkoutModalElement) {
            new (window as any).bootstrap.Modal(checkoutModalElement).hide();
        }
        alert("¡Gracias por tu compra! Recibirás un correo con los detalles de tu pedido.");
    };

    // --- Lógica de Búsqueda y Filtro ---
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setFilterPrice(value);
    };

    const applyFilters = () => {
        const filterModalElement = document.getElementById('filterModal');
        if (filterModalElement) {
            new (window as any).bootstrap.Modal(filterModalElement).hide();
        }
    };

    // Aplicar filtros (búsqueda y precio)
    const filteredProducts = useMemo(() => {
        return MOCK_PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesPrice = product.price <= filterPrice; 
            return matchesSearch && matchesPrice;
        });
    }, [searchTerm, filterPrice]);

    return (
        <div className="App">
            <GlobalStyles />
            <Navbar cartCount={cartCount} onCartToggle={() => setIsCartOpen(true)} />
            <main>
                <Hero />
                <WhyUs />
                <Categories categories={MOCK_CATEGORIES} />
                <ProductsSection
                    products={filteredProducts}
                    onAddToCart={addToCart}
                    onSearchChange={handleSearch}
                    searchTerm={searchTerm}
                />
            </main>
            <CartSidebar
                isCartOpen={isCartOpen}
                cart={cart}
                cartTotal={cartTotal}
                onClose={() => setIsCartOpen(false)}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                onCheckout={handleCheckout}
            />
            
            <FilterModal 
                filterPrice={filterPrice}
                onPriceRangeChange={handlePriceRangeChange}
                onApplyFilters={applyFilters}
            />
            <CheckoutModal onConfirmOrder={confirmOrder} />
            <Footer />
        </div>
    );
};

export default App;