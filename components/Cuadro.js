export default function Cuadro({ data, trans }) {
  const {
    id, titulo, contenido,
  } = data;
  return (
    <div className="md:mx-16 mx-8 mb-16 w-64">
      <h1 className="text-xl font-semibold text-center text-dark-5">{titulo}</h1>
      <hr className={`reveal${id} mx-14 mb-2 mt-1 border border-dark-1 
            transition-transform duration-1000 ease-out delay-300 ${trans}`}
      />
      <p className="text-center text-dark-0">
        {contenido}
      </p>
    </div>
  );
}
