import { HashRouter } from 'react-router-dom';
import { AppRouter } from './app/router';

function App() {
  return (
  <>
    {/* <BrowserRouter basename="/MovieApp/"> */}
    <HashRouter>
      <AppRouter />
    </HashRouter>
    {/* </BrowserRouter> */}
  </>
  )
};

export default App;
