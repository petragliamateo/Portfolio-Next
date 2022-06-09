export default function ProyectoMuestra({
  slide, imgUrl, titulo, contenido, projectUrl,
}) {
  const position = slide === 'left' ? 'md:mr-auto lg:ml-32 md:ml-16 mx-12 md:flex-row'
    : 'md:ml-auto lg:mr-32 md:mr-16 mx-12 md:flex-row-reverse';
  const responsiveCont = 'lg:w-2/3 md:w-[680px] w-auto md:h-94 h-auto flex md:flex-row flex-col';

  return (
    <div className={`flex ${position} ${responsiveCont} my-16 bg-dark-1`}>
      <div className="md:w-1/2 w-auto h-full bg-blue-500 self-center"><img alt="" src={imgUrl} /></div>
      <div className="text-center w-full flex flex-col justify-between">
        <h1 className="my-8 text-2xl font-semibold">{titulo}</h1>
        <p className="mx-8">{contenido}</p>
        <a href={projectUrl} className="my-8 w-32 mx-auto btn btn-dark border-dark-1">
          Ir
        </a>
      </div>
    </div>
  );
}
