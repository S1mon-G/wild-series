import "./Program.css";
import type { program } from "../types/programs";

type programProps = {
  program: program;
};
export default function Program({ program }: programProps) {
  return (
    <article>
      <h1>{program.title}</h1>
      <img
        src={program.poster}
        alt="illustration du programme"
        className="program-poster"
      />
      <div className="program-info">
        <p>{program.synopsis}</p>
        <h3>
          {program.year} {program.country}
        </h3>
      </div>
    </article>
  );
}
