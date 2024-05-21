const port = process.env.PORT || 4000;
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: port,
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});

// env.int("PORT", 1337),
