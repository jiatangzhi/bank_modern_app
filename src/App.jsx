import styles from './style';
import {
  Navbar,
  Hero,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Stats,
  Testimonials
} from "./components";



const App = () => {
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <Hero/>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      Stats Business Billing CardDeal Testimonials Clients CTA Footer
    </div>
  </div>;
};

export default App
