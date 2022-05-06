export const config = {
    apiVersion: '2021-10-21',
    // Find these in your ./studio/sanity.json file
    dataset: 'content',
    projectId: '2boh2agb',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN ?? ``,
};
