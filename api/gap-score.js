export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) return res.status(400).json({ error: 'Missing query' });

  const results = [];
  const rapidApiKey = process.env.RAPIDAPI_KEY;
  const rapidApiHost = 'youtube-v31.p.rapidapi.com';

  console.log('🔍 Searching suggestions for:', q);

  try {
    const suggestRes = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(q)}`
    );
    const suggestJson = await suggestRes.json();

    console.log('🧪 Suggest API response:', suggestJson);
    const suggestions = suggestJson[1]?.slice(0, 5) || [];

    for (const term of suggestions) {
      try {
        const ytRes = await fetch(
          `https://${rapidApiHost}/search?q=${encodeURIComponent(term)}&part=snippet&type=video&maxResults=5`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': rapidApiKey,
              'X-RapidAPI-Host': rapidApiHost,
            },
          }
        );

        const data = await ytRes.json();
        const videoCount = data?.items?.length || 0;
        const fakeSearchVolume = Math.floor(Math.random() * 50000) + 10000;
        const gapScore = Math.round((fakeSearchVolume / (videoCount + 1)) * 100);

        results.push({
          suggestion: term,
          searchVolume: fakeSearchVolume,
          videoCount,
          gapScore,
        });

        console.log(`✅ Term: "${term}" | Videos: ${videoCount} | Gap Score: ${gapScore}`);
      } catch (err) {
        console.error(`🚨 Error fetching YouTube data for "${term}":`, err.message);
      }
    }

    return res.status(200).json({ results });
  } catch (outerError) {
    console.error('❌ Gap Finder API Failed:', outerError.message);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
}
