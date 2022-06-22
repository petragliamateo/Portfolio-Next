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
                       clonando la aplicación original de Netflix. Esta
                       aplicación simula a la aplicación original, con funcionalidades como
                       registrarse e iniciar sesión, para esto se utilizó
                       Authentication de Firebase; también se utiliza una database Firestore
                       subida a Firebase donde contiene series y películas.`}
          imgUrl="/images/Netflix-clone.png"
          projectUrl="https://github.com/petragliamateo/Netflix-clone-app"
          projectMsg="Descargar APK"
          gitUrl="https://github.com/petragliamateo/Netflix-clone-app"
        />
        <ProyectoMuestra
          slide="left"
          titulo="Juegones"
          contenido="Recopilación de algunos juegos y/o aplicaciones
                    creados usando React, APIs o simplemente JavaScript."
          imgUrl="/images/Juegones.png"
          projectUrl="https://juegones.vercel.app/"
          gitUrl="https://github.com/petragliamateo/Juegones"
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
