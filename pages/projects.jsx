import CardsContainer from "../components/index/CardsContainer.jsx";
const Projects = () => {
  return (
    <>
      <div className="flex justify-center content-center text-center h-screen dark:bg-neutral-900 bg-neutral-300 transition duration-500">
        <div>
          <p>Featured projects</p>
          <CardsContainer />
          <p> Old projects</p>
        </div>
      </div>
    </>
  );
};
export default Projects;
