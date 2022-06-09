/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function Footer() {
  const hoverButton = 'hover:scale-125 transition-transform duration-400 ease-out';

  return (
    <footer className="bg-slate-800 flex flex-col h-full relative">

      <ul className="flex my-5 self-center">
        <li className={`mr-2 ${hoverButton}`}>
          <a href="https://github.com/petragliamateo">
            <img alt="" src="/Icons/github-light.svg" />
          </a>
        </li>

        <li className={`mx-2 ${hoverButton}`}>
          <a href="https://www.linkedin.com/in/petragliamateo/">
            <img alt="" src="/Icons/linkedin-light.svg" />
          </a>
        </li>

        <li className={`mx-2 ${hoverButton}`}>
          <a href="https://www.instagram.com/petragliamateo/">
            <img alt="" src="/Icons/instagram-light.svg" />
          </a>
        </li>
      </ul>

      <h1 className="mb-2 self-center text-dark-6">COPYRIGHT &copy; 2022 MATEO PETRAGLIA</h1>

    </footer>
  );
}
