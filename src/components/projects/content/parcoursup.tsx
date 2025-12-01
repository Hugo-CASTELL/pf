export function ParcoursupBelow() {
  return (
    <div className="blog-block">
      <h2 className="blog-first-title">Stable Marriage — Parcoursup-like matching algorithm</h2>

      <p className="blog-paragraph">
        This project re-implements a Parcoursup-style matching system using a modified version of the
        Stable Marriage algorithm. Inspired by the official Parcoursup documentation, the goal was to
        reproduce the logic while optimising time and space complexity in Python. The work was done
        in collaboration with Antoine Texier.
      </p>

      <h2 className="blog-title">Data model</h2>
      <p className="blog-paragraph">
        Input data is provided through JSON files describing students, schools, and their respective
        ordered preferences. Capacities are also specified, allowing each school to accept several
        students — a polygamous constraint compared to traditional Gale-Shapley.
      </p>

      <h2 className="blog-title">Algorithm</h2>
      <p className="blog-paragraph">
        Our implementation follows Gale-Shapley with one important modification: suitors do not
        re-propose every day. Instead, they only return to the queue when they are explicitly rejected.
        This significantly reduces unnecessary iterations and brings the practical complexity closer to
        O(n) in many scenarios.
      </p>
      <p className="blog-paragraph">
        Each unmatched suitor proposes to their next preferred option, and courted persons accept or
        reject proposals based on their ranking. Schools with capacities can temporarily accept several
        candidates while still replacing less preferred ones when a better match appears.
      </p>

      <h2 className="blog-title">Implementation details</h2>
      <p className="blog-paragraph">
        We chose an object-oriented design to clearly separate responsibilities: Courtiers handle
        proposals, while Courted entities evaluate them. Efficient operations rely on sets, dictionaries,
        and a custom <i>DichotomicList</i> structure, used to maintain engagements sorted by preference
        and enable O(log k) insertions when replacing candidates under capacity constraints.
      </p>

      <h2 className="blog-title">Performance</h2>
      <p className="blog-paragraph">
        With 10 000 students, 55 schools, and nearly 10 000 total available seats, the algorithm runs in
        around 2.9 seconds under Python’s cProfile tool. This confirms that the optimisations
        significantly reduce overhead compared to a naïve implementation.
      </p>

      <h2 className="blog-title">Reliability & testing</h2>
      <p className="blog-paragraph">
        To validate correctness, we tested the algorithm on numerous handcrafted datasets, progressively
        increasing complexity and verifying results manually. Tests covered one-to-one matchings,
        capacity-based assignments, and more complex multi-school scenarios.
      </p>

      <h2 className="blog-title">Run it yourself</h2>
      <p className="blog-paragraph">
        The full project is available on GitHub, along with performance tests and sample data. You can
        run the matching algorithm directly through <code>main.py</code> or launch profiling benchmarks
        to measure execution time on larger datasets.
      </p>
    </div>
  )
}

