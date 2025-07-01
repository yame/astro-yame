import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/posts/${post.id}`,
      pubDate: post.data.pubDate,
      description: post.data.description,
    })),
    customData: `<language>en-us</language>`,
  });
}
