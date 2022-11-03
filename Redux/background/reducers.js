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
          "https://i.pinimg.com/564x/dd/82/7b/dd827b14083c5208daac882175af4976.jpg",
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
          "https://i.pinimg.com/564x/4e/77/33/4e77338df7eb5695c9820f6e8ce93d42.jpg",
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
