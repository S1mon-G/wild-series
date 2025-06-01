import { useEffect, useState } from "react";
import Program from "../components/Program";
import type { program } from "../types/programs";

export default function Programs() {
  const [programs, setPrograms] = useState<program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <>
      <section className="program-library">
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </section>
    </>
  );
}
