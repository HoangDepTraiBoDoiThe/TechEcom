import { QueryParams } from "sanity";

export interface SanityFetchProps {
  query: string;
  params?: QueryParams;
  tags?: string[];
}
