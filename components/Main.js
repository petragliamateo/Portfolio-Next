import { useSelector } from 'react-redux';

export default function Main({ trans, handleScroll }) {
  const marginResponsiveX = 'xl:mx-52 lg:mx-48 md:mx-32 sm:mx-16 mx-12';
  const hoverButton = 'hover:scale-125 transition-transform duration-400 ease-out';
  const colors = useSelector((state) => state.colors);

  return (
    <div className="my-auto">
      <div className={`${marginResponsiveX}`} style={{ color: colors.main }}>
        <h1 className="text-5xl font-semibold my-1">
          Hola! Soy Mateo
        </h1>
        <hr
          className={`reveal0 w-64 mx-16 border transition-transform duration-1000 ease-out ${trans}`}
          style={{ borderColor: colors.line }}
        />
        <h1 className="text-2xl font-semibold mt-2 mb-8">
          Web Developer
        </h1>

        <button
          type="button"
          onClick={() => handleScroll('contact')}
          style={{ borderColor: colors.button }}
          className="btn btn-dark"
        >
          Contact Me
        </button>

        <ul className="flex mb-2 mt-8">
          <li className={`mr-2 ${hoverButton}`}>
            <a href="https://github.com/petragliamateo">
              <img alt="" src="/Icons/github-dark.svg" />
            </a>
          </li>
          <li className={`mx-2 ${hoverButton}`}>
            <a href="https://www.linkedin.com/in/petragliamateo/">
              <img alt="" src="/Icons/linkedin-dark.svg" />
            </a>
          </li>
          <li className={`mx-2 ${hoverButton}`}>
            <a href="https://www.instagram.com/petragliamateo/">
              <img alt="" src="/Icons/instagram-dark.svg" />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}
