const config = {}

config.host = process.env.SERVER_HOST || "127.0.0.1";
config.port = process.env.SERVER_PORT || "5500";
config.route = process.env.NOTE_ROUTE || "notes";

export default config