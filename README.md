# Infininet - Social Network

![Infininet Banner 1](https://github.com/bb2882/InfiniNet/assets/70382872/d2e647f3-5064-4bf9-b1d9-7b830988fb14)

![Infininet Banner 2](https://github.com/bb2882/InfiniNet/assets/70382872/4acae84d-0341-4bc6-8ec0-363edb7248d1)

![Infininet Banner 3](https://github.com/bb2882/InfiniNet/assets/70382872/0ddfe094-d816-454f-82d5-77eff25d163a)

Welcome to Infininet, a social networking platform that connects professionals from around the world. Share your thoughts, insights, and experiences with a community of like-minded individuals. Engage in meaningful discussions, showcase your accomplishments, and build valuable connections!

## Features

- **Seamless Login Experience**: As soon as you enter Infininet, you'll see a user-friendly login page. Sign in using your email, and your profile picture and name will be instantly imported, making this process much easier.

- **Powerful Sharing**: Share articles, images, and videos comfortably. When you hit the "Share a Post" button, a modal will pop up, allowing you to craft your posts with ease.

- **Visually Stunning**: Infininet boasts a visually appealing design with a focus on UI/UX. Enjoy a beautiful and intuitive interface that keeps you engaged and inspired.

## Technologies Used

- React: The core of application, providing a dynamic and interactive user experience.

- Redux: For managing the application's state effectively, ensuring smooth data flow.

- Styled Components: Enabling us to create stylish and consistent UI components with ease.

- Firebase: A database that offers real-time updates, smooth and easy expansion.

## Get Started

Follow these steps to run Infininet locally:

1. Clone the repository: `https://github.com/bb2882/InfiniNet.git`

2. Install dependencies: `npm install`

3. Start the development server: `npm start`

4. Open your browser and navigate to: `http://localhost:3000`

## Out Now

You can access the deployed version of Infininet right now without any installations. Simply visit [InfiniNet](https://infininet-ef987.web.app/) and experience professional networking.

## Deploying Infininet Website on Firebase Hosting

To deploy the Infininet website on Firebase Hosting, follow these simple steps:

### Step 1: Create a Firebase Project

1. Visit the [Firebase website](https://firebase.google.com/) and click the "Go to console" button in the upper-right part of the site.

2. Click the "Create a project" button, add a name for your project, and accept the terms before pressing the "Continue" button.

### Step 2: Register Your App

1. Click on "Settings" from the left sidebar, then navigate to the "Project settings" section.

2. In the "Your apps" section, register your app.

### Step 3: Get Your Firebase API Keys

1. After registering your app, Firebase will provide you with a set of API keys required for authentication and other features.

2. Create a `.env` file in the root folder of your project.

3. Paste the API keys into the `.env` file following this format:

```
REACT_APP_FIREBASE_API_KEY = 'your_key_here'
REACT_APP_FIREBASE_AUTH_DOMAIN = 'your_key_here'
REACT_APP_FIREBASE_PROJECT_ID = 'your_key_here'
REACT_APP_FIREBASE_STORAGE_BUCKET = 'your_key_here'
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 'your_key_here'
REACT_APP_FIREBASE_APP_ID = 'your_key_here'
```

Replace `'your_key_here'` with the corresponding API keys you obtained from Firebase.

### Step 4: Set Up Firebase Hosting

Now that you have your API keys stored in the `.env` file, you are ready to set up Firebase Hosting for your Infininet website.

Simply follow the official Firebase Hosting documentation to deploy your app. You can find detailed instructions [here](https://firebase.google.com/docs/hosting).

That's it! Your Infininet website should now be successfully deployed on Firebase Hosting. Happy coding!

**Note**: Make sure to keep your API keys safe and never share them publicly.

## Acknowledgements

I do appreciate any contributions and inspiration.

---
