import { React } from 'react';

import Thumb_default from "../../../../assets/Images/Thumb_default.jpg";

import "./Article.style.css";

function Article(props) {

	return (
		<div className='article-container'>
			<img className="article-thumbnail-image"
				src={props.article.imageUrl === "" ? Thumb_default : props.article.imageUrl}
				alt="Thumbnail Image" />
			<div className="article-info-box">
				<div className="article-info">
					<h1 className='article-heading'>{props.article.title}</h1>
					<p className="article-time-site">News site: {props.article.newsSite}, Published at: {props.article.publishedAt}</p>
					<p className="article-summary">{props.article.summary}</p>
				</div>
				<button className="button-readmore"><a href={props.article.url} target={'_blank'}>Read more...↗</a></button>
			</div>
		</div>
	);
}

export default Article;