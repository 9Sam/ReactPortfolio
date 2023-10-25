import { sectionClasses } from "../utils/themeClasses";
import Title from "./shared/Title";

const Experience = () => {
   return (
      <section
         id="experience"
         data-section
         className={`${sectionClasses} lg:mb-48`}
      >
         <Title title="Experience" />
      </section>
   );
};

export default Experience;