class Treatment {
  constructor(options) {
    this.pool = options.db.pool;
    this.treatmentService = options.treatmentService; // Menyuntikkan instance TreatmentService
    this.getTreatmentHandler = this.getTreatmentHandler.bind(this); // Bind this context
  }

  async getTreatmentHandler(req, res) {
    try {
      // Mengambil seluruh data treatment dari service
      const results = await this.treatmentService.getTreatment(); 

      return res.status(200).json({
        status: 'success',
        message: `All treatments successfully fetched`,
        data: { treatments: results },
      });
    } catch (error) {
      console.error('Error in getTreatmentHandler:', error.message);

      const statusCode = error.message.includes('not found') ? 404 : 500;

      return res.status(statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

export default Treatment;
