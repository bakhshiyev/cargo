import Layout from "../layout/Layout";
import Card from "../ui/Card";

const News = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-3xl text-[#3d3c3c]">Xəbərlər</h2>
            <div className="flex flex-wrap">
                <Card className='basis-1/4'>Endirim</Card>
                <Card className='basis-1/4'>Yeni Tarif Paketləri</Card>
                <Card className='basis-1/4'>Bonuslar</Card>
                <Card className='basis-1/4'>Türkiyə ünvanımız dəyişdi</Card>
                <Card className='basis-1/4'>SmartCustoms aplikasiyası haqqında</Card>
            </div>
        </div>
    );
};

export default News;