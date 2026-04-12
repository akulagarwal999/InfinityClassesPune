# Infinity Classes Pune — Website

Official website for Infinity Classes, Pimpri Chinchwad, Pune.

## Project Status

| Item              | Status        |
|-------------------|---------------|
| Website UI        | Complete      |
| Admin Panel UI    | Complete      |
| Firebase Backend  | Pending setup |

## Project Structure

| File         | Purpose                                      |
|--------------|----------------------------------------------|
| `index.html` | Main public website (static, Firebase TBD)   |
| `admin.html` | Admin control panel (Firebase Auth TBD)      |
| `logo.png`   | Brand logo                                   |

## Firebase Setup (To Be Done)

When ready to integrate Firebase:

1. Go to https://console.firebase.google.com
2. Create a new project
3. Enable these services:
   - Firestore Database
   - Firebase Storage
   - Authentication (Email/Password)
   - Firebase Hosting
4. Copy your Firebase config object
5. Paste config into index.html and admin.html 
   inside the firebaseConfig object
6. In Firebase Auth console — create admin user 
   (Sukrut sir's email + password)
7. Set Firestore Security Rules:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}

8. Set Storage Security Rules:

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}

9. Run: firebase deploy

## Admin Access (After Firebase Setup)

URL: https://yoursite.web.app/admin.html
Login with credentials set in Firebase Authentication.

---
*Client project — all rights reserved.*
