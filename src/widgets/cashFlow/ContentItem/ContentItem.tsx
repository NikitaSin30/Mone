import React from 'react';
import { IContentItem } from './interfaces';
import { DeleteIcon } from 'widgets/todo/assets/DeleteIcon';


export const ContentItem:React.FC<IContentItem> = ({ action,sum,date,subTitle = null,chapter = null }) => {
    return (
        <li className="flex-none h-100% flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg">
            <span className='w-1/3'>{action}: {sum}</span>
            <span className='w-1/3'>{subTitle}: {chapter}</span>
            <time className='w-1/3'>Дата: {date}</time>
              <div className="cursor-pointer hover:scale-110">
                {DeleteIcon}
            </div>
        </li>
    );
};
