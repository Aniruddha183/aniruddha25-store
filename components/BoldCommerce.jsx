import { useState, useEffect } from "react";

export default function BoldCommerce({ settings, products }) {
  const {
    logo,
    logoText,
    primaryColor,
    secondaryColor,
    accentColor,
    fontFamily,
    businessName,
    businessTagline,
    businessEmail,
    businessPhone,
    businessAddress,
  } = settings;

  return (
    <div className={`min-h-screen font-${fontFamily}`} style={{ backgroundColor: secondaryColor, color: primaryColor }}>
      <header className="border-b" style={{ borderColor: `${primaryColor}15` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {logo ? (
                <img src={logo} alt={businessName} className="h-10 w-10 object-contain" />
              ) : (
                <div className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold">{logoText.charAt(0)}</span>
                </div>
              )}
              <span className="text-xl font-bold" style={{ color: primaryColor }}>
                {logoText}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button className="text-sm font-medium" style={{ color: primaryColor }}>
                Shop
              </button>
              <button className="text-sm font-medium" style={{ color: primaryColor }}>
                Collections
              </button>
              <button className="text-sm font-medium" style={{ color: primaryColor }}>
                About
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" style={{ color: primaryColor }}>
            {businessName}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-70" style={{ color: primaryColor }}>
            {businessTagline}
          </p>
          <button 
            className="px-8 py-3 rounded-full font-semibold text-sm"
            style={{ backgroundColor: accentColor, color: secondaryColor }}
          >
            Shop Now
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: primaryColor }}>
            Featured Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products && products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  {product.images?.[0] && (
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  )}
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: primaryColor }}>
                  {product.name}
                </h3>
                <p className="text-sm font-medium" style={{ color: accentColor }}>
                  {"$" + (Number(product.price).toFixed(0))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t" style={{ borderColor: `${primaryColor}15` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-2" style={{ color: primaryColor }}>Contact</h4>
              <p className="text-sm mb-2 opacity-70" style={{ color: primaryColor }}>
                {businessEmail}
              </p>
              <p className="text-sm mb-2 opacity-70" style={{ color: primaryColor }}>
                {businessPhone}
              </p>
              <p className="text-sm opacity-70" style={{ color: primaryColor }}>
                {businessAddress}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: primaryColor }}>Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="opacity-70 hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>
                    All Products
                  </button>
                </li>
                <li>
                  <button className="opacity-70 hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>
                    New Arrivals
                  </button>
                </li>
                <li>
                  <button className="opacity-70 hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>
                    Sale
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: primaryColor }}>About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="opacity-70 hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>
                    Our Story
                  </button>
                </li>
                <li>
                  <button className="opacity-70 hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>
                    Shipping
                  </button>
                </li>
                <li>
                  <button className="opacity-70 hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>
                    Returns
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: `${primaryColor}15` }}>
            <p className="text-sm opacity-50" style={{ color: primaryColor }}>
              © 2025 {businessName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}