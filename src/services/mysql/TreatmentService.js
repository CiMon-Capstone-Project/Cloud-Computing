class TreatmentService {
  constructor({ pool }) {
    this.pool = pool;
  }

  // Fungsi untuk mengambil seluruh data treatment
  async getTreatment() {
    const query = `SELECT * FROM treatments`;

    try {
      console.log('Executing Query:', query);

      // Menjalankan query dan mengambil hasil
      const [results] = await this.pool.query(query);

      return results; // Mengembalikan hasil dari query
    } catch (error) {
      console.error('Error in TreatmentService:', error.message);
      throw error; // Lempar ulang error jika terjadi kesalahan
    }
  }
}

export default TreatmentService;
