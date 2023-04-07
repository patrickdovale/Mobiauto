export const maskifi = (value: string) => {
  return value.replace(/[\S\s](?=[\S\s]{4})/g, "*");
};

export const validateJSON = (value: any) => {
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
};

export const updateData = (currentObject: any, newDataObject: any) => {
  const updatedObject: any = {};
  for (const key in currentObject) {
    if (key in newDataObject) {
      updatedObject[key] = newDataObject[key];
    } else {
      updatedObject[key] = currentObject[key];
    }
  }
  return updatedObject;
};

export const checkIfTheFirstLetterIsUppercase = (value: string) => {
  if (!value || !/^[a-zA-Z]/.test(value)) {
    return false;
  }

  return value[0] === value[0].toUpperCase();
};
