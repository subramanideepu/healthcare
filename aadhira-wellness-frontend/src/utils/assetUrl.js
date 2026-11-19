/**
 * Asset URL helper to handle subpaths like GitHub Pages (/healthcare/)
 * and local development seamlessly.
 */
export function getAssetUrl(path) {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Check if we are running under GitHub Pages (/healthcare)
  const pathname = window.location.pathname;
  if (pathname.startsWith('/healthcare')) {
    return '/healthcare/' + cleanPath;
  }
  if (pathname.startsWith('/healthcare_demo_sites')) {
    return '/healthcare_demo_sites/' + cleanPath;
  }

  return '/' + cleanPath;
}
