import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import { FlippableCardsList } from "./components/CardsList";

import './App.css';


const cardsData = [
  {
    frontImage: "/images/marty_mcfly.webp",
    backImage: "/images/pokemon_card_back.png",
    title: "Naive",
    content: "Its so curious about the world. Like, you know, when you're a kid, although you're not a kid anymore. Like Marty McFly, you know. Don't you?",
  },
  {
    frontImage: "/images/spike_spiegel.webp",
    backImage: "/images/pokemon_card_back.png",
    title: "Seriously",
    content: "Loves cosmic jazz. Does that make him a serious person? Seriosly, he's like a space cowboy...he just loves to put on the space suit and shoot things done.",
  },
  // {
  //   frontImage: "/images/front-image3.jpg",
  //   backImage: "/images/back-image3.jpg",
  //   title: "Card 3 Title",
  //   content: "This is the content for card 3.",
  // },
  // Add more card objects as needed
];


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
      </Routes>
      <div className="app">
        <Header />
        <main>
          <FlippableCardsList cardsData={cardsData} />
        </main>
      </div>
    </Router>
  )
}

export default App;