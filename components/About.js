import { useSelector } from 'react-redux';
import Cuadro from './Cuadro';
import { about } from '../pageConfig.json';

export default function About({ trans }) {
  const colors = useSelector((state) => state.colors);
  return (
    <div className="w-full flex flex-col relative" id="about">
      <h1 className="self-center my-12 text-3xl font-semibold text-dark-6">Sobre mi</h1>

      <div className="flex flex-wrap justify-center md:mx-32 mx-16">

        {about.map((art) => (
          <Cuadro data={art} trans={trans[art.id]} key={art.id} colors={colors} />
        ))}

      </div>

    </div>
  );
}
