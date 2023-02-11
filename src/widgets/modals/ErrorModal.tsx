

type PropsErrorModal = {
  onChangeActive:() => void,
  onChangeErr:() => void,
  children: React.ReactNode
}


function ErrorModal(props:PropsErrorModal):React.ReactElement {
    const { onChangeActive,onChangeErr,children } = props;

    return (
        <div
            className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-end">
                <button
                    onClick={() => {
                        onChangeActive();
                        onChangeErr();
                    }}
                    className="rounded-full overflow-hidden hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            {children}
            <button
                onClick={() => {
                    onChangeActive();
                    onChangeErr();
                }}
                className="text-center hover:scale-110 text-black bg-white rounded-md shadow-lg"
            >
          Закрыть
            </button>
        </div>
    );
}

export default ErrorModal;
