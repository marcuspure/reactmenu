import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);
  const filterItems = (category) => {
    if(category ==='all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item)=> item.category=== category)
    setMenuItems(newItems)
  };
  return (
    <>
    <section className="menu section">
      <div className="title">
        <h2>menu</h2>
        <div className="underline"></div>
      </div>
    </section>
    <Categories categories={allCategories}filterItems={filterItems}/>
    <Menu items={menuItems} />
    </>
  )
}

export default App;
