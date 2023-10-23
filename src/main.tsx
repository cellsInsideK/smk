import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './app/styles/index.scss';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: '#2D303B',
          },
        },
      }}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
