import React from 'react';
import { Footer, Header } from './components/appWrappers';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header className="mb-4" />
      <main className="flex-grow ">
        <AllRoutes />
      </main>
      <Footer className="mt-4" />
    </div>
  );
}

export default App;
