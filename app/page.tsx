import React from "react";
import Image from "next/image";
import * as fs from "node:fs";
import styles from "./page.module.css";

const Home = () => {
	const dirs = fs.readdirSync("./public/cube/main");
	const length = dirs.length;
	const cardPack = 20;
	const getRandomIndex = (length) => Math.floor(Math.random() * length);

	let cards = [];
	let usedIndices = [];
	let randomIndex = undefined;

	for (let i = 0; i < cardPack; i++) {
		do {
			randomIndex = getRandomIndex(length);
		} while (usedIndices.includes(randomIndex));

		usedIndices.push(randomIndex);
		cards.push(dirs[randomIndex]);
	}

	return (
		<>
			{cards.map((card) => {
				return (
					<Image
						className={styles.card}
						src={`/cube/main/${card}`}
						alt={`${card}`}
						width={100}
						height={150}
					/>
				);
			})}
		</>
	);
};

export default Home;
