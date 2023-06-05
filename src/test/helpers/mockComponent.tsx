export const mockComponent = (pathToComponent:string,stringOutput : string) => {
    jest.mock('widgets/accountingСards/CardItem/CardItem',() =>({
        CardItem : () => <div>43</div>,
    }));

};
