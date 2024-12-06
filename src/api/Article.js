import { Storage } from '@google-cloud/storage';
import path from 'path';

class Article {
  constructor(options) {
    this.pool = options.db.pool;
    this.addImageService = options.addImageService;
    this.getArticle = options.getArticle;
    this.postArticle = options.postArticle;
    this.putArticle = options.putArticle;
    this.deleteArticle = options.deleteArticle;

    this.getArticleHandler = this.getArticleHandler.bind(this);
    this.postArticleHandler = this.postArticleHandler.bind(this);
    this.updateArticleHandler = this.updateArticleHandler.bind(this);
    this.deleteArticleHandler = this.deleteArticleHandler.bind(this);

    const serviceAccount = './src/storageService.json'
    this.storage = new Storage({
      keyFilename: serviceAccount,
      projectId: 'chili-monitoring-2024'
    });
    this.bucket = this.storage.bucket('cimon-bucket');
    this.bucketName = "cimon-bucket"
  }

  async getArticleHandler(req, res) {
    try {
      const {email, displayName} = req.user
      const { page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;
      console.log(offset);
      console.log(limit);
      const results = await this.getArticle(limit, offset);
      console.log(results)
      res.status(200).json({
        status: 'success',
        message: 'Articles fetched successfully',
        data: { 
          results 
        },
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async postArticleHandler(req, res) {
    try {
        const { email, displayName } = req.user;
        const { title, description } = req.body;
        if (!req.file) {
          return res.status(400).json({
            status: 'error',
            message: 'No file uploaded.',
          });
        }
        const filePath = `detection/${Date.now()}${path.extname(req.file.originalname)}`;
        const file = this.bucket.file(filePath);
        await file.save(req.file.buffer, {
          contentType: req.file.mimetype,
          resumable: false,
        });
        const image_url = `https://storage.googleapis.com/${this.bucketName}/${filePath}`;

        const results = await this.postArticle(image_url, title, description, email, displayName);
        res.status(201).json({
            status: 'success',
            message: 'Article created successfully',
            data: { 
              email: email,
              displayName: displayName,
              title: title,
              description: description,
              image_url: image_url,
              timestamp: new Date()
             },
        });
    } catch (error) {
        console.error('Error posting article:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
}


  async updateArticleHandler(req, res) {
    try {
      const id = req.params.id;
      const { email } = req.user
      const { title, description } = req.body;
      if (!req.file) {
        return res.status(400).json({
          status: 'error',
          message: 'No file uploaded.',
        });
      }
      const filePath = `detection/${Date.now()}${path.extname(req.file.originalname)}`;
      const file = this.bucket.file(filePath);
      await file.save(req.file.buffer, {
        contentType: req.file.mimetype,
        resumable: false,
      });
      const image_url = `https://storage.googleapis.com/${this.bucketName}/${filePath}`;
      console.log(image_url);
      console.log(title);
      console.log(description);
      console.log(id);
      const results = await this.putArticle(email, image_url, title, description);
      res.status(200).json({
        status: 'success',
        message: 'Article updated successfully',
        data: { id, title, image_url, description },
      });
    } catch (error) {
      console.error('Error updating article:', error);
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async deleteArticleHandler(req, res) {
    
    try {
      const id = req.params.id;
      console.log(id);
        console.time('deleteArticle');
        const [result] = await this.deleteArticle(id);
        console.timeEnd('deleteArticle');

        console.log(result);

        // if (result.affectedRows > 0) {
        //     res.status(200).json({
        //         status: 'success',
        //         message: 'Article deleted successfully',
        //         data: { id },
        //     });
        // }
        return res.status(200).json({ 
          status: 'success',
          message: `History record and image deleted successfully for id: ${id}`
        });
    } catch (error) {
        console.error('Error deleting article:', error);
        res.status(500).json({ status: 'error', message: error.message });
    }
}
}

export default Article;