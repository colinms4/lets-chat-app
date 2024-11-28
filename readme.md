# Basic Projec Information 
To build a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their location.

# Tech Stack 
- React Native
* Expo
+ Firebase
- Andriod Studio
* GiftedChat
+ AsyncStorage
- React Native Maps

# How to test the Application locally

1. Clone the Repository git clone https://github.com/colinms4/lets-chat-app.git cd chat-demo
2. Install dependencies ```npm install ``` and ``` npm install -g expo-cli ``` 
3. Configure Firebase
Make sure to use your Firebase configurations in App.js. Create a new project on Firebase, add a web application and copy your firebase credentials.
```
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
  };
```
4. Run your app locally with ``` npm start ``` 
5. Open up your Expo Go app or use Andriod Studio Emulator 

