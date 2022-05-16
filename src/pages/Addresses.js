import { useState } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";

const Addresses = () => {
    const [isTurkeySelected, setIsTurkeySelected] = useState(true);

    return (
        <Layout>
            <Card>
                <div className="flex text-center w-3/4 m-auto">
                    <div className={`basis-1/2 p-2 font-bold transition-colors cursor-pointer ${isTurkeySelected ? 'bg-yellow-500' : ''}`} onClick={() => { setIsTurkeySelected(true); }}>Turkey</div>
                    <div className={`basis-1/2 p-2 font-bold transition-colors cursor-pointer ${!isTurkeySelected ? 'bg-yellow-500' : ''}`} onClick={() => { setIsTurkeySelected(false); }}>America</div>
                </div>
                <div className="w-3/4 m-auto">
                    {isTurkeySelected &&
                        <Card className="flex flex-wrap">
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">İlçe / Semt</h3>
                                <p className="font-semibold">Esenyurt</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">İl (Şehir)</h3>
                                <p className="font-semibold">İstanbul</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">Adres başlığı</h3>
                                <p className="font-semibold">MyCargo Lojistik</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">Mahalle</h3>
                                <p className="font-semibold">Güzelyurt mahallesi</p>
                            </Card>
                        </Card>}
                    {!isTurkeySelected &&
                        <Card className="flex flex-wrap">
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">City:</h3>
                                <p className="font-semibold">Wilmington</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">State/Province/Region:</h3>
                                <p className="font-semibold">DE</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">Address Line1:</h3>
                                <p className="font-semibold"> 4 LEWIS CIRCLE</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">ZIP code</h3>
                                <p className="font-semibold">19555</p>
                            </Card>
                        </Card>
                    }
                </div>
            </Card>
        </Layout>
    );
};

export default Addresses;