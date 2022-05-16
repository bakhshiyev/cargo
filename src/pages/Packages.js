import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";

const Packages = () => {
    return (
        <Layout>
            <Card className="flex shadow-none mb-1">
                <p className="basis-1/4 text-center">Kompüter</p>
                <p className="basis-1/4 text-center">15.04.2022</p>
                <p className="basis-1/4 text-center">Trendyol</p>
                <p className="basis-1/4 text-center">3500&#8380;</p>
            </Card>
            <Card className="flex shadow-none">
                <p className="basis-1/4 text-center">tshirt</p>
                <p className="basis-1/4 text-center">07.01.2022</p>
                <p className="basis-1/4 text-center">Lacoste</p>
                <p className="basis-1/4 text-center">69.99&#8380;</p>
            </Card>
        </Layout>
    );
};

export default Packages;