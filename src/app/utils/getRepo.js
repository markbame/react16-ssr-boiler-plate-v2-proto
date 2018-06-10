export const getRepo = (props) => {
  if (__isBrowser__) {
    return window.__INITIAL_DATA__
    //delete window.__INITIAL_DATA__
  } else {
    return props.staticContext.data
  }
}
