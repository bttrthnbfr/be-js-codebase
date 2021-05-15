import fs from 'fs';

export const localWriteStream = (filename) => fs.WriteStream(`${__dirname}/files/${filename}`);
export const localReadStream = (filename) => fs.ReadStream(`${__dirname}/files/${filename}`);
