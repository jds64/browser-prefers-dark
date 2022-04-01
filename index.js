/// @ts-check

export default function prefersDark() {
  if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // prefers dark
    return true;
  } else if (!window) {
    // no window object
    throw new Error("No window object found! Are you running this script in a browser context?")
    return null;
  } else if (window && !window.matchMedia) {
    // window.matchMedia not supported.
    throw new Error("This environment doesn't support 'window.matchMedia', please upgrade your browser to use the latest features.")
    return null;
  }

  // prefers light or no preference
  return false;
}