export function Home() {
  return (
    <div className={"w-full min-h-full h-full bg-primary text-secondary text-md grid place-items-center"}>
      <div className={"text-center px-6"}>
        <h1 className={"text-4xl font-semibold mb-4"}>
          Think. Learn.<br />
          Code.
        </h1>
        <p className={"font-light mb-6"}>
          I’m Hugo, a software engineer passionate about creating robust and efficient solutions that address real-world challenges and impact business results.
        </p>
        <p className={"font-light mb-6"}>
          Currently contributing to PLM projects at Capgemini Engineering while pursuing engineering degree at ENSEEIHT.
        </p>
        <p className={"font-light mb-6"}>
          Let’s build impactful solutions together.
        </p>
        <a href="/projects" className={"text-blue-500 hover:underline"}>
          View Projects
        </a>
        <div className={"grid grid-cols-3 place-items-center mt-4"}>
          {Array.from(Array(10).keys()).map((_, i) => (
            <div
              key={i}
              className={`w-24 h-24 m-2 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700`}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}