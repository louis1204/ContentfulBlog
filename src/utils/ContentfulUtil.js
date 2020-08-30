import * as contentful from 'contentful'

class ContentfulUtil {
  static client = contentful.createClient({
    space: '<REPLACE WITH YOUR SPACE ID>',
    accessToken: '<REPLACE WITH YOUR ACCESS TOKEN>'
  })
  
  static fetchAllBlogPosts = () => ContentfulUtil.client.getEntries({
      content_type: 'blog',
      order: '-sys.createdAt'
    })

  static fetchPostByPathName = (pathName) => ContentfulUtil.client.getEntries({
      content_type: 'blog',
      'fields.path[in]': pathName
    })  
}
export default ContentfulUtil;