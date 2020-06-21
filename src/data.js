import React from "react";
export const categoryList = [
  "All",
  "Action",
  "Adventure",
  "Casual",
  "Indie",
  "Multiplayer",
  "Racing",
  "RPG",
  "Simulation",
  "Sports",
  "Strategy",
];

export const gameData = [
  {
    id: 1,
    title: "Unforessen Incidents",
    teaser:
      "A classical style intereactive mystery set in a beautifully hand-painted world",
    description: `
    Unforessen incidents is a classical style interactive mystery set in a beautifully hand-painted world
  `,
    rating: 4.5,
    category: ["Action", "Indie"],
    age: "12+",
    cover: require("../assets/game1.jpg"),
    screenshots: [require("../assets/game1.jpg")],
    backgroundColor: "#824571",
  },
  {
    id: 2,
    title: "Ori and the will of the wisps",
    teaser: `Embark on a new journey in a vast, exotic world where you'll encounter towering enemies`,
    description: `
  Play the critically acclaimed master piece Embark on a new journey in a vast, exotic world where you'll encounter towering enemies
  `,
    rating: 3.5,
    category: ["Strategy", "Indie"],
    age: "16+",
    cover: require("../assets/game2.jpg"),
    screenshots: [require("../assets/game2.jpg")],
    backgroundColor: "#824571",
  },
  {
    id: 3,
    title: "The wally sea",
    teaser: `Embark on a new journey in a vast, exotic world where you'll encounter sea enemies`,
    description: `
  Play the critically acclaimed master piece Embark on a new journey in a vast, exotic world where you'll encounter towering enemies
  `,
    rating: 5,
    category: ["Action", "Indie"],
    age: "13+",
    cover: require("../assets/game3.jpg"),
    screenshots: [require("../assets/game3.jpg")],
    backgroundColor: "#824571",
  },
];
