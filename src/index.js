export default {
  async fetch(request) {
    return new Response("lldckv", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Author": "lldckv",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
