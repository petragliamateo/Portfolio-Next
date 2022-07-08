export default function ProyectoMuestra({ project }) {
  const {
    imgUrl, titulo, contenido, projectUrl, projectMsg, gitUrl, id,
  } = project;

  const position = Math.floor(id / 2) * 2 === id
    ? 'md:mr-auto lg:ml-32 md:ml-16 mx-12 md:flex-row'
    : 'md:ml-auto lg:mr-32 md:mr-16 mx-12 md:flex-row-reverse';
  const responsiveCont = 'lg:w-2/3 md:w-[680px] w-auto md:h-94 h-auto flex md:flex-row flex-col';

  return (
    <div className={`flex ${position} ${responsiveCont} my-16 bg-dark-1 bg-opacity-80`}>
      <div className="md:w-1/2 w-auto h-full bg-blue-500 self-center"><img alt="" src={imgUrl} /></div>
      <div className="text-center w-full flex flex-col justify-between">
        <h1 className="my-8 text-2xl font-semibold">{titulo}</h1>
        <p className="mx-8">{contenido}</p>
        <div className="flex items-center justify-center my-8">
          <a href={projectUrl} className="mx-4 w-48 btn btn-dark border-dark-1">
            {projectMsg}
          </a>
          <a href={gitUrl} className="mx-4 border-dark-1 flex justify-between items-center h-full px-3 shadow-xl rounded-full border bg-dark-3 hover:border-dark-3">
            <img alt="" src="/Icons/github-light.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
