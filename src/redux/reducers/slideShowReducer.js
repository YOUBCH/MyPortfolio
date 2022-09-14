import { SALVA_IMMAGINE } from "../constants/slideshowConstants";
import javaLogo from "../../images/322px-Java_Logo.png";

const slideShowImgState = {
    image: javaLogo
};

function slideShowReducer(state = slideShowImgState, action){
    switch (action.type) {
        case SALVA_IMMAGINE: {
            return {
                ...state,
                image: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default slideShowReducer;