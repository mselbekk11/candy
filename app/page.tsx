"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/main-photo.jpg", alt: "Candy - Professional Services" },
  { src: "/images/carousel-photo.jpg", alt: "Candy - Portfolio" },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [watchlisted, setWatchlisted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#191919]">
      {/* Top announcement bar */}
      <div className="bg-[#e7e7e7] text-xs py-1 px-4 flex justify-end gap-4">
        <span>Hi!</span>
        <span className="text-[#0654ba] cursor-pointer hover:underline">Sign in</span>
        <span>or</span>
        <span className="text-[#0654ba] cursor-pointer hover:underline">register</span>
        <span className="text-[#0654ba] cursor-pointer hover:underline">Daily Deals</span>
        <span className="text-[#0654ba] cursor-pointer hover:underline">Help & Contact</span>
      </div>

      {/* eBay Header */}
      <header className="border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-4">
          {/* eBay Logo */}
          <div className="flex-shrink-0">
            <span className="text-[28px] font-bold tracking-tight">
              <span className="text-[#e53238]">e</span>
              <span className="text-[#0064d2]">b</span>
              <span className="text-[#f5af02]">a</span>
              <span className="text-[#86b817]">y</span>
            </span>
          </div>

          {/* Shop by category */}
          <button className="text-sm text-[#555] hover:text-[#0654ba] flex items-center gap-1 flex-shrink-0">
            Shop by category
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Search bar */}
          <div className="flex-1 flex">
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 border border-r-0 border-[#191919] rounded-l-full py-2 px-4 text-sm outline-none focus:border-[#0654ba] focus:shadow-[0_0_0_1px_#0654ba]"
            />
            <select className="border border-r-0 border-[#191919] py-2 px-3 text-sm bg-white text-[#555] outline-none">
              <option>All Categories</option>
              <option>Services</option>
            </select>
            <button className="bg-[#0654ba] text-white px-6 rounded-r-full hover:bg-[#0041a0] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Advanced */}
          <span className="text-xs text-[#0654ba] cursor-pointer hover:underline flex-shrink-0">Advanced</span>

          {/* Cart */}
          <button className="relative flex-shrink-0">
            <svg className="w-6 h-6 text-[#767676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </button>
        </div>

        {/* Category nav */}
        <nav className="max-w-[1200px] mx-auto px-4 py-2 flex gap-6 text-sm text-[#555] overflow-x-auto">
          {["Home", "Saved", "Electronics", "Motors", "Fashion", "Collectibles & Art", "Sports", "Health & Beauty", "Industrial equipment", "Home & Garden", "Deals", "Sell"].map(
            (cat) => (
              <span key={cat} className="cursor-pointer hover:text-[#0654ba] whitespace-nowrap">
                {cat}
              </span>
            )
          )}
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 py-3">
        <div className="flex items-center gap-1 text-xs text-[#555]">
          <span className="text-[#0654ba] cursor-pointer hover:underline">Home</span>
          <span>&gt;</span>
          <span className="text-[#0654ba] cursor-pointer hover:underline">Services</span>
          <span>&gt;</span>
          <span className="text-[#0654ba] cursor-pointer hover:underline">Personal Services</span>
          <span>&gt;</span>
          <span className="text-[#0654ba] cursor-pointer hover:underline">Professional & Creative</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="lg:w-[55%]">
            {/* Main Image */}
            <div className="relative w-full aspect-square bg-[#f7f7f7] rounded-lg overflow-hidden border border-[#e5e5e5] mb-3">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              {/* Image zoom hint */}
              <div className="absolute bottom-3 right-3 bg-white/80 rounded-full p-2 shadow-sm">
                <svg className="w-5 h-5 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {/* Thumbnail carousel */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-16 h-16 rounded border-2 overflow-hidden flex-shrink-0 ${
                    selectedImage === i ? "border-[#0654ba]" : "border-[#e5e5e5] hover:border-[#999]"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>

            {/* Photo counter */}
            <p className="text-xs text-[#555] mt-2">
              Picture {selectedImage + 1} of {images.length}
            </p>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-[45%]">
            {/* Title */}
            <h1 className="text-[22px] font-normal leading-7 mb-2">
              Pregnant Russian girl that cant stop eating
            </h1>

            {/* Seller + Ratings row */}
            <div className="flex items-center gap-2 text-sm mb-3">
              <span className="text-[#0654ba] cursor-pointer hover:underline font-medium">candy_services_official</span>
              <span className="text-[#555]">(1,247)</span>
              <span className="text-[#86b817] font-medium">99.8% positive</span>
            </div>

            {/* Condition */}
            <div className="flex items-center gap-2 text-sm mb-4 border-b border-[#e5e5e5] pb-4">
              <span className="font-medium">Condition:</span>
              <span className="text-[#555]">Brand New</span>
              <span className="text-[#555]">|</span>
              <span className="text-[#555]">2,841 sold</span>
            </div>

            {/* Price section */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-[#555]">Price:</span>
                <span className="text-[24px] font-bold">US $149.99</span>
              </div>
              <div className="text-sm text-[#555]">
                Approximately AU $234.50
              </div>
              <div className="text-sm text-[#e53238] mt-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Almost gone</span>
                <span>- 3 left at this price</span>
              </div>
            </div>

            {/* Service Package */}
            <div className="mb-4 border border-[#e5e5e5] rounded-lg p-3">
              <p className="text-sm font-medium mb-2">Service Package</p>
              <div className="flex flex-wrap gap-2">
                {["Basic ($149.99)", "Premium ($249.99)", "VIP ($399.99)"].map((pkg, i) => (
                  <button
                    key={pkg}
                    className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                      i === 0
                        ? "border-[#0654ba] bg-[#f0f6ff] text-[#0654ba]"
                        : "border-[#e5e5e5] hover:border-[#999]"
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-[#e5e5e5] rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-lg hover:bg-[#f7f7f7] transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x border-[#e5e5e5] text-sm min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="px-3 py-1 text-lg hover:bg-[#f7f7f7] transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-[#555]">3 available / 2,841 sold</span>
            </div>

            {/* Buy It Now */}
            <button className="w-full bg-[#3665f3] text-white text-base font-medium py-3 rounded-full hover:bg-[#2a4ecf] transition-colors mb-3">
              Buy It Now
            </button>

            {/* Add to Cart */}
            <button className="w-full border border-[#3665f3] text-[#3665f3] text-base font-medium py-3 rounded-full hover:bg-[#f0f3ff] transition-colors mb-3">
              Add to cart
            </button>

            {/* Make Offer */}
            <button className="w-full border border-[#191919] text-[#191919] text-base font-medium py-3 rounded-full hover:bg-[#f7f7f7] transition-colors mb-3">
              Make Offer
            </button>

            {/* Watchlist */}
            <button
              onClick={() => setWatchlisted(!watchlisted)}
              className="w-full flex items-center justify-center gap-2 text-sm text-[#555] py-2 hover:text-[#0654ba] transition-colors mb-6"
            >
              <svg
                className={`w-5 h-5 ${watchlisted ? "text-[#e53238] fill-[#e53238]" : ""}`}
                fill={watchlisted ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {watchlisted ? "Watching" : "Add to Watchlist"}
            </button>

            {/* Shipping info */}
            <div className="border border-[#e5e5e5] rounded-lg p-4 mb-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-sm font-medium">Shipping:</p>
                  <p className="text-sm text-[#86b817] font-medium">FREE Standard Shipping</p>
                  <p className="text-xs text-[#555] mt-1">
                    Estimated delivery: Mar 5 - Mar 10
                  </p>
                </div>
                <span className="text-xs text-[#0654ba] cursor-pointer hover:underline">See details</span>
              </div>

              <div className="flex justify-between items-start mb-3 pt-3 border-t border-[#e5e5e5]">
                <div>
                  <p className="text-sm font-medium">Returns:</p>
                  <p className="text-sm text-[#555]">30 day returns. Buyer pays for return shipping.</p>
                </div>
              </div>

              <div className="flex justify-between items-start pt-3 border-t border-[#e5e5e5]">
                <div>
                  <p className="text-sm font-medium">Payments:</p>
                  <div className="flex gap-2 mt-1">
                    {["Visa", "MC", "Amex", "PayPal"].map((pay) => (
                      <span key={pay} className="text-[10px] border border-[#e5e5e5] rounded px-2 py-0.5 text-[#555]">
                        {pay}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* eBay Money Back Guarantee */}
            <div className="bg-[#f7f7f7] rounded-lg p-4 flex items-start gap-3">
              <svg className="w-8 h-8 text-[#0654ba] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-medium">eBay Money Back Guarantee</p>
                <p className="text-xs text-[#555]">Get the item you ordered or get your money back.</p>
                <span className="text-xs text-[#0654ba] cursor-pointer hover:underline">Learn more</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="mt-10 border-t border-[#e5e5e5] pt-8">
          <h2 className="text-lg font-medium mb-4">Seller information</h2>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#3665f3] flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
              C
            </div>
            <div>
              <p className="text-[#0654ba] font-medium cursor-pointer hover:underline">candy_services_official</p>
              <p className="text-sm text-[#555]">99.8% positive feedback | 1,247 ratings</p>
              <p className="text-sm text-[#555]">Member since: 2019 | Location: Australia</p>
              <div className="flex gap-3 mt-2">
                <span className="text-xs text-[#0654ba] cursor-pointer hover:underline">Contact seller</span>
                <span className="text-xs text-[#0654ba] cursor-pointer hover:underline">Visit store</span>
                <span className="text-xs text-[#0654ba] cursor-pointer hover:underline">See other items</span>
              </div>
            </div>
          </div>

          {/* Feedback ratings */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#f7f7f7] rounded-lg p-4">
            {[
              { label: "Communication", stars: 5 },
              { label: "Service as described", stars: 5 },
              { label: "Delivery time", stars: 5 },
              { label: "Value for money", stars: 4.9 },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-[#555] mb-1">{item.label}</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3.5 h-3.5 text-[#f5af02]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-medium">{item.stars}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Item Description */}
        <div className="mt-10 border-t border-[#e5e5e5] pt-8">
          <h2 className="text-lg font-medium mb-4">Item description from the seller</h2>
          <div className="bg-[#f7f7f7] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Candy&apos;s Premium Professional Services</h3>
            <p className="text-sm text-[#555] mb-4 leading-6">
              Welcome to Candy&apos;s Professional Services! With over 2,800 satisfied clients and a near-perfect feedback score,
              you&apos;re in the best hands. Candy brings creativity, dedication, and a personal touch to every project.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold mb-2">What&apos;s Included:</h4>
                <ul className="text-sm text-[#555] space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-[#86b817] mt-0.5">&#10003;</span>
                    Personalized consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#86b817] mt-0.5">&#10003;</span>
                    Premium quality delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#86b817] mt-0.5">&#10003;</span>
                    Unlimited revisions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#86b817] mt-0.5">&#10003;</span>
                    Fast turnaround time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#86b817] mt-0.5">&#10003;</span>
                    100% satisfaction guaranteed
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold mb-2">Service Packages:</h4>
                <div className="space-y-2">
                  <div className="bg-white rounded p-3 border border-[#e5e5e5]">
                    <p className="text-sm font-medium">Basic - $149.99</p>
                    <p className="text-xs text-[#555]">Standard service, 3-5 day delivery</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-[#0654ba]">
                    <p className="text-sm font-medium text-[#0654ba]">Premium - $249.99 (Most Popular)</p>
                    <p className="text-xs text-[#555]">Enhanced service, 1-3 day delivery, priority support</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-[#e5e5e5]">
                    <p className="text-sm font-medium">VIP - $399.99</p>
                    <p className="text-xs text-[#555]">Full white-glove service, same day delivery, 24/7 support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e5e5e5]">
              <h4 className="text-sm font-bold mb-2">Recent Reviews:</h4>
              <div className="space-y-3">
                {[
                  { user: "b***r", text: "Absolutely incredible! Candy went above and beyond. Will definitely use again!", date: "Feb 2026" },
                  { user: "m***k", text: "Best service I've ever purchased on eBay. The attention to detail is unmatched.", date: "Feb 2026" },
                  { user: "j***n", text: "5 stars isn't enough! Fast, professional, and the results speak for themselves.", date: "Jan 2026" },
                ].map((review, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded p-3 border border-[#e5e5e5]">
                    <div className="flex text-[#f5af02]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs text-[#555]">
                        <span className="font-medium text-[#191919]">{review.user}</span> - {review.date}
                      </p>
                      <p className="text-sm text-[#555] mt-0.5">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* People also viewed */}
        <div className="mt-10 border-t border-[#e5e5e5] pt-8">
          <h2 className="text-lg font-medium mb-4">People who viewed this item also viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { title: "Pro Creative Services Package", price: "$89.99", sold: "1,203 sold" },
              { title: "Personal Consultation 1hr", price: "$59.99", sold: "890 sold" },
              { title: "Premium Design Service", price: "$199.99", sold: "456 sold" },
              { title: "Full Day Service Package", price: "$299.99", sold: "334 sold" },
              { title: "Quick Task - Express", price: "$39.99", sold: "2,567 sold" },
              { title: "VIP Membership Monthly", price: "$79.99/mo", sold: "712 sold" },
            ].map((item, i) => (
              <div key={i} className="cursor-pointer group">
                <div className="aspect-square bg-[#f7f7f7] rounded-lg mb-2 border border-[#e5e5e5] group-hover:border-[#999] transition-colors flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs text-[#191919] group-hover:text-[#0654ba] line-clamp-2">{item.title}</p>
                <p className="text-sm font-bold mt-0.5">{item.price}</p>
                <p className="text-[10px] text-[#555]">{item.sold}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f7f7f7] border-t border-[#e5e5e5] mt-8">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Buy", links: ["Registration", "eBay Money Back Guarantee", "Bidding & buying help"] },
              { title: "Sell", links: ["Start selling", "How to sell", "Business sellers"] },
              { title: "Tools & apps", links: ["Developers", "Security center", "Site map"] },
              { title: "Stay connected", links: ["eBay's Blogs", "Facebook", "Twitter"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-sm font-medium mb-2">{col.title}</p>
                {col.links.map((link) => (
                  <p key={link} className="text-xs text-[#555] cursor-pointer hover:text-[#0654ba] mb-1">
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-[#e5e5e5] pt-4 text-xs text-[#555] text-center">
            <p>Copyright 1995-2026 eBay Inc. All Rights Reserved.</p>
            <p className="mt-1">
              This is a hypothetical page for entertainment purposes only. Not affiliated with eBay Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
