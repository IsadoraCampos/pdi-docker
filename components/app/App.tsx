import { useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Header } from '../header/Header';

/* precisou usar o useState pois como o React renderiza os elementos de acordo com o seu estado e props atuais,
ao passar na action do botão a função para criar o Input, o estado não muda, e o Input não é renderizado
*/
export const App = () => {
    const [ showInput, setShowInput ] = useState(false);

    return (
        <div>
            <Header title='Welcome!' className='header'/>
            <Button description='Click me!' className='button' action={() => {
                setShowInput(prev => !prev);
            }} />

            {showInput && (<Input id='teste' type='text' className='input' label='Digite seu nome'/>)}
        </div>
    );
}
