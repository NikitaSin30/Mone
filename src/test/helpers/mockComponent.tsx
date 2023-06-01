export const mockComponent = (pathToComponent:string,stringOutput : string) => {
    return jest.mock(pathToComponent, () => ({
        __esModule : true,
        default    : () => <div>{stringOutput}</div>,
    }));
};
