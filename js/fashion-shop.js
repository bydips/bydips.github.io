(function () {
  'use strict';

  var STORAGE_KEYS = {
    cart: 'fashion_cart_v1',
    order: 'fashion_order_v1'
  };

  var SERVICE_FEE = 3000;
  var CART_SHIPPING_ESTIMATE = 22000;
  var ORDER_EXPIRY_HOURS = 24;

  var PRODUCT_LIST = [
    {
      id: 'wmn-linen-blouse',
      name: 'Linen Collar Blouse',
      price: 289000,
      category: 'women',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1692242989852-5b72f7acb8a0?auto=format&fit=crop&w=900&q=80',
      description: 'Blouse linen ringan dengan potongan relaxed untuk office dan casual look.',
      sizes: ['S', 'M', 'L'],
      colors: ['Ivory', 'Mocca', 'Dusty Pink']
    },
    {
      id: 'wmn-knit-top',
      name: 'Essential Knit Top',
      price: 259000,
      category: 'women',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1601762267916-6668efcbc741?auto=format&fit=crop&w=900&q=80',
      description: 'Knit top basic premium dengan fitting clean untuk layering atau standalone.',
      sizes: ['S', 'M', 'L'],
      colors: ['Cream', 'Navy', 'Black']
    },
    {
      id: 'wmn-pleat-skirt',
      name: 'Pleated Midi Skirt',
      price: 319000,
      category: 'women',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1714207427861-9b411beca97e?auto=format&fit=crop&w=900&q=80',
      description: 'Rok midi bertekstur halus yang flowy dan tetap nyaman dipakai seharian.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Sand', 'Olive', 'Black']
    },
    {
      id: 'wmn-tailored-bra',
      name: 'Modern Cotton Sports',
      price: 349000,
      category: 'women',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=80',
      description: 'Outer simple untuk tampilan rapi namun tetap versatile.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Khaki', 'Navy', 'Charcoal']
    },
    {
      id: 'wmn-strappy-heels',
      name: 'Strappy Block Heels',
      price: 389000,
      category: 'women',
      type: 'shoes',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
      description: 'Heels dengan tali minimalis dan block heel yang stabil untuk tampilan elegan.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['Black', 'Nude', 'White']
    },
    {
      id: 'wmn-canvas-sneakers',
      name: 'Canvas Low Sneakers',
      price: 259000,
      category: 'women',
      type: 'shoes',
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
      description: 'Sneakers kanvas ringan untuk gaya kasual yang playful dan nyaman.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['White', 'Pastel Pink', 'Navy']
    },
    {
      id: 'wmn-leather-flats',
      name: 'Pointed Leather Flats',
      price: 329000,
      category: 'women',
      type: 'shoes',
      image: 'https://images.unsplash.com/photo-1554062614-6da4fa67725a?auto=format&fit=crop&w=900&q=80',
      description: 'Flat shoes kulit lembut dengan ujung lancip yang feminin dan versatile.',
      sizes: ['36', '37', '38', '39'],
      colors: ['Tan', 'Black', 'Cream']
    },
    {
      id: 'wmn-leather-tote',
      name: 'Structured Leather Tote',
      price: 459000,
      category: 'women',
      type: 'accessories',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      description: 'Tote bag kulit berstruktur untuk kebutuhan kerja dan weekend.',
      sizes: ['One Size'],
      colors: ['Camel', 'Black', 'Burgundy']
    },
    {
      id: 'wmn-silk-scarf',
      name: 'Printed Silk Scarf',
      price: 189000,
      category: 'women',
      type: 'accessories',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      description: 'Scarf sutra dengan motif eksklusif untuk aksen gaya sehari-hari.',
      sizes: ['One Size'],
      colors: ['Floral', 'Geometric', 'Classic']
    },
    {
      id: 'wmn-minimal-watch',
      name: 'Minimal Gold Watch',
      price: 529000,
      category: 'women',
      type: 'accessories',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
      description: 'Jam tangan minimalis dengan strap kulit dan aksen gold untuk tampilan refined.',
      sizes: ['One Size'],
      colors: ['Black Strap', 'Brown Strap', 'Cream Strap']
    },
    {
      id: 'men-oxford-shirt',
      name: 'Oxford Button Shirt',
      price: 329000,
      category: 'men',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
      description: 'Kemeja oxford breathable dengan detail minimalis untuk gaya smart casual.',
      sizes: ['M', 'L', 'XL'],
      colors: ['White', 'Sky Blue', 'Black']
    },
    {
      id: 'men-chino-slim',
      name: 'Slim Chino Pants',
      price: 339000,
      category: 'men',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
      description: 'Celana chino slim fit dengan stretch nyaman untuk aktivitas harian.',
      sizes: ['29', '30', '31', '32', '33'],
      colors: ['Beige', 'Navy', 'Stone']
    },
    {
      id: 'men-leather-jacket',
      name: 'Urban Leather Jacket',
      price: 469000,
      category: 'men',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1675877879221-871aa9f7c314?auto=format&fit=crop&w=900&q=80',
      description: 'Jaket kulit ringan dengan detail modern untuk sentuhan street style.',
      sizes: ['M', 'L', 'XL'],
      colors: ['Olive', 'Black', 'Stone Grey']
    },
    {
      id: 'men-basic-tee',
      name: 'Premium Basic Tee',
      price: 199000,
      category: 'men',
      type: 'clothing',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
      description: 'Kaos basic katun combed premium yang cocok untuk daily wear.',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Black', 'Moss Green']
    },
    {
      id: 'men-crew-neck',
      name: 'Cotton Crew Neck',
      price: 179000,
      category: 'men',
      type: 'basic',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
      description: 'Kaos crew neck katun premium dengan potongan reguler yang nyaman.',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['White', 'Grey', 'Navy']
    },
    {
      id: 'men-henley-tee',
      name: 'Henley Long Sleeve',
      price: 219000,
      category: 'men',
      type: 'basic',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
      description: 'Henley lengan panjang untuk layering atau standalone casual outfit.',
      sizes: ['M', 'L', 'XL'],
      colors: ['Charcoal', 'Olive', 'White']
    },
    {
      id: 'men-polo-classic',
      name: 'Classic Polo Shirt',
      price: 239000,
      category: 'men',
      type: 'basic',
      image: 'https://images.unsplash.com/photo-1625910513520-bed0389ce32f?auto=format&fit=crop&w=900&q=80',
      description: 'Polo shirt klasik dengan kerah rapi untuk smart casual everyday look.',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Navy', 'White', 'Forest Green']
    },
    {
      id: 'men-bomber-jacket',
      name: 'Nylon Bomber Jacket',
      price: 449000,
      category: 'men',
      type: 'outerwear',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      description: 'Bomber jacket nylon ringan dengan rib detail untuk street style look.',
      sizes: ['M', 'L', 'XL'],
      colors: ['Black', 'Olive', 'Navy']
    },
    {
      id: 'men-denim-jacket',
      name: 'Washed Denim Jacket',
      price: 419000,
      category: 'men',
      type: 'outerwear',
      image: 'https://images.unsplash.com/photo-1614711149940-b306aed8eca6?auto=format&fit=crop&w=900&q=80',
      description: 'Jaket denim washed dengan detail vintage untuk tampilan rugged casual.',
      sizes: ['M', 'L', 'XL'],
      colors: ['Light Blue', 'Dark Wash', 'Black']
    },
    {
      id: 'men-windbreaker',
      name: 'Lightweight Windbreaker',
      price: 379000,
      category: 'men',
      type: 'outerwear',
      image: 'https://images.unsplash.com/photo-1654949005305-879b4182aab8?auto=format&fit=crop&w=900&q=80',
      description: 'Windbreaker ringan dan water-resistant untuk aktivitas outdoor.',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Grey', 'Black', 'Teal']
    }
  ];

  var PRODUCT_MAP = PRODUCT_LIST.reduce(function (acc, item) {
    acc[item.id] = item;
    return acc;
  }, {});

  var BANK_ACCOUNTS = {
    BCA: { name: 'PT LE DIPS Fashion', number: '1234567890' },
    BRI: { name: 'PT LE DIPS Fashion', number: '987601234567' },
    MANDIRI: { name: 'PT LE DIPS Fashion', number: '1350011223344' }
  };

  var EWALLET_ACCOUNTS = {
    OVO: { holder: 'LE DIPS Official', number: '0812-3344-5566' },
    GOPAY: { holder: 'LE DIPS Official', number: '0812-8811-3344' },
    DANA: { holder: 'LE DIPS Official', number: '0813-5566-7788' }
  };

  var QR_PAYLOAD = '00020101021226670016COM.NOBUBANK.WWW0118936005030000087914021455140012345670315ID.CO.QRIS.WWW0215ID10232544778110303UKE5204581253033605405100005802ID5913LE DIPS STORE6010BANDUNG6105401236304A13F';

  function parseJSON(raw, fallback) {
    if (!raw) return fallback;
    try {
      return JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  }

  function getCart() {
    var cart = parseJSON(localStorage.getItem(STORAGE_KEYS.cart), []);
    if (!Array.isArray(cart)) return [];

    return cart.filter(function (item) {
      return item && typeof item.id === 'string' && Number(item.qty) > 0;
    }).map(function (item) {
      return {
        id: item.id,
        name: item.name,
        price: Number(item.price) || 0,
        image: item.image || '',
        size: item.size || '-',
        color: item.color || '-',
        qty: Math.max(1, Math.floor(Number(item.qty) || 1))
      };
    });
  }

  function setCart(cart) {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  }

  function getOrder() {
    return parseJSON(localStorage.getItem(STORAGE_KEYS.order), null);
  }

  function setOrder(order) {
    localStorage.setItem(STORAGE_KEYS.order, JSON.stringify(order));
  }

  function formatIDR(value) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(Number(value) || 0);
  }

  function totalCartQty(cart) {
    return cart.reduce(function (sum, item) {
      return sum + (Number(item.qty) || 0);
    }, 0);
  }

  function subtotalCart(cart) {
    return cart.reduce(function (sum, item) {
      return sum + ((Number(item.price) || 0) * (Number(item.qty) || 0));
    }, 0);
  }

  function updateCartBadges() {
    var badges = document.querySelectorAll('[data-cart-count]');
    var qty = totalCartQty(getCart());
    badges.forEach(function (badge) {
      badge.textContent = String(qty);
    });
  }

  function setYear() {
    var year = document.getElementById('fashion-year');
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function smoothScrollLinks() {
    var links = document.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        var href = link.getAttribute('href');
        if (!href || href === '#') return;

        var target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function productCardMarkup(product) {
    return [
      '<a class="fashion-product-card" href="fashion-details.html?id=' + encodeURIComponent(product.id) + '">',
      '  <div class="fashion-product-image-wrap">',
      '    <img src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" width="900" height="1125" loading="lazy">',
      '  </div>',
      '  <div class="fashion-product-meta">',
      '    <p>LE DIPS</p>',
      '    <h3>' + escapeHTML(product.name) + '</h3>',
      '    <p class="fashion-product-price">' + escapeHTML(formatIDR(product.price)) + '</p>',
      '  </div>',
      '</a>'
    ].join('');
  }

  function renderFilteredGrid(gridId, category, type) {
    var grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = PRODUCT_LIST
      .filter(function (product) {
        return product.category === category && product.type === type;
      })
      .map(productCardMarkup)
      .join('');
  }

  function renderShopProducts() {
    renderFilteredGrid('women-grid', 'women', 'clothing');
    renderFilteredGrid('men-grid', 'men', 'clothing');
  }

  function initShopTabs() {
    var tabContainers = document.querySelectorAll('.fashion-tabs[data-section]');

    tabContainers.forEach(function (container) {
      var section = container.getAttribute('data-section');
      var gridId = section + '-grid';

      container.addEventListener('click', function (event) {
        var button = event.target.closest('button[data-filter]');
        if (!button) return;

        var allButtons = container.querySelectorAll('button[data-filter]');
        allButtons.forEach(function (btn) {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-selected', 'false');
        });

        button.classList.add('is-active');
        button.setAttribute('aria-selected', 'true');

        var filterType = button.getAttribute('data-filter');
        renderFilteredGrid(gridId, section, filterType);
      });
    });
  }

  function getProductFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id');
    if (!productId) return null;
    return PRODUCT_MAP[productId] || null;
  }

  function addItemToCart(payload) {
    var cart = getCart();
    var current = cart.find(function (item) {
      return item.id === payload.id && item.size === payload.size && item.color === payload.color;
    });

    if (current) {
      current.qty += payload.qty;
    } else {
      cart.push(payload);
    }

    setCart(cart);
    updateCartBadges();
  }

  function initDetailPage() {
    var detailContainer = document.getElementById('fashion-detail-content');
    if (!detailContainer) return;

    var product = getProductFromQuery();

    if (!product) {
      var emptyTemplate = document.getElementById('fashion-detail-empty-template');
      if (emptyTemplate) {
        detailContainer.replaceWith(emptyTemplate.content.cloneNode(true));
      }
      return;
    }

    var template = document.getElementById('fashion-detail-template');
    if (!template) return;

    var fragment = template.content.cloneNode(true);
    var image = fragment.querySelector('#detail-image');
    var category = fragment.querySelector('#detail-category');
    var name = fragment.querySelector('#detail-name');
    var price = fragment.querySelector('#detail-price');
    var description = fragment.querySelector('#detail-description');
    var sizeSelect = fragment.querySelector('#detail-size');
    var colorSelect = fragment.querySelector('#detail-color');
    var qtyInput = fragment.querySelector('#detail-qty');
    var form = fragment.querySelector('#add-to-cart-form');
    var errorEl = fragment.querySelector('#detail-form-error');
    var toastEl = fragment.querySelector('#add-to-cart-toast');

    if (!image || !category || !name || !price || !description || !sizeSelect || !colorSelect || !qtyInput || !form || !errorEl || !toastEl) {
      return;
    }

    image.src = product.image;
    image.alt = product.name;
    category.textContent = product.category === 'women' ? 'Women Collection' : 'Men Collection';
    name.textContent = product.name;
    price.textContent = formatIDR(product.price);
    description.textContent = product.description;

    sizeSelect.innerHTML = product.sizes.map(function (size) {
      return '<option value="' + escapeHTML(size) + '">' + escapeHTML(size) + '</option>';
    }).join('');

    colorSelect.innerHTML = product.colors.map(function (color) {
      return '<option value="' + escapeHTML(color) + '">' + escapeHTML(color) + '</option>';
    }).join('');

    fragment.querySelectorAll('[data-qty-action]').forEach(function (button) {
      button.addEventListener('click', function () {
        var action = button.getAttribute('data-qty-action');
        var current = Math.max(1, Math.floor(Number(qtyInput.value) || 1));
        qtyInput.value = String(action === 'increase' ? current + 1 : Math.max(1, current - 1));
      });
    });

    qtyInput.addEventListener('change', function () {
      qtyInput.value = String(Math.max(1, Math.floor(Number(qtyInput.value) || 1)));
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      errorEl.textContent = '';

      var qty = Math.max(1, Math.floor(Number(qtyInput.value) || 1));
      var size = sizeSelect.value;
      var color = colorSelect.value;

      if (!size || !color || qty < 1) {
        errorEl.textContent = 'Mohon pilih ukuran, warna, dan jumlah yang valid.';
        return;
      }

      addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        color: color,
        qty: qty
      });

      toastEl.hidden = false;
    });

    detailContainer.innerHTML = '';
    detailContainer.appendChild(fragment);
  }

  function cartItemMarkup(item, index) {
    return [
      '<article class="cart-item" data-index="' + index + '">',
      '  <img class="cart-item-image" src="' + escapeHTML(item.image) + '" alt="' + escapeHTML(item.name) + '" width="200" height="260" loading="lazy">',
      '  <div class="cart-item-content">',
      '    <h2 class="cart-item-name">' + escapeHTML(item.name) + '</h2>',
      '    <p class="cart-item-variant">Ukuran: ' + escapeHTML(item.size) + ' | Warna: ' + escapeHTML(item.color) + '</p>',
      '    <p class="cart-item-price">Harga: ' + escapeHTML(formatIDR(item.price)) + '</p>',
      '    <div class="cart-item-actions">',
      '      <div class="qty-control" role="group" aria-label="Ubah jumlah item keranjang">',
      '        <button type="button" class="qty-btn" data-action="decrease">-</button>',
      '        <input type="number" min="1" value="' + item.qty + '" class="cart-item-qty" aria-label="Jumlah item">',
      '        <button type="button" class="qty-btn" data-action="increase">+</button>',
      '      </div>',
      '      <button type="button" class="text-btn" data-action="remove">Hapus</button>',
      '    </div>',
      '  </div>',
      '  <p class="cart-item-subtotal">' + escapeHTML(formatIDR(item.qty * item.price)) + '</p>',
      '</article>'
    ].join('');
  }

  function updateCartSummary(cart) {
    var subtotal = subtotalCart(cart);
    var shipping = cart.length ? CART_SHIPPING_ESTIMATE : 0;
    var service = cart.length ? SERVICE_FEE : 0;
    var total = subtotal + shipping + service;

    var subtotalEl = document.getElementById('cart-subtotal');
    var shippingEl = document.getElementById('cart-shipping');
    var serviceEl = document.getElementById('cart-service');
    var totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = formatIDR(subtotal);
    if (shippingEl) shippingEl.textContent = formatIDR(shipping);
    if (serviceEl) serviceEl.textContent = formatIDR(service);
    if (totalEl) totalEl.textContent = formatIDR(total);

    var checkoutBtn = document.getElementById('cart-checkout-btn');
    if (!checkoutBtn) return;

    if (cart.length) {
      checkoutBtn.classList.remove('is-disabled');
      checkoutBtn.removeAttribute('aria-disabled');
      checkoutBtn.setAttribute('href', 'fashion-checkout.html?from=cart');
    } else {
      checkoutBtn.classList.add('is-disabled');
      checkoutBtn.setAttribute('aria-disabled', 'true');
      checkoutBtn.setAttribute('href', '#');
    }
  }

  function initCartPage() {
    var cartContainer = document.getElementById('fashion-cart-items');
    if (!cartContainer) return;

    var emptyTemplate = document.getElementById('fashion-cart-empty-template');

    function render() {
      var cart = getCart();
      cartContainer.innerHTML = '';

      if (!cart.length) {
        if (emptyTemplate) {
          cartContainer.appendChild(emptyTemplate.content.cloneNode(true));
        }
        updateCartSummary(cart);
        return;
      }

      cartContainer.innerHTML = cart.map(cartItemMarkup).join('');
      updateCartSummary(cart);
    }

    function persistFromDOM() {
      var rows = cartContainer.querySelectorAll('.cart-item');
      var cart = getCart();

      rows.forEach(function (row) {
        var index = Number(row.getAttribute('data-index'));
        var qtyInput = row.querySelector('.cart-item-qty');
        if (!qtyInput || !cart[index]) return;

        cart[index].qty = Math.max(1, Math.floor(Number(qtyInput.value) || 1));
      });

      setCart(cart);
      updateCartBadges();
      render();
    }

    cartContainer.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof HTMLElement)) return;

      var action = target.getAttribute('data-action');
      if (!action) return;

      var row = target.closest('.cart-item');
      if (!row) return;

      var index = Number(row.getAttribute('data-index'));
      var cart = getCart();
      if (!cart[index]) return;

      if (action === 'remove') {
        cart.splice(index, 1);
      }

      if (action === 'increase') {
        cart[index].qty += 1;
      }

      if (action === 'decrease') {
        cart[index].qty = Math.max(1, cart[index].qty - 1);
      }

      setCart(cart);
      updateCartBadges();
      render();
    });

    cartContainer.addEventListener('change', function (event) {
      var target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.classList.contains('cart-item-qty')) return;
      persistFromDOM();
    });

    var checkoutButton = document.getElementById('cart-checkout-btn');
    if (checkoutButton) {
      checkoutButton.addEventListener('click', function (event) {
        if (checkoutButton.classList.contains('is-disabled')) {
          event.preventDefault();
        }
      });
    }

    render();
  }

  function pickChecked(name) {
    var input = document.querySelector('input[name="' + name + '"]:checked');
    if (!input) return null;
    return input;
  }

  function createOrderId() {
    var now = new Date();
    var datePart = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0')
    ].join('');
    var randomPart = String(Math.floor(Math.random() * 9000) + 1000);
    return 'FSH-' + datePart + '-' + randomPart;
  }

  function renderCheckoutItems(cart) {
    var container = document.getElementById('checkout-items');
    if (!container) return;

    container.innerHTML = cart.map(function (item) {
      return [
        '<article class="checkout-item">',
        '  <div>',
        '    <strong>' + escapeHTML(item.name) + '</strong>',
        '    <p>' + escapeHTML(item.size) + ' / ' + escapeHTML(item.color) + ' x' + item.qty + '</p>',
        '  </div>',
        '  <strong>' + escapeHTML(formatIDR(item.price * item.qty)) + '</strong>',
        '</article>'
      ].join('');
    }).join('');
  }

  function initCheckoutPage() {
    var layout = document.getElementById('fashion-checkout-page');
    var form = document.getElementById('fashion-checkout-form');
    var summaryPanel = document.getElementById('checkout-summary-panel');
    if (!layout || !form || !summaryPanel) return;

    var cart = getCart();
    if (!cart.length) {
      var emptyTemplate = document.getElementById('fashion-checkout-empty-template');
      if (emptyTemplate) {
        layout.innerHTML = '';
        layout.appendChild(emptyTemplate.content.cloneNode(true));
      }
      return;
    }

    renderCheckoutItems(cart);

    var shippingInputs = form.querySelectorAll('input[name="shipping"]');
    var paymentInputs = form.querySelectorAll('input[name="payment_method"]');
    var paymentPanels = form.querySelectorAll('[data-payment-panel]');
    var errorEl = document.getElementById('checkout-error');
    var uniqueCode = Math.floor(Math.random() * 900) + 100;

    function selectedShippingCost() {
      var checked = pickChecked('shipping');
      if (!checked) return 0;
      return Number(checked.getAttribute('data-cost')) || 0;
    }

    function selectedPaymentMethod() {
      var checked = pickChecked('payment_method');
      return checked ? checked.value : 'bank';
    }

    function updatePaymentPanels() {
      var method = selectedPaymentMethod();
      paymentPanels.forEach(function (panel) {
        var panelMethod = panel.getAttribute('data-payment-panel');
        var active = panelMethod === method;
        panel.hidden = !active;
      });
    }

    function updateCheckoutSummary() {
      var subtotal = subtotalCart(cart);
      var shipping = selectedShippingCost();
      var service = SERVICE_FEE;
      var total = subtotal + shipping + service + uniqueCode;

      var subtotalEl = document.getElementById('checkout-subtotal');
      var shippingEl = document.getElementById('checkout-shipping');
      var serviceEl = document.getElementById('checkout-service');
      var uniqueEl = document.getElementById('checkout-unique');
      var totalEl = document.getElementById('checkout-total');

      if (subtotalEl) subtotalEl.textContent = formatIDR(subtotal);
      if (shippingEl) shippingEl.textContent = formatIDR(shipping);
      if (serviceEl) serviceEl.textContent = formatIDR(service);
      if (uniqueEl) uniqueEl.textContent = formatIDR(uniqueCode);
      if (totalEl) totalEl.textContent = formatIDR(total);

      return {
        subtotal: subtotal,
        shipping: shipping,
        service: service,
        uniqueCode: uniqueCode,
        total: total
      };
    }

    shippingInputs.forEach(function (input) {
      input.addEventListener('change', updateCheckoutSummary);
    });

    paymentInputs.forEach(function (input) {
      input.addEventListener('change', updatePaymentPanels);
    });

    updatePaymentPanels();
    updateCheckoutSummary();

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (errorEl) errorEl.textContent = '';

      if (!form.checkValidity()) {
        form.reportValidity();
        if (errorEl) errorEl.textContent = 'Mohon lengkapi data penerima terlebih dahulu.';
        return;
      }

      var paymentMethod = selectedPaymentMethod();
      var bankInput = pickChecked('bank_code');
      var ewalletInput = pickChecked('ewallet_code');

      if (paymentMethod === 'bank' && !bankInput) {
        if (errorEl) errorEl.textContent = 'Silakan pilih bank tujuan.';
        return;
      }

      if (paymentMethod === 'ewallet' && !ewalletInput) {
        if (errorEl) errorEl.textContent = 'Silakan pilih e-wallet tujuan.';
        return;
      }

      var shippingInput = pickChecked('shipping');
      if (!shippingInput) {
        if (errorEl) errorEl.textContent = 'Silakan pilih metode pengiriman.';
        return;
      }

      var totals = updateCheckoutSummary();
      var createdAt = new Date();
      var expiresAt = new Date(createdAt.getTime() + ORDER_EXPIRY_HOURS * 60 * 60 * 1000);

      var formData = new FormData(form);
      var buyer = {
        name: String(formData.get('name') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        address: String(formData.get('address') || '').trim(),
        city: String(formData.get('city') || '').trim(),
        postalCode: String(formData.get('postalCode') || '').trim(),
        note: String(formData.get('note') || '').trim()
      };

      var payment = {
        selectedMethod: paymentMethod,
        bankCode: paymentMethod === 'bank' && bankInput ? bankInput.value : null,
        ewalletCode: paymentMethod === 'ewallet' && ewalletInput ? ewalletInput.value : null,
        qrPayload: paymentMethod === 'qris' ? QR_PAYLOAD : null
      };

      var order = {
        orderId: createOrderId(),
        createdAt: createdAt.toISOString(),
        expiresAt: expiresAt.toISOString(),
        buyer: buyer,
        items: cart,
        subtotal: totals.subtotal,
        shippingCost: totals.shipping,
        serviceFee: totals.service,
        uniqueCode: totals.uniqueCode,
        grandTotal: totals.total,
        shippingMethod: shippingInput.value,
        payment: payment
      };

      setOrder(order);
      setCart([]);
      updateCartBadges();
      window.location.href = 'fashion-success.html';
    });
  }

  function formatDateTimeID(isoDate) {
    var date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return '-';

    return new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'full',
      timeStyle: 'short'
    }).format(date);
  }

  function bindCopyButtons(scope) {
    var buttons = scope.querySelectorAll('[data-copy-text]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var text = button.getAttribute('data-copy-text') || '';
        if (!text) return;

        copyText(text).then(function (success) {
          if (!success) return;
          var original = button.textContent;
          button.textContent = 'Tersalin';
          setTimeout(function () {
            button.textContent = original;
          }, 1200);
        });
      });
    });
  }

  function copyText(text) {
    if (!text) return Promise.resolve(false);

    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text)
        .then(function () { return true; })
        .catch(function () { return false; });
    }

    try {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', 'readonly');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      var copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return Promise.resolve(Boolean(copied));
    } catch (error) {
      return Promise.resolve(false);
    }
  }

  function renderSuccessItems(order) {
    var container = document.getElementById('success-items-list');
    if (!container) return;

    container.innerHTML = order.items.map(function (item) {
      return [
        '<article class="success-item">',
        '  <div>',
        '    <strong>' + escapeHTML(item.name) + '</strong>',
        '    <p>' + escapeHTML(item.size) + ' / ' + escapeHTML(item.color) + ' x' + item.qty + '</p>',
        '  </div>',
        '  <strong>' + escapeHTML(formatIDR(item.price * item.qty)) + '</strong>',
        '</article>'
      ].join('');
    }).join('');
  }

  function renderPaymentInfo(order) {
    var paymentInfoBody = document.getElementById('payment-info-body');
    if (!paymentInfoBody) return;

    var payment = order.payment || {};
    var method = payment.selectedMethod;

    if (method === 'bank') {
      var bankCode = payment.bankCode || 'BCA';
      var bank = BANK_ACCOUNTS[bankCode] || BANK_ACCOUNTS.BCA;

      paymentInfoBody.innerHTML = [
        '<div class="payment-block">',
        '  <p class="payment-key">Transfer Bank ' + escapeHTML(bankCode) + '</p>',
        '  <p>No. Rekening: <strong>' + escapeHTML(bank.number) + '</strong></p>',
        '  <p>Atas Nama: <strong>' + escapeHTML(bank.name) + '</strong></p>',
        '  <p>Nominal Transfer: <strong>' + escapeHTML(formatIDR(order.grandTotal)) + '</strong></p>',
        '  <button type="button" class="text-btn" data-copy-text="' + escapeHTML(bank.number) + '">Salin No. Rekening</button>',
        '</div>'
      ].join('');
      bindCopyButtons(paymentInfoBody);
      return;
    }

    if (method === 'ewallet') {
      var walletCode = payment.ewalletCode || 'OVO';
      var wallet = EWALLET_ACCOUNTS[walletCode] || EWALLET_ACCOUNTS.OVO;

      paymentInfoBody.innerHTML = [
        '<div class="payment-block">',
        '  <p class="payment-key">Transfer via ' + escapeHTML(walletCode) + '</p>',
        '  <p>Akun Tujuan: <strong>' + escapeHTML(wallet.number) + '</strong></p>',
        '  <p>Penerima: <strong>' + escapeHTML(wallet.holder) + '</strong></p>',
        '  <p>Nominal Transfer: <strong>' + escapeHTML(formatIDR(order.grandTotal)) + '</strong></p>',
        '  <button type="button" class="text-btn" data-copy-text="' + escapeHTML(wallet.number) + '">Salin Nomor Tujuan</button>',
        '</div>'
      ].join('');
      bindCopyButtons(paymentInfoBody);
      return;
    }

    paymentInfoBody.innerHTML = [
      '<div class="payment-block">',
      '  <p class="payment-key">Pembayaran QRIS</p>',
      '  <p>Scan QRIS di bawah ini menggunakan aplikasi mobile banking atau e-wallet Anda.</p>',
      '  <div class="qr-placeholder">QRIS DEMO<br>Nominal: ' + escapeHTML(formatIDR(order.grandTotal)) + '</div>',
      '</div>'
    ].join('');
  }

  function initSuccessPage() {
    var layout = document.getElementById('fashion-success-page');
    var content = document.getElementById('success-content');
    if (!layout || !content) return;

    var order = getOrder();
    if (!order || !Array.isArray(order.items) || !order.items.length) {
      var emptyTemplate = document.getElementById('fashion-success-empty-template');
      if (emptyTemplate) {
        layout.innerHTML = '';
        layout.appendChild(emptyTemplate.content.cloneNode(true));
      }
      return;
    }

    var orderIdEl = document.getElementById('success-order-id');
    var deadlineEl = document.getElementById('success-deadline');
    var subtotalEl = document.getElementById('success-subtotal');
    var shippingEl = document.getElementById('success-shipping');
    var serviceEl = document.getElementById('success-service');
    var uniqueEl = document.getElementById('success-unique');
    var totalEl = document.getElementById('success-total');
    var copyOrderButton = document.getElementById('copy-order-id');
    var paidButton = document.getElementById('paid-confirm-btn');
    var statusEl = document.getElementById('payment-status');

    if (orderIdEl) orderIdEl.textContent = order.orderId || '-';
    if (deadlineEl) deadlineEl.textContent = formatDateTimeID(order.expiresAt);
    if (subtotalEl) subtotalEl.textContent = formatIDR(order.subtotal);
    if (shippingEl) shippingEl.textContent = formatIDR(order.shippingCost);
    if (serviceEl) serviceEl.textContent = formatIDR(order.serviceFee);
    if (uniqueEl) uniqueEl.textContent = formatIDR(order.uniqueCode || 0);
    if (totalEl) totalEl.textContent = formatIDR(order.grandTotal);

    renderSuccessItems(order);
    renderPaymentInfo(order);

    if (copyOrderButton) {
      copyOrderButton.setAttribute('data-copy-text', order.orderId || '');
      bindCopyButtons(content);
    }

    if (paidButton && statusEl) {
      paidButton.addEventListener('click', function () {
        statusEl.textContent = 'Status: Pesanan Anda sedang diproses. Terima kasih sudah berbelanja di LE DIPS';
        statusEl.classList.add('is-updated');
        paidButton.disabled = true;
        paidButton.classList.add('is-disabled');
        paidButton.textContent = 'Menunggu Verifikasi Seller';
      });
    }
  }

  function routeInit() {
    setYear();
    smoothScrollLinks();
    updateCartBadges();

    var page = document.body.getAttribute('data-page');
    if (page === 'shop') {
      renderShopProducts();
      initShopTabs();
      return;
    }

    if (page === 'details') {
      initDetailPage();
      return;
    }

    if (page === 'cart') {
      initCartPage();
      return;
    }

    if (page === 'checkout') {
      initCheckoutPage();
      return;
    }

    if (page === 'success') {
      initSuccessPage();
    }
  }

  routeInit();
})();
