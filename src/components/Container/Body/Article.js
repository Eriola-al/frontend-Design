import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import styled from 'styled-components';

const Article = ({ article, small }) => {
    
    //passed props styled components 
    const Image = styled.img`
        width: ${props => props.width || '450px'};
        height: ${props => props.height || '250px'}
    `;

    return (
        <div className={`${small ? 'subArticle' : 'article'}`}>
            {!article.subImage ?
                (<Image src={article.image} />) :
                (<Image width={230} height={140} src={article.subImage} />)}
            <div className='image-info'>
                <p className="label">{article.labelTag}</p>
                {!article.subTitle ?
                    (<p className='titleLeft'>{article.title}</p>) : //to do with attaching aditional props
                    (<p className="titleRight">{article.subTitle}</p>)}
                <div className='subInfo'>
                    <img className='srcLogo' src={article.sourceLogo} />
                    <span className='srcName'>{article.sourceName}</span>
                    <BsCheckCircleFill size={10} />
                    <span className="timestamp">{article.timestamp}</span>
                </div>
                {article.seeMore ? (
                    <div className='more'>
                        <span className='seeMore'>{article.seeMore}</span>
                        <div className='buttonName'>{article.buttonName}</div>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}
export default Article;