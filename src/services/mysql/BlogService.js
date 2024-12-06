class BlogService {
  constructor({ pool }) {
    this.pool = pool;
  }

  async getBlog(limit = 10, offset = 0) {
    const query = `
      SELECT
        *
      FROM 
        blog
      ORDER BY 
        created_at DESC
      LIMIT ? OFFSET ?;
    `;

    try {
      const [results] = await this.pool.query(query, [limit, offset]);
      if (results.length === 0) {
        // Return an error object or throw an error to be handled by the caller
        throw new Error('No blogs found.');
      }
      return results;
    } catch (error) {
      // Handle or rethrow the error
      throw error;
    }
  }
}

export default BlogService;
