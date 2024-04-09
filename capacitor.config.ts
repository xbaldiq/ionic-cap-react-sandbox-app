import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iapsandboxtestapp',
  appName: 'ionic-cap-react-sandbox-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
