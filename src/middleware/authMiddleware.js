import admin from 'firebase-admin';  
import path from 'path';  

const serviceAccountPath = path.resolve('/workspace/service.json');  

admin.initializeApp({  
  credential: admin.credential.cert(serviceAccountPath)  
});  

export const verifyToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        status: 'error',
        message: 'No token provided or invalid token format' 
      });
    }

    const token = authorizationHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;

    // Fetch user details using the UID
    const userRecord = await admin.auth().getUser(req.user.uid);
    req.user.displayName = userRecord.displayName; // Add displayName to the user object

    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({
      status: "error",
      message: 'Invalid token',
      error: error.message
    });
  }
};
