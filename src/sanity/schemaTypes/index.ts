import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType';
import { fileType } from './fileType';
import { projectType } from './projectType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, fileType, projectType],
};
