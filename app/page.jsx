import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Header />
      <div className="mt-5">
        <h2 className="subtitle">Projects</h2>
        <Tabs defaultValue="fullstack" className="max-w-[400px]">
          <TabsList>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Front-end</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>
          <TabsContent value="fullstack">
            All fullstack projects will be listed here.
          </TabsContent>
          <TabsContent value="frontend">
            All front-end projects will be listed here.
          </TabsContent>
          <TabsContent value="backend">
            All back-end projects will be listed here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
