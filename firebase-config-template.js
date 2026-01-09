// ========================================
// FIREBASE CONFIGURATION TEMPLATE
// ========================================
// Copy this and replace the values in your HTML file (around line 1015)

const firebaseConfig = {
    apiKey: "AIzaSyA3SrhLUgikQALORCV4-SKm7KTdxYImSEE",
    authDomain: "catan-d7e10.firebaseapp.com",
    projectId: "catan-d7e10",
    storageBucket: "catan-d7e10.firebasestorage.app",
    messagingSenderId: "249740495780",
    appId: "1:249740495780:web:3022cb06d0a9e3c4e50f31",
    measurementId: "G-DY62P2TGGY"

// ========================================
// WHERE TO FIND THESE VALUES
// ========================================
// 1. Go to: https://console.firebase.google.com/
// 2. Select your project (or create one)
// 3. Click the gear icon ⚙️ → "Project settings"
// 4. Scroll to "Your apps" section
// 5. Click the Web icon </> to add a web app
// 6. Copy the firebaseConfig object shown
// 7. Paste it into your HTML file

// ========================================
// EXAMPLE (DO NOT USE - GET YOUR OWN!)
// ========================================
/*
const firebaseConfig = {
    apiKey: "AIzaSyAbc123def456ghi789jkl012mno345pqr",
    authDomain: "catan-tracker-12345.firebaseapp.com",
    projectId: "catan-tracker-12345",
    storageBucket: "catan-tracker-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789"
};
*/

// ========================================
// FIRESTORE SECURITY RULES
// ========================================
// After setting up, go to Firestore → Rules and use:

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tournaments/{tournamentId} {
      allow read, write: if true;
    }
    match /players/{playerId} {
      allow read, write: if true;
    }
  }
}
*/

// ⚠️ Note: These rules allow anyone to read/write
// For production, consider adding authentication

// ========================================
// QUICK START CHECKLIST
// ========================================
// [ ] Create Firebase project
// [ ] Enable Firestore Database (test mode)
// [ ] Add web app to project
// [ ] Copy firebaseConfig
// [ ] Paste into HTML file (line ~1015)
// [ ] Save file
// [ ] Open in browser
// [ ] Check console for "✅ Firebase initialized successfully"
// [ ] Test by adding a player or tournament
// [ ] Verify data appears in Firebase Console → Firestore Database

// ========================================
// TROUBLESHOOTING
// ========================================
// If you see "Using localStorage" in console:
// → Your config still has placeholder values
// → Make sure to replace ALL placeholder text

// If you see "Firebase initialization failed":
// → Check your config values are correct
// → Ensure Firestore is enabled in Firebase Console
// → Check browser console for specific error

// Data not syncing:
// → Verify Firestore security rules allow read/write
// → Check internet connection
// → Look for errors in browser console
