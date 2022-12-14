import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "urpe9efv",
  dataset: "production",
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
