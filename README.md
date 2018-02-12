# Shudder OMDb Ratings

This is a hack I put together very quickly. If you use this, I make no guarantees that it works.

It's a Chrome extension to help augment the shudder.com UI when browsing their video library. The extension will fetch and render movie ratings (IMDb, RT, and Metacritic) for the movie that you are currently looking at.

## Issues

There are some titles it will not work for. Hellraiser, for instance. This is because Shudder lists the date of the release of the original Hellraiser as 1986 when it is actually 1987. OMDb uses the release year to find the movie and since the release year is wrong it simply can't locate the movie.
