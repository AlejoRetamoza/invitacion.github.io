import Header from '../components/Header';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';

function App() {
  const path = window.location.href;
  const phoneNumber = path.slice(path.indexOf('t=') + 2, path.indexOf('t=') + 3) === 'a' ? '+5491158679303' : '+5491132846932';

  localStorage.setItem('tel', phoneNumber)
  return (
    <> 
    <Header></Header>
    <StepOne></StepOne>
    <StepTwo></StepTwo>
    <StepThree></StepThree>
    </>
  );
}

export default App;
