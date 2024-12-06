class DetectionService{
  constructor({ pool }) {
    this.pool = pool;
  }
  async postDetection(email, displayName, image_url, confidence, disease, treatment_id, symptom, prevention, treatment){
    const query = `
          INSERT INTO detection (image_url, confidence, disease, treatment_id, email, displayName, symptom, prevention, treatment)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
      try {
        console.log(symptom, prevention, treatment)
        const [results] = await this.pool.query(query, [ image_url, confidence, disease, treatment_id, email, displayName, symptom, prevention, treatment]);
        // if (results.length === 0) {
        //   // Return an error object or throw an error to be handled by the caller
        //   throw new Error('Detection not found for ID: ' + treatment_id);
        // }
        return results;
      } catch (error) {
        // Handle or rethrow the error
        throw error;
      }
  }
  async getDetection(email, limit, offset){
    const query = `
        SELECT 
          *
        FROM detection
        WHERE email = ?
        LIMIT ? OFFSET ?
      `;
      try {
        const [results] = await this.pool.query(query, [email, limit, offset]);
        if (results.length === 0) {
          // Return an error object or throw an error to be handled by the caller
          throw new Error(`Treatment not found for ID: ${email}`);
        }
        return results;
      } catch (error) {
        // Handle or rethrow the error
        throw error;
      }
  }
  async deleteAllDetection(email){
    try {
      const query = `SELECT image_url FROM detection WHERE email = ?`
      const [historyRecords] = await this.pool.query(query, [email]);

      if (!historyRecords || historyRecords.length === 0) {
        throw new Error(`Treatment not found for ID: ${email}`)
      }
      const deletePromises = historyRecords.map(async (record) => {
        const imageUrl = record.image_url;
        console.log('Image URL:', imageUrl); 

        const filePath = imageUrl.replace(`https://storage.googleapis.com/${this.bucketName}/`, ``); 
        console.log('File Path:', filePath);

        const file = this.bucket.file(filePath);
        await file.delete();

        await this.pool.query('DELETE FROM detection WHERE image_url = ?', [imageUrl]);
      });

      await Promise.all(deletePromises);
    } catch (error) {
      // Handle or rethrow the error
      throw error;
    }
  }
}

export default DetectionService;