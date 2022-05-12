import Contact from "../components/home/Contact";
import News from "../components/home/News";
import Tariff from "../components/home/Tariff";
import Layout from "../components/layout/Layout";


const Home = () => {
    return (
        <Layout>
            <News />
            <Tariff />
            <Contact />
        </Layout>
    );
};

export default Home;