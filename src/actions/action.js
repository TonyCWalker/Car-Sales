export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newFeature => {
  return {
    type: ADD_FEATURE,
    payload: {
      id: newFeature.id,
      name: newFeature.name,
      price: newFeature.price
    }
  };
};

export const removeFeature = item => {
    return {
      type: REMOVE_FEATURE,
      payload: {
        id: item.id,
        name: item.name,
        price: item.price
      }
    };
  };