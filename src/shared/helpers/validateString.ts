

export const validateString = (dataFromInput: string) : string => {

    const modifytedToLower = dataFromInput.trim().toLowerCase();

    return modifytedToLower[0].toUpperCase() + modifytedToLower.slice(1);
};