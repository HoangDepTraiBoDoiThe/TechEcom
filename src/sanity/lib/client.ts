import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { SanityFetchProps } from "./type";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function sanityFetch(props: SanityFetchProps) {
  return await client.fetch(props.query, props.params, {
    next: {
      revalidate: 30,
      tags: props.tags,
    },
  });
}
