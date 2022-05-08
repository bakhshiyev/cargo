import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Balance = () => {
    return (
        <Layout>
            <Card className="font-bold text-center bg-[#351dab] w-1/2 m-auto p-8">
                <h1>my current balance</h1>
                5.47&#8380;
                <Button>add balance</Button>
            </Card>
        </Layout>
    );
};

export default Balance;