import SidebarItems from "../components/SidebarItems";

const About = () => {
  return (
    <div className="flex flex-row">
      <SidebarItems activeClass="about" />
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
    </div>
  );
};

export default About;
