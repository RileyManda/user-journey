import ChecklistSection from "../components/Checklist";
import LandingPageTitle from "../components/LandingPageTitle";
import GlobalContainer from "../components/GlobalContainer";

const LandingPage = () => {
  const handleStartApplication = () => {
    console.log("Start Application button clicked!");
  };

  return (
    <GlobalContainer>
      <LandingPageTitle
        title="Your Application Checklist"
        subtitle="Complete the following to submit an application"
        buttonText="Start Application"
        onButtonClick={handleStartApplication}
      />
      <ChecklistSection />
    </GlobalContainer>
  );
};

export default LandingPage;
