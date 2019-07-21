import React from 'react';
import './App.css';
import Header from './Header'
import Post from './Post'
import Footer from './Footer'

function App() {
  return (
    <div className="App">

        <Header firstTitle="Blog" home="Home" post="Posts" about="About"/>
        <Post title="My First Post" description="Lorem ipsum dolor sit amet, vero philosophia ne per, cu soleat discere urbanitas vim, et ius aliquid vivendo eleifend. Eos te reque etiam, ne eam hinc accumsan, qui natum graecis aliquando et. Lorem facilisi volutpat id qui. Eos tempor voluptaria constituto ei. Velit suavitate liberavisse sed ei, modus mediocritatem ut vim. Sumo alia ius ne, eu suas commune posidonium pro, cu quem labitur instructior qui."/>
        <Post title="My Second Post" description="Lorem ipsum dolor sit amet, vero philosophia ne per, cu soleat discere urbanitas vim, et ius aliquid vivendo eleifend. Eos te reque etiam, ne eam hinc accumsan, qui natum graecis aliquando et. Lorem facilisi volutpat id qui. Eos tempor voluptaria constituto ei. Velit suavitate liberavisse sed ei, modus mediocritatem ut vim. Sumo alia ius ne, eu suas commune posidonium pro, cu quem labitur instructior qui."/>
        <Footer footer/>

    </div>
  );
}

export default App;
