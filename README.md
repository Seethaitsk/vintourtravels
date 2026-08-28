# Vintours & Travels

A modern, premium, and user-friendly single-page travel agency website built for **Vintours & Travels**.

## Overview

This project is a fully responsive landing page designed for a professional travel agency. It provides an intuitive user interface to explore destinations, view travel packages, read testimonials, and contact the agency to book a journey.

## Features

- **Modern & Premium UI:** Designed with a travel-inspired color palette (Deep navy, Sky blue, Warm orange), elegant typography (Outfit and Playfair Display), and clean layouts.
- **Responsive Design:** Optimized for all screen sizes from mobile to large desktops using Bootstrap 5 grid and utilities.
- **Sticky Navigation:** A smooth navigation bar that becomes sticky and changes appearance on scroll, highlighting the active section.
- **Scroll Animations:** Engaging entry animations when sections scroll into view.
- **Dynamic Counters:** Animated statistics showcasing the agency's success.
- **Image Gallery:** An attractive masonry-style image gallery with lightbox/modal support.
- **Form Validation:** Client-side JavaScript validation for the booking/contact form.
- **SEO Optimized:** Semantic HTML5 structure, appropriate meta tags, and accessibility features.

## Technologies Used

- **HTML5**
- **CSS3** (Custom properties, Flexbox, Animations)
- **JavaScript (Vanilla)**
- **Bootstrap 5.3** (CSS & JS via CDN)
- **Bootstrap Icons**
- **Google Fonts**

## File Structure

```
vintours-travels/
│
├── index.html        # Main HTML file (Single Page Application structure)
├── css/
│   └── style.css     # Custom stylesheets and UI components
├── js/
│   └── script.js     # JavaScript for scroll effects, animations, and validation
└── README.md         # Project documentation
```

*Note: Images used in this project are linked directly via Unsplash. In a production environment, you may want to download and place them in an `images/` directory.*

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser. No server or build process is required.

## Customization

- **Colors:** You can easily update the theme colors by changing the CSS variables in the `:root` pseudo-class in `css/style.css`.
- **Content:** All text and images are conveniently placed in `index.html`. Update the URLs and content blocks as needed to fit the actual business details.
- **Form Handling:** The contact form currently simulates a successful submission via JavaScript. You'll need to connect it to your backend API or an email service (like Formspree or EmailJS) for production use.
