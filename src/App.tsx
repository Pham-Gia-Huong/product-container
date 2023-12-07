import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';
console.log('Auth', mount);

const App = () => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            mount(ref.current);
        }
    }, [ref]);
    return (
        <div>
            <div ref={ref} />
            Container app
            {/* <Auth /> */}
        </div>
    );
};

export default App;
