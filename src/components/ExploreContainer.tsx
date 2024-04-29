import "./ExploreContainer.css";
import Map from "./Map";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI <p className="italic underline">Components</p>
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
