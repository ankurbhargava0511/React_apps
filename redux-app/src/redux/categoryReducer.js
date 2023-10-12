export const CATEGORY_ACTION_TYPES = {
  SET_CATEGORY: "SET_CATEGORY",
};

const INITIAL_STATE = {
  allCategory: ["XYZ", "ABC"],
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY:
      return { ...state, allCategory: payload };
    default:
      return state;
  }
};

const createAction = (type, payload) => ({ type, payload });

export const setCategory = ( categoryToadd) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY, categoryToadd);

export const selectCategories = (state) => {
  console.log("category fired")
  return   state.categories.allCategory
};
