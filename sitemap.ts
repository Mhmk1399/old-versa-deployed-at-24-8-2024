import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https:kakhversai.ir',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://kakhversai.ir/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://kakhversai.ir/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
     {
      url: 'https://kakhversai.ir/galery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
