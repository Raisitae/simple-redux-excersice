const initialState = {
  background:
    "https://www.todofondos.net/wp-content/uploads/1511x854-Cat-Wallpaper-Tumblr-768x434.png",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "BLUE_BACKGROUND":
      return {
        ...state,
        background:
          "https://img.freepik.com/premium-vector/cute-pattern-with-cats-blue-checkered-background-vector-seamless-texture-kids-fabric-wrapping-paper-design_562639-607.jpg",
      };
    case "YELLOW_BACKGROUND":
      return {
        ...state,
        background: "https://data.whicdn.com/images/272112429/original.jpg",
      };
    case "GREEN_BACKGROUND":
      return {
        ...state,
        background:
          "https://img.freepik.com/premium-vector/seamless-pattern-with-cute-white-cat-face-with-ice-cream-cartoon-flat-design-green-background_40564-669.jpg",
      };
    case "PINK_BACKGROUND":
      return {
        ...state,
        background:
          "https://www.todofondos.net/wp-content/uploads/1511x854-Cat-Wallpaper-Tumblr-768x434.png",
      };

    default:
      return state;
  }
};
