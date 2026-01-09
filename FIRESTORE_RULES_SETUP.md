# Firestore Security Rules Setup

## 🔥 IMPORTANT: Set Up Security Rules

Your Firestore database needs security rules to allow the app to read and write data.

## Quick Setup (2 minutes)

### Step 1: Go to Firestore Rules
1. Open Firebase Console: https://console.firebase.google.com/
2. Select your project: **catan-d7e10**
3. Click **Firestore Database** in the left sidebar
4. Click the **Rules** tab at the top

### Step 2: Copy and Paste These Rules

Replace the existing rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write tournaments
    match /tournaments/{tournamentId} {
      allow read, write: if true;
    }
    
    // Allow anyone to read and write players
    match /players/{playerId} {
      allow read, write: if true;
    }
  }
}
```

### Step 3: Publish the Rules
1. Click **Publish** button
2. Wait for confirmation message

---

## ✅ What This Does

These rules allow your app to:
- ✅ Create new tournaments and players
- ✅ Read all tournaments and players
- ✅ Update existing data
- ✅ Delete tournaments and players

---

## 🔒 Security Note

**Current Setup:** These rules allow **anyone** to read/write your data (no authentication required).

**For Family Use:** This is fine! Your app is for family tournament tracking.

**For Public Use:** If you want to make this public later, you should:
1. Add Firebase Authentication
2. Update rules to require authentication
3. Add user-specific data protection

---

## 🧪 Testing

After setting up the rules:

1. Open your app in a browser
2. Open browser console (F12 or Cmd+Option+I)
3. Look for: `✅ Firebase initialized successfully`
4. Look for: `📊 Project ID: catan-d7e10`
5. Add a player or tournament
6. Check Firebase Console → Firestore Database → Data tab
7. You should see your data appear!

---

## 🐛 Troubleshooting

### "Missing or insufficient permissions" error
- **Solution:** Make sure you published the security rules above

### Data not appearing in Firestore
- **Solution:** Check browser console for errors
- **Solution:** Verify rules are published
- **Solution:** Refresh the Firebase Console

### "Firebase initialization failed"
- **Solution:** Check your internet connection
- **Solution:** Verify the config in `index.html` matches your Firebase project

---

## 📚 Learn More

- [Firestore Security Rules Documentation](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Console](https://console.firebase.google.com/)

---

**Last Updated:** January 2026
