import { IError } from './interfaces/interfaces';
import { CloseIcon } from './assets/CloseIcon';


function ErrorModal(props:IError):React.ReactElement {
    const { onChangeErr, onChangeActive, children } = props;


    function onSwitchModal() {
        onChangeActive();
        onChangeErr();
    }


    return (
        <div
            className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-end">
                <button onClick={onSwitchModal} className="rounded-full overflow-hidden hover:scale-110">
                    <CloseIcon/>
                </button>
            </div>
            {children}
            <button onClick={onSwitchModal} className="text-center hover:bg-slate-900 hover:text-white border-solid border-2
             border-white text-black bg-white rounded-md shadow-lg">
          Закрыть
            </button>
        </div>
    );
}

export default ErrorModal;
