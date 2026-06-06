import { useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';

/* precisou usar o useState pois como o React renderiza os elementos de acordo com o seu estado e props atuais,
então ao passar na action do botão para criar o Input, o estado não muda, e o Input não é renderizado
*/
export const App = () => {
    const [ showInput, setShowInput ] = useState(false);

    return (
        <div>
            <h1 className="title">Welcome!</h1>
            <Button description='Click me!' className='button' action={() => {
                setShowInput(prev => !prev);
            }} />

            {showInput && (<Input id='teste' type='text' label='Digite seu nome'/>)}
        </div>
    );
}
