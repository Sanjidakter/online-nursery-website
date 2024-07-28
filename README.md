# Project Name

<div align="center">
  <h1>E-Nursery</h1>
</div>

---

## Live URL

Visit the live application at: https://online-nursery-website-2.vercel.app/

## Introduction

Here you can buy trees & plants for decorating you garden and home.

## Project Description

This project is an online nursery website designed to streamline the process of managing and purchasing plants and related products. The purpose of the project is to provide users with an intuitive interface for browsing a diverse range of products, managing their shopping cart, and completing purchases efficiently.

## Features

- Product and Category Management 🛠️
  Product List Table: Displays products in a table format, including columns for the image, title, price, category, and actions.
  Action Buttons:
  Update: Opens a form in a modal for modifying existing product details.
  Delete: Opens a confirmation modal, asking for confirmation before removing a product.
  Adding a Product:
  Button to create a new product.
  Form to add new products with fields for category, title, price, quantity, description, rating, and image (using ImgBB for image upload or direct link entry).
  Real-time Updates: All update, delete, and create actions reflect in real-time with optimistic UI updates.

- Product Browsing 🌿
  Filtering, Pagination, Sorting, and Searching:
  Advanced filtering options to narrow down product selection.
  Pagination for easy navigation across multiple pages of products.
  Sorting options to arrange products by relevance, price, name, etc.
  Robust searching capabilities to quickly find specific items.
  Product Details: Users can view detailed information about each product.

- Shopping Cart 🛒
  Add to Cart: Users can add products to their cart by clicking an "Add to Cart" button. Products out of stock cannot be added.
  Quantity Management:
  Duplicate products are not added; instead, the quantity of the existing product is increased.
  Users cannot add more products than the available quantity in stock.
  Proceed to Checkout: Users can proceed to the checkout page from the cart section.
  Checkout and Payment 💳
  Order Creation:
  Orders are created in the database with customer details, including name, phone number, address, and other required information collected from a form before proceeding to the payment page.
  If any selected product is out of stock, the order creation process will be prevented.
  Upon order creation, the system automatically decreases the quantity of each product in the order from available stock levels.

## Technology Stack

- **TypeScript**: Strongly typed JavaScript for robust code
- **Frontend**: React, Redux, Node.js

### Installation Steps

1. **Clone the repository**

2. **Install dependencies**

`````bash
  npm install -f

3. . **Run the application**

````bash
    npm run dev
`````
