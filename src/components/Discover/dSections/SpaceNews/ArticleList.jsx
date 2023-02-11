import React from 'react';

import Article from './Article';

import './Article.style.css';

function ArticleList(props) {

    return (
        <div className='article-list'>
            {
                props.articlesList.map((article, index) => (
                    <Article key={index + 1}
                        article={article} />
                ))
            }
        </div>
    );
}

export default ArticleList;