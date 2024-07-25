import { EXPERIENCES } from "../constants";
import GPLogo from "../assets/GPLogo.png"; // Make sure the path is correct

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experiences</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a
                href="https://govtportal.us/"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src={GPLogo} alt="Gov't Portal" />
              </a>
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="m-5 w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -
                <span className="text-sm text-yellow-300">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
