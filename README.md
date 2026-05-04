# 🛍️ React Product Card Mini Project

## 📌 Overview

This is a simple React project that demonstrates how to:

* Pass data using **props**
* Work with **arrays of objects**
* Render dynamic UI using `map()`
* Create reusable components

The project displays a list of products with:

* Title
* Description
* Old Price (strikethrough)
* New Price (highlighted)

---

## 🚀 Features

* Component-based architecture
* Dynamic rendering using arrays
* Clean UI with reusable `Product` and `Price` components
* Inline styling and external CSS support

---

## 📂 Project Structure

```
src/
│
├── App.jsx        # Parent component (holds product data)
├── Product.jsx    # Displays product details
├── Price.jsx      # Displays pricing UI
├── Product.css    # Styling for Product component
└── App.css        # Global styles
```

---

## ⚙️ How It Works

### 1. Data in Parent (App.jsx)

All product data is stored in an array of objects:

```js
const products = [
  {
    title: "Keyboard",
    oldPrice: 100,
    newPrice: 80,
    desc1: "High-quality mechanical keyboard",
    desc2: "Durable and responsive keys"
  },
  ...
];
```

---

### 2. Passing Data via Props

Each product is passed to the `Product` component:

```jsx
{products.map((item, index) => (
  <Product key={index} data={item} />
))}
```

---

### 3. Product Component

Receives data and displays it:

```jsx
function Product({ data }) {
  return (
    <div className="product">
      <h4>{data.title}</h4>
      <p>{data.desc1}</p>
      <p>{data.desc2}</p>
      <Price oldPrice={data.oldPrice} newPrice={data.newPrice} />
    </div>
  );
}
```

---

### 4. Price Component

Handles styling for price display:

```jsx
export default function Price({ oldPrice, newPrice }) {
  return (
    <div>
      <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
      <span style={{ fontWeight: "bold" }}>{newPrice}</span>
    </div>
  );
}
```

---

## 💡 Key Concepts Learned

* Props (data passing)
* Component reusability
* Array rendering using `map()`
* Separation of concerns
* Basic styling in React

---

## 🧠 Best Practices

* Keep data in parent components
* Use props to pass data
* Avoid hardcoding inside components
* Use `key` in lists
* Keep components small and reusable

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173/
```

---

## 🔥 Future Improvements

* Add **Add to Cart button**
* Use **useState for dynamic updates**
* Add **filter/sort functionality**
* Connect with backend (Node.js + MongoDB)
* Improve UI with animations

---

## 📌 Conclusion

This project builds a strong foundation for React by focusing on core concepts like props and component structure. It can be extended into larger applications like an e-commerce or Airbnb-style platform.

---

✨ Happy Coding!
