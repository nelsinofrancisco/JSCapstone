const getAllShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

const popularShows = async () => {
  const allShows = await getAllShows();
  const popularShows = await allShows.filter((show) => show.weight > 97);
  return popularShows;
};

export { popularShows as default };