import React from 'react';
import { IContentItem } from './interfaces';


export const ContentItem:React.FC<IContentItem> = ({ action,sum,date,subTitle = null,chapter = null }) => {
    return (
        <>
            <span className='w-1/3'>{action}: {sum}</span>
            <span className='w-1/3'>{subTitle}: {chapter}</span>
            <time className='w-1/3'>Дата: {date}</time>
        </>
    );
};
