import Layout from "../component/Layout";

import Image from "next/image";

const Contact = () => {
    return <Layout title="Contact">
        <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
            <div className="mt-4">
                <p className="font-bold">Contact info</p>
            </div>
            <div className="flex justify-center mt-4">
                <Image
                    className="rounded-full"
                    width={60}
                    height={60}
                    src="/avatar.jpg"></Image>
            </div>
            <div className="mt-4">
                <p className="font-bold">Address</p>
                <p className="text-xs mt-2 text-gray-600">City-A</p>
                <p className="font-bold mt-3">E-mail</p>
                <p className="text-xs mt-2 text-gray-600">nanysh@gmail.com</p>
                <p className="font-bold mt-3">Phone</p>
                <p className="text-xs mt-2 text-gray-600">456-456-4566</p>

            </div>
            <div className="mt-6 flex justify-around">
            </div>
        </div>
    </Layout>
};

export default Contact;