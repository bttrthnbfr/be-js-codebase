import mime from 'mime-types';

export const mimeLookup = (extention) => mime.lookup(extention);
