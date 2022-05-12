import Card from "../ui/Card";

const News = () => {
    return (
        <Card>
            <h2 className="text-center font-semibold">News</h2>
            <div className="flex flex-wrap">
                <Card className='basis-1/4'>Sales</Card>
                <Card className='basis-1/4'>New Tariff Packages</Card>
                <Card className='basis-1/4'>Bonuses</Card>
                <Card className='basis-1/4'>Our Turkey address is changed</Card>
                <Card className='basis-1/4'>About SmartCustoms App</Card>
            </div>
        </Card>
    );
};

export default News;