# Minimal lazy loading example

This code shows hows lazy loading breaks when there is a deployment after the initial page load.

The `webpack-[:hash].js` manifest file is download on page load and contains all lazy loaded files. When there is a deployment this manifest becomes stale, and points to files that no longer exists.

I am just looking for some thoughts on best practices, it's not a NextJS specific thing, it's a universal problem with all tools I know of. If you lazy load code it will break when Vercel or Netlify or Firebase or whatever redeploys and removes stale files from cdn.


## Steps
1. Keep the front page open
2. Change lazyFunction.ts or LazyComponent.tsx to get a new hashed filename
3. Commit change and trigger Vercel redeploy
4. Wait for deployment to finish
5. Click on one of the examples


## Potential solutions

* The CDN could keep stale files cached for a while. They have unique filenames, so there isn't really a problem if an old file remains cached after it's deleted.

* The bundler could also handle this better and refetch a new manifest if there is a 404 when lazy loading
