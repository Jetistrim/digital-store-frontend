
import { QueryClientProvider } from '@tanstack/react-query';
import { Paths } from './routes';
import { queryClient } from './services';

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Paths />
    </QueryClientProvider>
  );
}

export default App;
