import {render} from '@testing-library/react';
import PrimeraAPP from '../PrimeraApp';
import { shallow } from 'enzyme';
describe('Pruebas en PrimeraAPP',()=>{
    // test('Debe de mostrar el mensaje de "Pussy Destroyer"',()=>{
    //     const saludo = 'Pussy Destroyer';
    //     //const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //     //expect(getByText(saludo)).toBeInTheDocument();
    // })
    test('Debe de moster PrimeraApp correctamente',()=>{
        const saludo = 'Pussy Destroyer';
        //const wrapper = shallow(<PrimeraAPP saludo={saludo} />);
        //expect(wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar el subtitulo enviado por props',()=>{
        const saludo = 'Pussy Destroyer';
        const subtitulo = 'Soy un subtitulo';
        //const wrapper = shallow(<PrimeraAPP saludo={saludo}, subtitulo={subtitulo}/>);
        //const textoParrafo = wrapper.find('p').text();
        //expect(textoParrafo).toBe(subtitulo)
    })
})