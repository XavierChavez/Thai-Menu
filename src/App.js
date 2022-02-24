import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Navbar from './Navbar'
import Footer from './Footer';


const allCategories = ['all',...new Set(items.map((item)=> item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category ==='all'){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  };

  return (
    <main>
      <Navbar></Navbar>
      <section className='menu section'>
        <div className='title'>
          <img src="./images/lotus.png" alt="lotus blossom" height="100"/>
          <h2>our menu</h2>
          <div ></div>
        </div>
        <Categories categories= { categories } filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
