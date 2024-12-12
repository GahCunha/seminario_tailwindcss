import { CardSkill } from "../cardSkill";

export function Skills() {
    return (
        <section className="mt-20 p-4 lg:p-20">
            <h2 className="text-4xl lg:text-5xl text-center my-5">
                My{" "}
                <span className="font-bold">Skills</span>
            </h2>
            <div className="flex flex-grow gap-16 mt-4 justify-center items-center">
                {new Array(10).fill("Este é o mesmo item").map((item, index) => (
                    <CardSkill key={index}>oi</CardSkill>
                ))}
            </div>
        </section>
    );
}
