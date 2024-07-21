import React from "react";
import Card from "./Card";

const StatsContent = ({ stats }) => {
    return (
        <section className="stats">
        <ul className="stats__list">
            <li className="stats__item">HP: {stats.hp}</li>
            <li className="stats__item">Attack: {stats.attack}</li>
            <li className="stats__item">Defense: {stats.defense}</li>
            <li className="stats__item">Speed: {stats.speed}</li>
        </ul>
        </section>
    );
};

const StatsCard = () => {
    const stats = {
        hp: 100,
        attack: 100,
        defense: 100,
        speed: 100,
    };

    return (
        <Card
            frontImage="/images/pokemon_card_front.png"
            backImage="/images/pokemon_card_back.png"
            title="Charizard"
            content={<StatsContent stats={stats} />}
        />
    );
}


export default StatsCard;