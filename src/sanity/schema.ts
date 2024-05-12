import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/Template/blockContent";
import category from "./schemaTypes/Template/category";
import post from "./schemaTypes/Template/post";
import author from "./schemaTypes/Template/author";
import user from "./schemaTypes/user";
import product from "./schemaTypes/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, product],
};
