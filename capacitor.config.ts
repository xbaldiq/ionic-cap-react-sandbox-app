import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iapsandboxtestapp',
  appName: 'ionic-cap-react-sandbox-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '804666653135-n6oa1mriqdesjjkjk9js1o0i542t3hfa.apps.googleusercontent.com',
      clientId: '804666653135-n6oa1mriqdesjjkjk9js1o0i542t3hfa.apps.googleusercontent.com',
      androidClientId: '804666653135-n6oa1mriqdesjjkjk9js1o0i542t3hfa.apps.googleusercontent.com', //use web client id
      iosClientId: '804666653135-45tv6t0vbu18lfrkkll4lv6fii91ki9j.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
