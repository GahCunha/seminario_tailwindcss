import { Facebook, Twitter, Figma, Github } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="mt-20 flex flex-col-reverse items-center p-4 lg:flex-row lg:p-20">
      <div className="space-y-4 text-center lg:w-1/2 lg:space-y-10 *:lg:text-left">
        <h2 className="text-4xl lg:text-6xl">
          Hello I&apos;am{" "}
          <span className="font-bold">
            Someone
            <br />
            Frontend{" "}
            <span className="outlined-text bg-clip-text text-transparent">
              Developer
            </span>
          </span>
          <br />
          Based In <span className="font-bold">Brazil.</span>
        </h2>
        <p className="text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          esse debitis commodi. Minima odio, adipisci ratione quaerat sunt
          provident ullam laudantium quos tempore dolorem, magni quisquam eius.
          Sequi temporibus tempore modi ad voluptas laborum fugit libero totam
          harum dolorem. Nam.
        </p>
        <div className="flex justify-center space-x-4 *:rounded-md *:border-2 *:border-foreground *:p-1 *:transition-colors lg:justify-start">
          <Facebook
            size={40}
            className="hover:bg-foreground hover:stroke-background"
          />
          <Twitter
            size={40}
            className="hover:bg-foreground hover:stroke-background"
          />
          <Figma
            size={40}
            className="hover:bg-foreground hover:stroke-background"
          />
          <Github
            size={40}
            className="hover:bg-foreground hover:stroke-background"
          />
        </div>
      </div>
      <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
        <Image
          src="/person.png"
          width={500}
          height={500}
          alt="hero"
          className="w-full max-w-sm dark:invert lg:max-w-full"
        />
      </div>
    </section>
  );
}
