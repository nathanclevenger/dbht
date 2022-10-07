export default {
  // fetch: req => new Response(JSON.stringify(req.cf.botManagement))
  fetch: (req, env) => env.DB.get(env.DB.idFromName(new URL(req.url).hostname)).fetch(req)
}

export class DB {
  constructor(state, env) {
    this.state = state
    this.env = env
  }
  async fetch(req) {
    return new Response(JSON.stringify({hello: 'world'}))
  }
}