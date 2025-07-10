import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query' });

  const results = [];
  const rapidApiKey = process.env.RAPIDAPI_KEY;
  const rapidApiHost = 'youtube-v31.p.rapidapi.com';

  // Get suggestions from YouTube autocomplete
  const suggestRes = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`);
  const suggestions = (await suggestRes.json())[1].slice(0, 5);

  for (const term of suggestions) {
    try {
      const ytRes = await fetch(`https://${rapidApiHost}/search?q=${encodeURIComponent(term)}&part=snippet&id&type=video&maxResults=1`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': rapidApiHost,
        },
      });

      const data = await ytRes.json();

      // Fake demand, real video count fallback
      const videoCount = data?.pageInfo?.totalResults || data?.items?.length || 0;
      const searchVolume = Math.floor(Math.random() * 50000) + 5000;
      const gapScore = Math.round((searchVolume / (videoCount + 1)) * 100);

      results.push({
        suggestion: term,
        searchVolume,
        videoCount,
        gapScore,
      });
    } catch (err) {
      console.error(`Error with term "${term}":`, err);
    }
  }

  res.status(200).json({ results });
}
