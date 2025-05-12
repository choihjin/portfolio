import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/posts";
import { metaData } from "./config";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  // 기본 URL들
  const routes = [
    '',
    '/about',
    '/projects',
  ].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // 블로그 포스트 URL들
  try {
    const posts = getAllPosts();
    const postRoutes = posts.map((post) => ({
      url: `${BaseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
    return [...routes, ...postRoutes];
  } catch (error) {
    // content 디렉토리가 없거나 오류가 발생하면 기본 URL만 반환
    return routes;
  }
}
