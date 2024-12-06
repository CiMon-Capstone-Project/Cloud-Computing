class ArticleService{
  constructor({ pool }) {
    this.pool = pool;
  }

  async getArticle(limit, offset) {
    const query = `
      SELECT 
        *
      FROM 
        articles
      ORDER BY 
        created_at DESC
      LIMIT ? OFFSET ?;
    `;
    try {
      const [results] = await this.pool.query(query, [limit, offset]);
      console.log(results);
      return results;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw new Error('Failed to fetch articles: ' + error.message);
    }
  }

  async postArticle(image_url, title, description, email, displayName) {
    const query = `
      INSERT INTO articles (image_url, title, description, email, displayName)
      VALUES (?, ?, ?, ?, ?);
    `;
    try {
      const [results] = await this.pool.query(query, [image_url, title, description, email, displayName]);
      return results;
    } catch (error) {
      console.error('Error posting article:', error);
      throw new Error('Failed to post article: ' + error.message);
    }
  }

  async putArticle(email, image_url, title, description) {
    try {
      const query = `
        UPDATE articles 
        SET 
          title = COALESCE(?, title),
          description = COALESCE(?, description), 
          image_url = COALESCE(?, image_url)
        WHERE 
          email = ?;
      `;
      const [results] = await this.pool.execute(query, [title, description, image_url, email]);
      if (results.affectedRows === 0) {
        throw new Error('Article not found or no changes made');
      }
      return results;
    } catch (error) {
      console.error('Error updating article:', error);
      throw new Error('Failed to update article: ' + error.message);
    }
  }

  async deleteArticle(id){
    try {
      const query = `DELETE FROM articles WHERE id = ?;`
      const result = await this.pool.query(query, [id]);
      
      return result
    } catch (error) {
      console.error('Error deleting article:', error);
      throw new Error('Failed to delete article: ' + error.message);
    }
  }
}

export default ArticleService;