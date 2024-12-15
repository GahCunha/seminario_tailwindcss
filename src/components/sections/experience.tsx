import { BsGoogle, BsYoutube, BsApple } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function Experience() {
  return (
    <section className="mt-4 p-4 lg:px-24">
      <h2 className="mb-8 text-center text-4xl lg:text-5xl">
        My <span className="font-bold">Experience</span>
      </h2>

      <Card className="mb-6">
        <CardHeader className="flex flex-col lg:flex-row">
          <CardTitle className="flex items-center space-x-4">
            <BsGoogle className="text-2xl text-blue-500" />
            <span>Lead Software Engineer at Google</span>
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 lg:ml-auto">
            Nov 2019 - Present
          </CardDescription>
        </CardHeader>
        <CardContent>
          As a Senior Software Engineer at Google, I played a pivotal role in
          developing innovative solutions for Google&apos;s core search
          algorithms. Collaborating with a dynamic team of engineers, I
          contributed to the enhancement of search accuracy and efficiency,
          optimizing user experiences for millions of users worldwide.
        </CardContent>
      </Card>

      <Card className="mb-6 bg-muted">
        <CardHeader className="flex flex-col lg:flex-row">
          <CardTitle className="flex items-center space-x-4">
            <BsYoutube className="text-2xl text-red-500" />
            <span>Software Engineer at YouTube</span>
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 lg:ml-auto">
            Jan 2017 - Oct 2019
          </CardDescription>
        </CardHeader>
        <CardContent>
          At YouTube, I served as a Software Engineer, focusing on the design
          and implementation of backend systems for the social media
          giant&apos;s dynamic platform. Working on projects that involved
          large-scale data processing and user engagement features, I leveraged
          my expertise to ensure seamless functionality and scalability.
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col lg:flex-row">
          <CardTitle className="flex items-center space-x-4">
            <BsApple className="text-2xl text-gray-800" />
            <span>Junior Software Engineer at Apple</span>
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 lg:ml-auto">
            Jan 2016 - Dec 2017
          </CardDescription>
        </CardHeader>
        <CardContent>
          During my tenure at Apple, I held the role of Software Architect,
          where I played a key role in shaping the architecture of
          mission-critical software projects. Responsible for designing scalable
          and efficient systems, I provided technical leadership to a
          cross-functional team.
        </CardContent>
      </Card>
    </section>
  );
}