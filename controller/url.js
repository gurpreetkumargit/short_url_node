const URL = require("../model/url");
const shortid = require("shortid");

const generateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json("Url is required");
  const shortedId = shortid(8);
  URL.create({
    shortId: shortedId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.status(201).json(shortedId);
};

const getShortedId = async (req, res) => {
  const id = req.params.shortId;
  const result = await URL.findOneAndUpdate(
    { shortId: id },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now().toString(),
          ipAddress: req.ip,
        },
      },
    }
  );

  res.redirect(result.redirectUrl);
};

const getAnalytics = async (req, res) => {
  const id = req.params.shortId;
  const result = await URL.findOne({ shortId: id });

  res.status(200).json({
    totalVisits: result.visitHistory.length,
    history: result.visitHistory,
  });
};
module.exports = { generateNewShortUrl, getShortedId, getAnalytics };
