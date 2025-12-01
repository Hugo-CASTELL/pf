export function MicroprocessorBelow() {
  return (
    <div className="blog-block">
      <h2 className="blog-first-title">CRAPS — a minimalistic RISC microprocessor (FPGA)</h2>

      <p className="blog-paragraph">
        CRAPS is a compact, educational FPGA microprocessor I implemented in SHDL as a reduced RISC-style instruction set. This project — directed by Jean-Christophe Buisson at ENSEEIHT — was a great opportunity to discover how logical circuits and microprocessors are designed, simulated and synthesised.
      </p>

      <h2 className="blog-title">How it works</h2>
      <p className="blog-paragraph">
        The design intentionally keeps the architecture minimal. Instructions are encoded in a single 32-bit word (the dbus) and the sequencer with a program counter steps through memory to execute them. The core components are a simple Arithmetic Logic Unit (ALU) and a sequencer/PC that together perform basic computation and control flow.
      </p>

      <h2 className="blog-title">Specifications (at a glance)</h2>
      <p className="blog-paragraph">
        CRAPS implements a 32-bit RISC-like ISA: 32-bit registers, integer arithmetic (add/sub on 32-bit words, 16×16 multiplies), no native floating-point support, and no native high-level types — strings and structures must be built from 32-bit words.
      </p>

      <h2 className="blog-title">Registers</h2>
      <p className="blog-paragraph">
        The processor exposes 32 registers (%r0..%r31) with several special roles: a constant zero register, a constant one, temporary registers, frame pointer, return and scheduler pointers, plus dedicated registers for the program counter and instruction return. A small set of registers are reserved for control (break, ret, etc.).
      </p>

      <h2 className="blog-title">ALU & instruction encoding</h2>
      <p className="blog-paragraph">
        The ALU reads registers as a byte stream and decodes every instruction from the 32-bit dbus. Instruction groups are distinguished by the most-significant bits (e.g., arithmetic with/without memory, sethi/branch, conditional branch), making the decode logic compact and deterministic.
      </p>
      <p className="blog-paragraph">
        Because all control and data are encoded in a single static word, the instruction format is simple to parse in hardware — ideal for an educational RISC implementation on FPGA.
      </p>

      <h2 className="blog-title">SHDL & synthesis</h2>
      <p className="blog-paragraph">
        I described the design in SHDL, a concise language for digital circuits. SHDL allowed modular description of combinational and sequential elements, which could then be simulated and synthesised onto an FPGA — providing hands-on experience from spec to working hardware.
      </p>

      <h2 className="blog-title">What I learned</h2>
      <p className="blog-paragraph">
        The project taught me the fundamentals of instruction encoding, register organisation, ALU design and the practical steps of going from high-level ISA decisions down to gate-level implementation and FPGA synthesis. It was an excellent bridge between theory and hardware practice.
      </p>
    </div>
  )
}

