import ProyectoMuestra from './ProyectoMuestra';

export default function Proyectos() {
  return (
    <div className="w-full bg-dark-3 flex flex-col" id="projects">
      <h1 className="self-center mt-16 text-3xl font-semibold text-dark-6">Proyectos</h1>

      <div className="flex flex-col">

        <ProyectoMuestra
          slide="rigth"
          titulo="Netflix clone App"
          contenido={`Aplicación para celular creada con react-native,
                       clonando la aplicación original de Netflix. (En progreso..)`}
          imgUrl="/images/Netflix-clone.png"
          projectUrl="https://github.com/petragliamateo/Netflix-clone-app"
        />
        <ProyectoMuestra
          slide="left"
          titulo="Quiz Game"
          contenido="Juego creado con React, utilizando API de
                    Trivias tipo multiple choice, el jugador debe responder
                    5 preguntas eligiendo el resultado."
          imgUrl="/images/Quizzical2.png"
          projectUrl="https://github.com/petragliamateo/Quiz-game-project"
        />

        <a
          href="https://github.com/petragliamateo"
          className="mb-8 w-64 mx-auto text-center btn btn-dark border-r-dark-2 border-b-dark-2 border-l-dark-3 border-t-dark-3"
        >
          Todos los proyectos en Github
        </a>

      </div>

    </div>
  );
}
