# **Cloud Computing Documentation**
![alt text](https://github.com/CiMon-Capstone-Project/Cloud-Computing_V2/blob/main/images/CiMon.jpg?raw=true)
=======
**CiMon (Chili Monitoring)** is a cloud-based application designed to detect diseases in chili plants by analyzing leaf images. Utilizing Machine Learning technology, this application delivers fast and accurate detection results, assisting farmers in identifying and addressing plant diseases early to enhance crop productivity.

# Backend Features Documentation
## Dependency Used :
* @google-cloud/storage: A library to interact with Google Cloud Storage, commonly used for uploading and managing files in the cloud.
* body-parser: Middleware to parse incoming request bodies in a middleware before handling them, typically used for JSON and URL-encoded payloads.
* cors: A middleware to enable Cross-Origin Resource Sharing (CORS), allowing requests from different domains.
* dotenv: A module to load environment variables from a .env file into process.env, enhancing security and configuration.
* express: A fast and minimal web framework for building server-side applications with Node.js.
* firebase-admin: The Firebase Admin SDK for accessing Firebase services, such as authentication, Firestore, and Firebase Storage, on the server.
* multer: A middleware for handling multipart/form-data, primarily used for file uploads.
* mysql2: A library for connecting and interacting with MySQL databases, offering better performance and modern features compared to the original mysql library.
* nodemon: A development tool that automatically restarts the server when file changes in the project are detected, improving productivity during development.
## Diseases Detection API 
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
Retrieve a list of detection results for uploaded images of chili leaves, including information about disease, symptom, prevention, and treatment.
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
        ]
    }
}
```
#### `DELETE /detection`
Delete a specific detection record and its associated image for a given user.
#### Response
```json
{ 
        "status": "success",
        "message": "History record and image deleted successfully for user: mamik2@gmail.com"
}
```
## Blog API 
**Description** : Provides API endpoints for accessing blog content related to chili cultivation, including tips, tricks, and essential information for farmers.
#### `GET /blog`
Retrieve a list of blogs, including their titles, descriptions, and associated images, to provide helpful information about chili cultivation.
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
        ]
    }
}
```
## Article API 
**Description** : Provides an API endpoint to manage and retrieve articles related to chili plant cultivation. Users can fetch, create, update, and delete articles about chili plants, including information such as diseases, tips, and care instructions.
#### `GET /article`
Retrieve a list of articles with details such as title, description, author, and associated image URLs.
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
        "title": "Cabai di Indonesia",
        "image_url": "https://storage.googleapis.com/cimon-bucket/detection/1733896123457.png",
        "description": "Cabai adalah bahan paling penting dalam masakan Indonesia"
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

## Flow of Cloud Application in CiMon

1. **Git Repository:**
   - **Function**: Stores the source code of the application. Every time there is a code push to the repository, it triggers the CI/CD process.
   - **Process**: Updated application code is automatically passed to the defined build system.

2. **Cloud Build:**
   - **Function**: Automates the building of Docker images from the source code in the Git repository.
   - **Process**: Cloud Build takes the latest code, builds the Docker image, and packages the application into a container for easier deployment.

3. **Artifacts Registry:**
   - **Function**: Stores the built Docker images.
   - **Process**: After Cloud Build completes building the image, the image is stored in the Artifacts Registry to ensure the correct version is used for deployment.
4. **Cloud Run:**
   - **Function**: A serverless platform that deploys and manages Docker images automatically.
   - **Process**: Cloud Run deploys the image stored in the Artifacts Registry, providing automatic scaling to handle user traffic efficiently.

5. **Cloud Storage:**
   - **Function**: Provides scalable and secure storage for media files used by the application, such as images, videos, and other data.
   - **Process**: Cloud Storage offers a secure and managed location for the application’s media, allowing the application to access and serve files to users.

6. **Firebase Authentication:**
   - **Function**: Provides real-time authentication services for users.
   - **Process**: Users register or log in using Firebase Authentication, which then stores user sessions and provides access based on defined authorization.

7. **Cloud SQL:**
   - **Function**: A fully managed relational database service for the application.
   - **Process**: Cloud SQL is used to store user data, disease detection history, articles, and other information needed by the application, ensuring data integrity and availability.

## Flow Overview
Overall, the application flow begins with the code in the **Git Repository**, which is then processed by **Cloud Build** to create the Docker image. The built image is stored in **Artifacts Registry**, and **Cloud Run** handles the deployment and management of the application with automatic scaling. The required application data, both media and user data, is stored in **Cloud Storage** and **Cloud SQL**. For authentication, users rely on **Firebase Authentication** to ensure secure and managed access.

# Contact 
If you have any questions, suggestions, or feedback, please feel free to reach out to us:
* **Azhar** Ilyas Hanifa [Linkedin](https://www.linkedin.com/in/azharilyas/)
* **Candika** Dwi Handaru [Linkedin](https://www.linkedin.com/in/candika-dwi-handaru/)
