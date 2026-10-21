import { BookOpen } from "lucide-react";
import "./Journal.css";

function Journal() {
  return (
    <section className="journal-page">
      <p className="journal-eyebrow">
        KHISHA'S LAB / ENGINEERING JOURNAL
      </p>

      <BookOpen size={32} />

      <h1>
        Notes from <em>the build.</em>
      </h1>

      <p>
        Experiments, debugging sessions, technical discoveries,
        and lessons from my software engineering journey.
      </p>
    </section>
  );
}

export default Journal;
