import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const Help = React.lazy(() => import('./help'));

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback="Loading...">
      <QueryClientProvider client={queryClient}>
        <Help />
      </QueryClientProvider>
    </React.Suspense>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
