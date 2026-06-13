export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,OPTIONS,DELETE",
      "Access-Control-Allow-Headers": "*"
    };
 
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
 
    return new Response("lldckv", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Author": "lldckv",
        ...corsHeaders
      }
    });
  }
};
