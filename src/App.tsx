import React from 'react';
import { LeaderboardHeader } from './components/LeaderboardHeader';
import { LeaderboardGrid } from './components/LeaderboardGrid';
import { ErrorMessage } from './components/ErrorMessage';
import { FilterProvider } from './context/FilterContext';
import { useTeamsData } from './hooks/useTeamsData';

function App() {
  const { teams, results, loading, error } = useTeamsData();

  return (
    <FilterProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <LeaderboardHeader />
          
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <ErrorMessage 
              message={error.message} 
              onRetry={() => window.location.reload()}
            />
          ) : (
            <LeaderboardGrid teams={teams} results={results} />
          )}
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;