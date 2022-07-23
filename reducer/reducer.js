/* eslint-disable default-param-last */
import { palettesObj as palettes } from '../pageConfig.json';

const darkmodeOnState = {
  backgroundImagen: 'images/nightSky.jpg',
  projectsImagen: 'images/buildings.jpg',
  aboutImagen: 'images/nightSkyBlur.png',
};
const darkmodeOffState = {
  backgroundImagen: 'images/daySky.jpg',
  projectsImagen: 'images/buildings.jpg',
  aboutImagen: 'images/daySkyBlur.jpg',
};

const initialState = {
  height: 900,
  backgroundImagen: 'images/nightSky.jpg',
  projectsImagen: 'images/buildings.jpg',
  aboutImagen: 'images/nightSkyBlur.png',
  trans: ['scale-x-0', 'scale-x-0', 'scale-x-0', 'scale-x-0'],
  aboutHeigth: 478,
  darkmodeOn: true,
  colors: {},
};

export const setItem = (nameProp, item) => ({ type: 'ITEM', payload: { [nameProp]: item } });

export const toggleDarkmode = () => ({ type: 'TOGGLEDARKMODE' });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ITEM':
      return { ...state, ...payload };

    case 'TOGGLEDARKMODE':
      if (state.darkmodeOn) {
        return {
          ...state, ...darkmodeOffState, darkmodeOn: false, colors: palettes.nightSkyDark,
        };
      }
      return {
        ...state, ...darkmodeOnState, darkmodeOn: true, colors: palettes.original,
      };

    default:
      return state;
  }
};
