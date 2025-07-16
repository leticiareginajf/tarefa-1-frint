import type { JSX } from 'react';
import { Atividade1 } from './Atividade1';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(): JSX.Element {
    return (
        <main className="container py-4">
            <Atividade1 />
        </main>
    )
}


export default App;