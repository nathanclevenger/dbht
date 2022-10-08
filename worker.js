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

    // const response = await fetch(this.env.IMPORT_URL, {headers: {range: 'bytes=0-100000000'}})
    // const headers = Object.fromEntries(response.headers.entries())
    // console.log({headers})
    // // let { readable, writable } = new TransformStream()
    // // response.body.pipeTo(writable)

    // // return new Response(readable, response)

    // const reader = response.body.getReader()

    // let done = false
    // let queue = ''

    // while (!done) {
    //   const result = await reader.read()
    //   done = result.done
    //   queue = queue + new TextDecoder().decode(result.value) 
    //   const rows = queue.split('\n')
    //   queue = rows.pop()
    //   const rowCount = rows.length
    //   console.log({rowCount, done, queue})
    // }

    return new Response(JSON.stringify({hello: 'world'}))
  }
}