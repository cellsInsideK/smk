import NavBar from '../widgets/NavBar/NavBar';
import { MobileMenu } from '../widgets/MobileMenu/MobileMenu';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <AppRouter />
      </main>
      <MobileMenu />
    </div>
  );
}

export default App;
