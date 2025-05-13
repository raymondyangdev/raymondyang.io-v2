import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType';
import { fileType } from './fileType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, fileType],
};
