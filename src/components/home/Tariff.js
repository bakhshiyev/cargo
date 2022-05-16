import { useState } from "react";
import Layout from "../layout/Layout";

import Card from "../ui/Card";

const Tariff = () => {
    const [isTurkeySelected, setIsTurkeySelected] = useState(true);

    return (
        <div>
            <h2 className="text-center font-bold text-3xl text-[#3d3c3c]">Tariflər</h2>
            <Card>
                <div className="flex text-center w-3/4 m-auto">
                    <div className={`basis-1/2 p-2 font-bold transition-colors cursor-pointer ${isTurkeySelected ? 'bg-yellow-500' : ''}`} onClick={() => { setIsTurkeySelected(true); }}>Turkey</div>
                    <div className={`basis-1/2 p-2 font-bold transition-colors cursor-pointer ${!isTurkeySelected ? 'bg-yellow-500' : ''}`} onClick={() => { setIsTurkeySelected(false); }}>America</div>
                </div>
                <div className="w-3/4 m-auto">
                    {isTurkeySelected &&
                        <Card className="flex flex-wrap">
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.001 kq-dan 0.10 kq-a qədər</h3>
                                <p className="font-semibold">0.7 USD</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.10 kq-dan 0.25 kq-a qədər</h3>
                                <p className="font-semibold">1.7 USD</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.25 kq-dan 0.50 kq-a qədər</h3>
                                <p className="font-semibold">2.7 USD</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.501 kq-dan 10 kq-a qədər (QRAMA-QRAM)</h3>
                                <p className="font-semibold">3.79 USD</p>
                            </Card>
                        </Card>}
                    {!isTurkeySelected &&
                        <Card className="flex flex-wrap">
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.001 kq-dan 0.10 kq-a qədər</h3>
                                <p className="font-semibold">0.99 USD</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.10 kq-dan 0.25 kq-a qədər</h3>
                                <p className="font-semibold">2.5 USD</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.25 kq-dan 0.50 kq-a qədər</h3>
                                <p className="font-semibold">3.99 USD</p>
                            </Card>
                            <Card className="basis-1/2 shadow-none">
                                <h3 className="text-[#2b2929]">0.501 kq-dan 10 kq-a qədər (QRAMA-QRAM)</h3>
                                <p className="font-semibold">5.49 USD</p>
                            </Card>
                        </Card>}
                </div>
            </Card>
        </div>
    );
};

export default Tariff;