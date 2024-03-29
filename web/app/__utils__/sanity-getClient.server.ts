// ./web/app/lib/sanity/getClient.js

import PicoSanity from 'picosanity';

import { config } from './sanity-config.server';

// Standard client for fetching data
export const sanityClient = new PicoSanity(config);

// Authenticated client for fetching draft documents
export const previewClient = new PicoSanity({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN ?? ``,
});

// Helper function to choose the correct client
export const getClient = (usePreview = false) => (usePreview ? previewClient : sanityClient);
