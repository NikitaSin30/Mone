
import { ISubtitleResponse } from './interfaces';


export const SubtitleResponse = ({ messageFromDB,isStatusResponse }:ISubtitleResponse) => {

    return (
        <>
            {isStatusResponse && <span className='text-red-600 '>{messageFromDB}</span>}
        </>
    );
};
