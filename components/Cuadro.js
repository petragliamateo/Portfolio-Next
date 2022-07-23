export default function Cuadro({ data, trans, colors }) {
  const {
    id, titulo, contenido,
  } = data;
  const textShadow = '1px 0px 1px #000, 0px 1px 1px #000, -1px 0px 1px #000, 0px -1px 1px #000';
  return (
    <div className="md:mx-16 mx-8 mb-16 w-64">
      <h1 className="text-xl font-semibold text-center" style={{ color: colors.dark6, textShadow }}>{titulo}</h1>
      <hr
        className={`reveal${id} mx-14 mb-2 mt-1 border border-dark-1 
            transition-transform duration-1000 ease-out delay-300 ${trans}`}
        style={{ borderColor: colors.line }}
      />
      <p className="text-center font-semibold" style={{ color: colors.dark6, textShadow }}>
        {contenido}
      </p>
    </div>
  );
}
