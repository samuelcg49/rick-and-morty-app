import ReactDOM from 'react-dom';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import "./index.css";

ReactDOM.render(
  <SearchProvider>
    <App />
  </SearchProvider>,
  document.getElementById('root')
);
