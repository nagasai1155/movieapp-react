import React from 'react';
import First from './LazyLoading/First';
import Second from './LazyLoading/Second.js';
import  { lazy,Suspense } from 'react';
const lazyloading2 = lazy(()=>import( './LazyLoading/First'));
  const lazyloading1 = lazy(()=>import ('./LazyLoading/Second.js'));
  
function App() {
  
  return (
    <>
    <Suspense  fallback={<h2>please wait .........</h2>}>

      <First/>
     
    </Suspense>
    
    <Suspense fallback={<h2>wait again????</h2>}>
      <Second/>
    </Suspense>
    </>
  )
}

export default App