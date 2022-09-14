import { SALVA_IMMAGINE } from "../constants/slideshowConstants";

export const salvaImmagine = (img) => ({
    type: SALVA_IMMAGINE,
    payload: img
})