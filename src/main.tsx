import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'normalize.css';
import '@/assets/css/init.css';
import '@/assets/css/components/tab.css';
import App from './App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/MovieApp">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)