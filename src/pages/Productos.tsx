import React, { useState, useEffect } from 'react';

// ====== INTERFACES ======
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

interface Category {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// ====== DATOS ======
const categories: Category[] = [
  {
    title: 'Gaming',
    description: 'PCs, consolas y accesorios gaming',
    image: 'https://mipclista.com/img/cms/a2-3-600x400.png',
    alt: 'Gaming'
  },
  {
    title: 'Smartphones',
    description: 'Los últimos modelos y accesorios',
    image: 'https://hiraoka.com.pe/media/mageplaza/blog/post/i/p/iphone-16-precio-caracteristicas-peru.jpg',
    alt: 'Smartphones'
  },
  {
    title: 'Laptops & PCs',
    description: 'Equipos de última generación para trabajo y estudio',
    image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg',
    alt: 'Laptops y Computadoras'
  },
  {
    title: 'Accesorios Tech',
    description: 'Todo lo que necesitas para complementar tu setup',
    image: 'https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg',
    alt: 'Accesorios Tecnológicos'
  }
];

const products: Product[] = [
  {
    id: 1,
    name: 'Cámara de Seguridad Giratoria para Casa Wi-Fi 2K TAPO C212',
    price: 74.1,
    original_price: 195.0,
    discount: -62,
    image: 'https://oechsle.vteximg.com.br/arquivos/ids/18353484/image-e9973dc0a8304dc6a3cb84a1dd4e6fee.jpg?v=638563413734730000',
    brand: 'INFOCOM',
    rating: 5,
    reviews: 1,
    availability: 'Llega mañana',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 2,
    name: 'Micrófono Solapero Double K15 Tipo Lightning y Auxiliar',
    price: 60.39,
    original_price: 99.0,
    discount: -59,
    image: 'https://digitronik.pe/cdn/shop/files/image.png?v=1690827121&width=700',
    brand: 'DADATECNO',
    rating: 4,
    reviews: 2,
    availability: 'Retira mañana',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 3,
    name: 'iPhone 13 128GB',
    price: 989.55,
    original_price: 2199.0,
    discount: -55,
    image: 'https://pe.tiendasishop.com/cdn/shop/files/IMG-12496198_f5def5ea-2ecf-46d2-a7a5-694a6a19047e.jpg?v=1741363380',
    brand: 'FALABELLA',
    rating: 4,
    reviews: 1754,
    availability: 'Llega hoy',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 4,
    name: 'Galaxy A56 5g 256gb Black',
    price: 1263.21,
    original_price: 1599.0,
    discount: -21,
    image: 'https://media.falabella.com/falabellaPE/20933319_1/w=800,h=800,fit=pad',
    brand: 'FALABELLA',
    rating: 4,
    reviews: 371,
    availability: 'Retira hoy',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 5,
    name: 'Laptop Oficina Pro',
    price: 2449.9,
    original_price: 2450.0,
    discount: -53,
    image: 'https://alfatechperu.com/wp-content/uploads/2025/10/laptop-dell-inspiron-3530-intel-core-i5-1334u-8gb-ram-512gb-ssd-15-6-fhd-500x500.webp',
    brand: 'INFOCOM',
    rating: 5,
    reviews: 45,
    availability: 'Llega hoy',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 6,
    name: 'Monitor 4K 32 pulgadas',
    price: 550.0,
    original_price: 1200.0,
    discount: -54,
    image: 'https://cdn.memorykings.pe/files/2024/07/06/350261-MK037106-A1.jpg',
    brand: 'DADATECNO',
    rating: 5,
    reviews: 89,
    availability: 'Retira mañana',
    installments: '18 Cuotas Sin Interés'
  }
];

// ====== COMPONENTE PRINCIPAL ======
const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(
      cart.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckout = () => {
    alert('¡Gracias por tu compra!');
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <>
      {/* ====== ESTILOS ====== */}
      <style>{`
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
            --categories-bg: #aeb1b192;
            --why-us-bg: #ffffffff;
            --products-bg: #ffffffff;
            --footer-bg: #333;
            --footer-text: #ffffff;
        }
        body {
            font-family: "Poppins", sans-serif;
            color: #333;
            overflow-x: hidden;
            background-color: var(--light-blue);
            margin: 0;
            padding: 0;
        }
        .navbar {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 15px 0;
            background-color: var(--navbar-bg) !important;
        }
        .navbar-brand img {
            height: 40px;
        }
        .nav-link {
            font-weight: 500;
            color: var(--navbar-text) !important;
            margin: 0 10px;
            transition: all 0.3s;
        }
        .nav-link:hover {
            color: var(--navbar-hover) !important;
        }
        .nav-link.active {
            color: var(--navbar-active) !important;
            border-bottom: 2px solid var(--navbar-active);
        }
        .user-icon {
            font-size: 1.2rem;
            color: var(--navbar-text);
            cursor: pointer;
            transition: color 0.3s;
        }
        .user-icon:hover {
            color: var(--navbar-hover);
        }
        .cart-icon {
            position: relative;
            margin-left: 20px;
            cursor: pointer;
        }
        .cart-counter {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--orange);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .hero {
            background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), 
                        url("https://static.vecteezy.com/system/resources/previews/042/960/123/non_2x/ai-generated-gamepad-in-the-hands-of-a-gamer-on-a-technological-background-neon-lighting-video-games-online-with-friends-winnings-prizes-fun-entertainment-youth-culture-virtual-reality-photo.jpg");
            background-size: cover;
            background-position: center;
            color: white;
            padding: 220px 0;
            position: relative;
            min-height: 700px;
        }
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 25px;
            animation: fadeInUp 1s;
        }
        .hero p {
            font-size: 1.4rem;
            margin-bottom: 35px;
            animation: fadeInUp 1.2s;
        }
        .btn-primary, .btn-secondary {
            padding: 10px 25px;
            font-weight: 600;
            border: none;
            transition: all 0.3s;
            cursor: pointer;
        }
        .btn-primary {
            background-color: var(--blue);
        }
        .btn-primary:hover {
            background-color: #004099;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 82, 204, 0.3);
        }
        .btn-secondary {
            background-color: var(--orange);
        }
        .btn-secondary:hover {
            background-color: #e06900;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(255, 122, 0, 0.3);
        }
        .categories {
            padding: 60px 0;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), 
                        url('https://i.postimg.cc/bYHKxZMD/image.png') center/cover no-repeat;
            position: relative;
        }
        .categories > .container {
            position: relative;
            z-index: 1;
        }
        .section-title {
            color: #fff;
            text-align: center;
            margin-bottom: 40px;
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .category-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            margin-bottom: 30px;
            cursor: pointer;
            height: 280px;
        }
        .category-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 32px rgba(0, 150, 255, 0.4);
        }
        .category-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s;
        }
        .category-card:hover img {
            transform: scale(1.08) rotate(1deg);
            filter: brightness(1.1);
        }
        .category-content {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            padding: 25px;
            border-left: 4px solid #0096ff;
        }
        .category-content h3 {
            margin: 0 0 10px 0;
            font-size: 1.5rem;
            color: #0096ff;
            font-weight: bold;
        }
        .category-content p {
            margin: 0;
            color: #cccccc;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        .category-card:hover .category-content h3 {
            color: #00d4ff;
            text-shadow: 0 0 10px rgba(0, 150, 255, 0.6);
        }
        .why-us {
            padding: 80px 0;
            background-color: var(--why-us-bg);
        }
        .benefit-item {
            text-align: center;
            padding: 20px;
            transition: all 0.3s;
        }
        .benefit-item:hover {
            transform: translateY(-5px);
        }
        .benefit-icon {
            font-size: 3rem;
            color: var(--blue);
            margin-bottom: 20px;
        }
        .products {
            padding: 80px 0;
            background-color: var(--products-bg);
        }
        .products-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .results-count {
            color: #999;
            font-size: 14px;
            margin: 5px 0 0 0;
        }
        .sort-container {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .sort-select {
            padding: 8px 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
            background: white;
            cursor: pointer;
        }
        .search-container {
            position: sticky;
            top: 80px;
            background: white;
            padding: 15px;
            border-radius: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            margin: 0 auto 40px;
            max-width: 700px;
            display: flex;
            align-items: center;
        }
        .search-icon {
            color: var(--blue);
            font-size: 1.2rem;
            margin-right: 10px;
        }
        .search-input {
            border: none;
            flex: 1;
            padding: 10px 0;
            font-size: 1rem;
        }
        .search-input:focus {
            outline: none;
        }
        .filter-btn {
            background: none;
            border: none;
            color: var(--orange);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0 10px;
        }
        .products-grid-store {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 30px;
        }
        .product-card-store {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
        }
        .product-card-store:hover {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transform: translateY(-4px);
            border-color: #0066ff;
        }
        .product-image-wrapper {
            position: relative;
            width: 100%;
            height: 350px;
            background: linear-gradient(135deg, #fcfcfc 0%, #f5f5f5 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
            border-bottom: 1px solid #ececec;
        }
        .product-image {
            max-width: 95%;
            max-height: 95%;
            width: auto;
            height: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
        }
        .product-card-store:hover .product-image {
            transform: scale(1.08);
        }
        .discount-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ff6600;
            color: white;
            padding: 6px 10px;
            border-radius: 4px;
            font-weight: 700;
            font-size: 13px;
        }
        .product-info {
            padding: 15px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .brand-name {
            color: #0066ff;
            font-size: 12px;
            font-weight: 700;
            margin: 0 0 8px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .product-title {
            font-size: 13px;
            font-weight: 600;
            margin: 0 0 10px 0;
            line-height: 1.4;
            color: #333;
            min-height: 32px;
        }
        .rating {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
            font-size: 13px;
        }
        .rating span {
            color: #ffc107;
        }
        .reviews {
            color: #999;
            font-size: 12px;
        }
        .price-section {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }
        .original-price {
            text-decoration: line-through;
            color: #999;
            font-size: 12px;
        }
        .current-price {
            font-size: 18px;
            font-weight: 700;
            color: #0066ff;
        }
        .availability {
            font-size: 12px;
            color: #00aa00;
            font-weight: 600;
            margin: 5px 0;
        }
        .installments {
            font-size: 11px;
            color: #666;
            margin: 5px 0 10px 0;
        }
        .btn-add-cart-store {
            background: white;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: auto;
        }
        .btn-add-cart-store:hover {
            background: #f0f0f0;
            border-color: #0066ff;
            color: #0066ff;
        }
        .view-more-container {
            display: flex;
            justify-content: center;
            margin-top: 50px;
            padding: 30px 0;
        }
        .btn-view-more {
            display: inline-block;
            text-decoration: none;
            text-align: center;
            background: white;
            border: 2px solid #0066ff;
            color: #0066ff;
            padding: 12px 50px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .btn-view-more:hover {
            background: #0066ff;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(0, 102, 255, 0.3);
        }
        .cart-sidebar {
            position: fixed;
            top: 0;
            right: -400px;
            width: 400px;
            height: 100vh;
            background: white;
            z-index: 1000;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            padding: 20px;
            overflow-y: auto;
        }
        .cart-sidebar.active {
            right: 0;
        }
        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        .close-cart {
            font-size: 1.5rem;
            cursor: pointer;
        }
        .cart-item {
            display: flex;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }
        .cart-item-image {
            width: 80px;
            height: 80px;
            overflow: hidden;
            margin-right: 15px;
        }
        .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .cart-item-details {
            flex: 1;
        }
        .cart-item-title {
            font-weight: 600;
            margin-bottom: 5px;
        }
        .cart-item-price {
            color: var(--blue);
            font-weight: 600;
        }
        .cart-item-actions {
            display: flex;
            align-items: center;
            margin-top: 10px;
        }
        .quantity-btn {
            background: var(--light-gray);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .item-quantity {
            margin: 0 10px;
            font-weight: 600;
        }
        .remove-item {
            color: #ff3b30;
            background: none;
            border: none;
            margin-left: auto;
            cursor: pointer;
        }
        .cart-footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        .cart-total {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
        .checkout-btn {
            background: var(--blue);
            color: white;
            border: none;
            width: 100%;
            padding: 12px;
            border-radius: 5px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }
        .checkout-btn:hover {
            background: #004099;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .overlay.active {
            display: block;
            opacity: 1;
        }
        footer {
            background: var(--footer-bg);
            color: var(--footer-text);
            padding: 48px 24px 24px;
            text-align: center;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1024px) {
            .products-grid-store { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .products-grid-store { grid-template-columns: 1fr; gap: 20px; }
            .products-header { flex-direction: column; align-items: flex-start; gap: 15px; }
            .hero { padding: 120px 0; min-height: 500px; }
            .hero h1 { font-size: 2.5rem; }
            .hero p { font-size: 1.1rem; }
        }
      `}</style>

      {/* ====== CDN ====== */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* ====== HEADER ====== */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{
        backgroundColor: '#000',
        borderBottom: '2px solid #000',
        height: '90px',
        padding: '15px 0',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container d-flex justify-content-between align-items-center" style={{ maxWidth: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
          <a className="navbar-brand" href="#" style={{ marginRight: '20px' }}>
            <img 
              src="https://i.postimg.cc/sxSqqXDz/LOGO-png.png" 
              alt="Soluciones Integrales JB - Tu mejor opción Tecnológica" 
              style={{ height: '55px', marginTop: '10px' }}
            />
          </a>

          <div className="d-flex align-items-center" style={{ gap: '30px' }}>
            <ul className="navbar-nav d-flex flex-row" style={{ margin: 0, padding: 0 }}>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <a className="nav-link active" href="#" style={{
                  color: '#06bdeb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  borderBottom: '2px solid #06bdeb',
                  paddingBottom: '5px'
                }}>Inicio</a>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <a className="nav-link" href="#" style={{
                  color: '#06bdeb',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Productos</a>
              </li>
              <li className="nav-item" style={{ marginRight: '20px' }}>
                <a className="nav-link" href="#" style={{
                  color: '#06bdeb',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{
                  color: '#06bdeb',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Contacto</a>
              </li>
            </ul>

            <div className="d-flex align-items-center" style={{ gap: '15px' }}>
              <div className="user-icon" style={{ fontSize: '1.2rem', color: '#06bdeb', cursor: 'pointer' }}>
                <i className="fas fa-user"></i>
              </div>
              <div 
                className="cart-icon" 
                onClick={() => setIsCartOpen(true)} 
                style={{ 
                  position: 'relative', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <i className="fas fa-shopping-cart" style={{ color: '#06bdeb', fontSize: '1.2rem' }}></i>
                {cartItemCount > 0 && (
                  <span 
                    className="cart-counter" 
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      backgroundColor: '#ff7a00',
                      color: 'white',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ====== HERO ====== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>Tu Tecnología al Mejor Precio</h1>
              <p>Descubre las últimas innovaciones en electrónicos, gaming y tecnología con garantía y envío gratis.</p>
              <div className="d-flex gap-3 flex-wrap">
                <button 
                  className="btn btn-secondary" 
                  style={{
                    backgroundColor: '#ff7a00',
                    color: 'white',
                    border: 'none',
                    padding: '10px 25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Comprar Ahora
                </button>
                <button 
                  className="btn btn-primary" 
                  style={{
                    backgroundColor: '#0066ff',
                    color: 'white',
                    border: 'none',
                    padding: '10px 25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Ver Ofertas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY US ====== */}
      <section className="why-us" id="why-us">
        <div className="container">
          <h2 className="section-title" style={{ color: '#333', textShadow: 'none' }}>¿Por qué elegirnos?</h2>
          <p className="text-center mb-5">¿Por qué elegir JB S.A.C.? Calidad garantizada, precios competitivos y atención personalizada.</p>
          <div className="row">
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

      {/* ====== CATEGORIES ====== */}
      <section className="categories" id="categories">
        <div className="container">
          <h2 className="section-title">Nuestras Categorías</h2>
          <div className="row">
            {categories.map(cat => (
              <div className="col-md-6" key={cat.title}>
                <div className="category-card">
                  <img src={cat.image} alt={cat.alt} loading="lazy" />
                  <div className="category-content">
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRODUCTS ====== */}
      <section className="products" id="products">
        <div className="container">
          <div className="products-header">
            <div>
              <h2 className="section-title" style={{ color: '#333', textShadow: 'none' }}>PRODUCTOS</h2>
              <p className="results-count">Resultados (520533)</p>
            </div>
            <div className="sort-container">
              <label>Ordenar por:</label>
              <select className="sort-select">
                <option>Recomendados</option>
              </select>
            </div>
          </div>

          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="filter-btn" disabled>
              <i className="fas fa-filter"></i>
            </button>
          </div>

          <div className="products-grid-store">
            {filteredProducts.map(product => (
              <div className="product-card-store" key={product.id}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
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
                  <button className="btn-add-cart-store" onClick={() => addToCart(product)}>
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="view-more-container">
            <a href="#products" className="btn-view-more">Ver más productos</a>
          </div>
        </div>
      </section>

      {/* ====== CART SIDEBAR ====== */}
      <div className={`overlay ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-sidebar ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Tu Carrito</h3>
          <span className="close-cart" onClick={() => setIsCartOpen(false)}>&times;</span>
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
                  <p className="cart-item-price">S/ {item.price.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span id="cartTotal">S/ {cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout} disabled={cart.length === 0}>
            Proceder al pago
          </button>
        </div>
      </div>

      
    </>
  );
};

export default App;