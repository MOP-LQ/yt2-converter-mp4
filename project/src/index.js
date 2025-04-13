export default {
  async fetch(request, env, ctx) {
    // 基本的静态文件服务逻辑
    try {
      // 尝试从资源中获取请求的文件
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // 如果资源获取失败，返回默认的 index.html
      let path = new URL(request.url).pathname;
      if (path === '/' || !path) {
        try {
          const indexResponse = await fetch(new URL('/index.html', request.url));
          return new Response(await indexResponse.text(), {
            headers: { 'Content-Type': 'text/html' }
          });
        } catch (e) {
          return new Response('Not Found', { status: 404 });
        }
      }
      return new Response('Not Found', { status: 404 });
    }
  }
};
