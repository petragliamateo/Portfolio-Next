/* eslint-disable default-param-last */
const initialState = {
  height: 900,
  backgroundImagen: 'images/nightSky.jpg',
  projectsImagen: 'images/buildings.jpg',
  aboutImagen: 'images/nightSkyBlur.png',
  trans: ['scale-x-0', 'scale-x-0', 'scale-x-0', 'scale-x-0'],
  aboutHeigth: 478,
};

export const setItem = (nameProp, item) => ({ type: 'ITEM', payload: { [nameProp]: item } });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ITEM':
      return { ...state, ...payload };

    default:
      return state;
  }
};
