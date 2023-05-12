
import { ISubtitleResponse } from './interfaces';


export const SubtitleResponse = ({ messageFromDB,isErrorVisible }:ISubtitleResponse) => {

    return (
        <>
            {isErrorVisible && <span className='text-red-600 '>{messageFromDB}</span>}
        </>
    );
};
