import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json' 
import App from '../App';
import store from './app/store';
import { Provider } from 'react-redux';

const PenguinBoos = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => PenguinBoos)