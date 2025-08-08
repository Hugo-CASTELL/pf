import { Button } from "../components/common/Button";
import { Tag } from "../components/common/Tag";
import capgemini_logo from "../assets/img/capgemini_logo.png"
import enseeiht_logo from "../assets/img/ENSEEIHT_logo.png"

export function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-96 bg-background-neutral-secondary flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-2xl font-semibold">
            Developer, <br />
            skill collector, <br />
            focused on what matters.
          </h1>
          <div className="flex gap-4">
            <Tag label="Capgemini Engineering" imgSrc={capgemini_logo} bgType={4} />
            <Tag label="ENSEEIHT" imgSrc={enseeiht_logo} bgType={3} />
          </div>
          <div className="flex gap-6 py-[15px]">
            <Button label="Discover my work" action={() => {}} />
            <div>
              <div className="absolute top-0 left-0 -translate-1/2 size-[30px] rounded-full bg-background-neutral-secondary" />
              <Button label="Get in touch" action={() => {}} />
              <div className="absolute bottom-0 right-0 translate-1/2 size-[30px] rounded-full bg-background-neutral-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
