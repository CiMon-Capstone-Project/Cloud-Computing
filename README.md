# Cloud Computing Documentation
![alt text](https://github.com/CiMon-Capstone-Project/Cloud-Computing_V2/blob/main/images/CiMon.jpg?raw=true)
=======
**CiMon (Chili Monitoring)** is a cloud-based application designed to detect diseases in chili plants by analyzing leaf images. Utilizing Machine Learning technology, this application delivers fast and accurate detection results, assisting farmers in identifying and addressing plant diseases early to enhance crop productivity.

# Backend Features Documentation
## Diseases Detection API 🔍
**Description** : Provides an API endpoint for analyzing images of diseased chili plant leaves. Utilizes machine learning models to predict potential diseases based on the uploaded image.
## POST /detection
Upload images of chili leaves that are indicated by disease to get detection results.
### `Response`
```json
{
    "status": "success",
    "message": "Detection uploaded successfully.",
    "data": {
        "email": "mamik2@gmail.com",
        "displayName": "mamik2",
        "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733895729147.jpg",
        "confidence": "0.98",
        "treatment_id": "0",
        "symptom": "Gejala serangan penyakit ini mulai terlihat dari munculnya bercak bulat berwarna coklat pada daun dan kering, ukuran bercak bisa mencapai sekitar 1 inci. Pusat bercak berwarna pucat sampai putih dengan warna tepi lebih tua. Bercak yang tua dapat menyebabkan lubang-lubang.",
        "prevention": "Perlakuan benih sebelum tanam, Perbaikan drainase, Menanam bibit yang bebas patogen pada lahan yang tidak terkontaminasi oleh patogen, baik di persemaian maupun di lapangan, Sanitasi dengan cara memusnahkan dan atau sisa-sisa tanaman yang terinfeksi/terserang",
        "treatment": "Pengendalian kimia dapat dilakukan dengan fungisida secara bijaksana, efektif, terdaftar dan diizinkan oleh Menteri Pertanian, berpedoman pada peramalan cuaca dan populasi spora di lapangan."
    }
}
```
## GET /detection
Upload images of chili leaves that are indicated by disease to get detection results.
### `Response`
```json
{
    "status": "success",
    "message": "History fetched successfully",
    "data": {
        "results": [
            {
                "id": 31,
                "image_url": "https://storage.googleapis.com/undefined/detection/1733504540228.jpg",
                "confidence": 0.98,
                "disease": "Healthy",
                "treatment_id": 0,
                "created_at": "2024-12-06T17:02:20.000Z",
                "email": "mamik2@gmail.com",
                "displayName": "mamik2",
                "symptom": "Gejala serangan penyakit ini mulai terlihat dari munculnya bercak bulat berwarna coklat pada daun dan kering, ukuran bercak bisa mencapai sekitar 1 inci. Pusat bercak berwarna pucat sampai putih dengan warna tepi lebih tua. Bercak yang tua dapat menyebabkan lubang-lubang.",
                "prevention": "Perlakuan benih sebelum tanam, Perbaikan drainase, Menanam bibit yang bebas patogen pada lahan yang tidak terkontaminasi oleh patogen, baik di persemaian maupun di lapangan, Sanitasi dengan cara memusnahkan dan atau sisa-sisa tanaman yang terinfeksi/terserang",
                "treatment": "Pengendalian kimia dapat dilakukan dengan fungisida secara bijaksana, efektif, terdaftar dan diizinkan oleh Menteri Pertanian, berpedoman pada peramalan cuaca dan populasi spora di lapangan."
            },
            {
                "id": 38,
                "image_url": "https://storage.googleapis.com/undefined/detection/1733573347690.jpg",
                "confidence": 0.98,
                "disease": "Healthy",
                "treatment_id": 0,
                "created_at": "2024-12-07T12:09:07.000Z",
                "email": "mamik2@gmail.com",
                "displayName": "mamik2",
                "symptom": "Gejala serangan penyakit ini mulai terlihat dari munculnya bercak bulat berwarna coklat pada daun dan kering, ukuran bercak bisa mencapai sekitar 1 inci. Pusat bercak berwarna pucat sampai putih dengan warna tepi lebih tua. Bercak yang tua dapat menyebabkan lubang-lubang.",
                "prevention": "Perlakuan benih sebelum tanam, Perbaikan drainase, Menanam bibit yang bebas patogen pada lahan yang tidak terkontaminasi oleh patogen, baik di persemaian maupun di lapangan, Sanitasi dengan cara memusnahkan dan atau sisa-sisa tanaman yang terinfeksi/terserang",
                "treatment": "Pengendalian kimia dapat dilakukan dengan fungisida secara bijaksana, efektif, terdaftar dan diizinkan oleh Menteri Pertanian, berpedoman pada peramalan cuaca dan populasi spora di lapangan."
            }
        ]
    }
}
```
## DELETE /detection
Upload images of chili leaves that are indicated by disease to get detection results.
### `Response`
```json
{ 
        status: 'success',
        message: History record and image deleted successfully for user: mamik2@gmail.com
}
```
  

## Contact 
If you have any questions, suggestions, or feedback, please feel free to reach out to us:
* **Azhar** Ilyas Hanifa [Linkedin](https://www.linkedin.com/in/azharilyas/)
* **Candika** Dwi Handaru [Linkedin](https://www.linkedin.com/in/candika-dwi-handaru/)
