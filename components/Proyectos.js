import ProyectoMuestra from './ProyectoMuestra';
import * as content from '../pageConfig.json';

export default function Proyectos() {
  const { projects } = content;
  return (
    <div className="w-full flex flex-col" id="projects">
      <h1 className="self-center mt-16 text-3xl font-semibold text-dark-6">Proyectos</h1>

      <div className="flex flex-col">

        {projects.map((p) => (
          <ProyectoMuestra key={p.id} project={p} />
        ))}

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
