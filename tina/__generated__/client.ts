import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5b3aa18c2f93c7d9ffa4b7f6ae5946d3b85b424c', queries });
export default client;
  