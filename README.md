# Cloud Computing Documentation
![alt text](https://github.com/CiMon-Capstone-Project/Cloud-Computing_V2/blob/main/images/CiMon.jpg?raw=true)
=======
**CiMon (Chili Monitoring)** is a cloud-based application designed to detect diseases in chili plants by analyzing leaf images. Utilizing Machine Learning technology, this application delivers fast and accurate detection results, assisting farmers in identifying and addressing plant diseases early to enhance crop productivity.

# Backend Features Documentation
## Diseases Detection API 🔍
**Description** : Provides an API endpoint for analyzing images of diseased chili plant leaves. Utilizes machine learning models to predict potential diseases based on the uploaded image.
#### `POST /detection`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
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
#### `GET /detection`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
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
#### `DELETE /detection`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
```json
{ 
        "status": "success",
        "message": "History record and image deleted successfully for user: mamik2@gmail.com"
}
```
## Blog API 🔍
**Description** : Provides an API endpoint for analyzing images of diseased chili plant leaves. Utilizes machine learning models to predict potential diseases based on the uploaded image.
#### `GET /blog`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
```json
{
    "status": "success",
    "message": "Blog fetched successfully",
    "data": {
        "results": [
            {
                "id": 2,
                "image_url": "https://storage.googleapis.com/cimon-bucket/blog/cabe%202.jpg",
                "title": "Pengertian, Bagian, dan Jenis Cabai",
                "description": "Tanaman cabai termasuk dalam suku terung-terungan dan berbentuk perdu, serta tergolong tanaman semusim. Tanaman ini dapat tumbuh baik di berbagai jenis tanah, seperti tanah berpasir, tanah liat, atau tanah liat berpasir, dan lebih menyukai pupuk kandang atau kompos sebagai bahan organik. Cabai juga membutuhkan sinar matahari yang cukup, tidak hanya untuk fotosintesis, tetapi juga untuk membantu mengurangi hama yang dapat merusak tanaman. Tanaman cabai mengandung berbagai zat gizi penting, seperti kalori, protein, lemak, kalsium, fosfor, zat besi, serta vitamin A, B, dan C.\n\nBagian tubuh tanaman cabai terdiri dari batang, daun, dan buah. Batang cabai berdiri tegak dengan tinggi sekitar 50-90 cm, sering diberi ajir untuk menyanggah batang yang berat akibat buah yang banyak. Daunnya berbentuk lonjong dengan ujung meruncing, memiliki panjang sekitar 4-10 cm dan lebar 1,5-10 cm. Sementara itu, buah cabai umumnya memanjang antara 1-10 cm, dengan warna hijau saat muda dan berubah menjadi merah atau merah kecoklatan saat matang, serta rasanya yang pedas.\n\nDi pasaran, terdapat berbagai jenis cabai yang umum ditemui, seperti cabai merah besar dan cabai rawit. Cabai merah besar memiliki bentuk yang lebih besar dan rasa yang cenderung kurang pedas serta sedikit manis. Warnanya berubah dari hijau menjadi coklat dan akhirnya merah tua saat matang. Sebaliknya, cabai rawit lebih kecil tetapi lebih pedas, dengan buah yang berwarna hijau saat muda dan merah tua saat matang. Cabai rawit juga dikenal memiliki kadar minyak atsiri yang tinggi dan rasa yang sangat pedas.",
                "source": "https://www.kompas.com/skola/read/2023/04/27/220000869/cabai--pengertian-bagian-bagian-dan-jenisnya",
                "created_at": "2024-12-04T03:51:54.000Z"
            },
            {
                "id": 1,
                "image_url": "https://storage.googleapis.com/cimon-bucket/blog/cabe%201.jpg",
                "title": "Tanaman Cabai dan Manfaatnya",
                "description": "Cabai, anggota genus Capsicum, adalah buah yang dapat dimanfaatkan sebagai sayuran atau bumbu, tergantung cara penggunaannya. Sebagai bumbu, cabai pedas sangat populer di Asia Tenggara karena mampu memperkuat cita rasa makanan. Di Indonesia, cabai juga menjadi salah satu komoditas penting yang banyak dibudidayakan petani karena memiliki nilai jual tinggi. Namun, harga cabai sering kali fluktuatif, seperti yang dilaporkan Badan Pusat Statistik (BPS), di mana kenaikan harga cabai merah akibat tingginya curah hujan menjadi salah satu penyebab inflasi. Hal ini menunjukkan peran cabai yang signifikan tidak hanya dalam aspek kuliner tetapi juga dalam perekonomian.\n\nSelain menjadi bahan pangan utama, cabai memiliki banyak manfaat kesehatan berkat kandungan capsaicin dan vitamin yang kaya di dalamnya. Kandungan tersebut membantu menjaga kesehatan jantung, melancarkan sirkulasi darah, dan berperan sebagai antikanker. Capsaicin diketahui dapat memperlambat pertumbuhan sel kanker tanpa merusak sel sehat, serta membantu mengatasi masalah seperti sakit maag ringan dengan membunuh bakteri Helicobacter pylori. Lebih lanjut, cabai juga dapat meredakan flu, melancarkan pernapasan, meningkatkan kualitas tidur, serta mengurangi rasa sakit dengan menurunkan sensitivitas reseptor nyeri. Bahkan, konsumsi cabai mampu menjaga mood dengan meningkatkan level hormon serotonin dan endorfin yang membantu mengurangi stres dan depresi.\n\nDengan manfaatnya yang luas, cabai layak menjadi tanaman wajib di pekarangan rumah. Penanamannya cukup mudah dan dapat memenuhi kebutuhan harian tanpa harus bergantung pada pasar. Selain sebagai solusi praktis untuk menghemat biaya, menanam cabai juga mendukung ketersediaan pangan sehat yang kaya manfaat, mulai dari meningkatkan kesehatan hingga memperkuat perekonomian keluarga. Dengan demikian, cabai tidak hanya memberikan cita rasa pada makanan tetapi juga mendukung kualitas hidup secara keseluruhan.",
                "source": "https://dlh.bulelengkab.go.id/informasi/detail/artikel/16_tanaman-cabai-dan-manfaatnya",
                "created_at": "2024-12-04T03:47:28.000Z"
            }
        ]
    }
}
```
## Article API 🔍
**Description** : Provides an API endpoint for analyzing images of diseased chili plant leaves. Utilizes machine learning models to predict potential diseases based on the uploaded image.
#### `GET /article`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
```json
{
    "status": "success",
    "message": "Articles fetched successfully",
    "data": {
        "results": [
            {
                "id": 31,
                "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733892339712.jpg",
                "title": "Cabeku sakit",
                "description": "info obat",
                "created_at": "2024-12-11T04:45:39.000Z",
                "email": "ahmadsyauqi150@gmail.com",
                "displayName": "Ahmad Syauqi"
            },
            {
                "id": 30,
                "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733734184218.jpg",
                "title": "penyakit cabe nih",
                "description": "contoh powdery mildew",
                "created_at": "2024-12-09T06:38:24.000Z",
                "email": "rifaindrasetiawan@mail.ugm.ac.id",
                "displayName": "Rifa Indra Setiawan"
            },
            {
                "id": 29,
                "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733520191860.jpg",
                "title": "Cabe lucu banget",
                "description": "buat maskot boleh lah ya",
                "created_at": "2024-12-06T21:23:12.000Z",
                "email": "rifaset@gmail.com",
                "displayName": "rifaset"
            }
        ]
    }
}
```
#### `POST /article`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
```json
{
    "status": "success",
    "message": "Article created successfully",
    "data": {
        "email": "mamik2@gmail.com",
        "displayName": "mamik2",
        "title": "Cabai di Indonesia: Harta Karun Kuliner 3",
        "description": "Cabai adalah bahan penting dalam masakan Indonesia",
        "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733896060662.jpg",
        "timestamp": "2024-12-11T05:47:40.854Z"
    }
}
```
#### `PUT /article/:id`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
```json
{
    "status": "success",
    "message": "Article updated successfully",
    "data": {
        "id": "32",
        "title": "mek",
        "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733896123457.png",
        "description": "mik"
    }
}
```
#### `DELETE /article/:id`
Upload images of chili leaves that are indicated by disease to get detection results.
#### Response
```json
{
    "status": "success",
    "message": "History record and image deleted successfully for id: 32"
}
```
# Google Cloud Architecture
![alt text](https://github.com/CiMon-Capstone-Project/Cloud-Computing_V2/blob/main/images/cimon-architecture.jpg?raw=true)
=======
## Google Cloud Services 
This architecture outlines the components used in the CiMon Web Service, leveraging various Google Cloud services for efficient deployment and management.
  * **Git Repository**: Centralized storage for the source code. It triggers Continuous Integration/Continuous Deployment (CI/CD) processes upon code push.
  * **Cloud Build**: Automates the building of Docker images from the source code in the Git repository, facilitating a streamlined deployment process.
  * **Artifacts Registry**: Stores the built Docker images, ensuring version control and easy access for deployment.
  * **Cloud Run**: A serverless platform that deploys and manages the Docker images, allowing for automatic scaling based on incoming requests.
  * **Cloud Storage**: Provides a scalable and secure location for storing and accessing media files used by the application.
  * **Firebase Authentication**: Offers real-time database capabilities and authentication services, enhancing user interaction and data management.
  * **Cloud SQL**: A fully managed relational database service that handles database queries, ensuring data integrity and availability.
TensorFlow Lite Model: Utilizes machine learning models for on-device inference, enabling advanced features within the application.
This architecture ensures a robust, scalable, and efficient web service, leveraging the best practices of cloud computing.
## Contact 
If you have any questions, suggestions, or feedback, please feel free to reach out to us:
* **Azhar** Ilyas Hanifa [Linkedin](https://www.linkedin.com/in/azharilyas/)
* **Candika** Dwi Handaru [Linkedin](https://www.linkedin.com/in/candika-dwi-handaru/)
