import {Container} from "layout/Container";
import AdvantagesList from "components/Advantages/AdvantagesList";
import {Promo} from "components/Promo";

import './Home.scss';
export const Home = () => {

  return (
    <Container>
      <div className="home">
        <Promo />
        <AdvantagesList />
      </div>
    </Container>
  );
}
