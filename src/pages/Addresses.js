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
                        <pre>
                            Emmanuel Macron
                            +994 50 487 5411
                            Kadikoy
                            Istanbul
                            Yalova
                        </pre>}
                    {!isTurkeySelected &&
                        <pre>
                            Emmanuel Macron
                            +994 50 487 5411
                            Wilmington
                            Deleware
                            Boston
                        </pre>}
                </div>
            </Card>

        </Layout>
    );
};

export default Addresses;