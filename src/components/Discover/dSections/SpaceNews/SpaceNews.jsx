import React, { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../../Reusables/Loading';
import PathLocation from '../../../Reusables/PathLocation';
import ArticleList from './ArticleList';

import './SpaceNews.style.css';

// SpaceFlightNewsAPI-articles url: https://api.spaceflightnewsapi.net/v3/articles

function SpaceNews() {

	const [isLoading, setIsLoading] = useState(true);
	const [articlesList, setArticlesList] = useState([]);

	// function to fetch response from api link
	const getNewsArticles = async () => {

		// using '_limit' to limit number of articles in each response - limit == 10
		var limitNumber = 10;
		try {
			const response = await fetch(
				`https://api.spaceflightnewsapi.net/v3/articles?_limit=${limitNumber}&_start=${articlesList.length}`
			);
			// api returns list(array) of disctionaries
			const NewsArticles = await response.json();

			// appending new data to previous data array
			setArticlesList((prev) => {
				return [...prev, ...NewsArticles]
			})
			setIsLoading(false);
		}
		catch (error) {
			console.log('❌❌❌', error);
		}
	};

	// useEffect function/hook to run at the initiation
	useEffect(() => {
		getNewsArticles();
	}, [])

	return (
		<div className='space-news-container'>
			<PathLocation />
			{isLoading ?
				<Loading waitFor={'Space News Articles'} />
				:
				<ArticleList articlesList={articlesList} />}
		</div>
	);
}

export default SpaceNews;