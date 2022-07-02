import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState } from 'react';


function App() {
    const [overlay, setOverlay] = useState(null);

    return (
      <div className={'base-layout ' + (overlay ? overlay : '')}>
          <div className='base-layout-header'>
              {/*<Header overlay={overlay} setOverlay={setOverlay}/>*/}
          </div>

          <div className="base-layout-main">
              <main>
                  <section>
                      <p>section</p>
                  </section>
              </main>
          </div>

          <div className="base-layout-footer">
            {/*<Footer/>*/}
          </div>
      </div>
  );
}

export default App;
