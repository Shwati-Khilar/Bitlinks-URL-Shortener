// import Image from "next/image";

// export default function About() {
//     return (
//         <div className="max-w-3xl mx-auto py-16 px-4">
//             <div className="flex flex-col md:flex-row items-center gap-8 bg-white bg-opacity-70 shadow-md rounded-lg p-8">
//                 {/* Illustrative Image Section */}
//                 <div className="flex-shrink-0">
//                     <img
//                     src="/bitlinks-fun.png"
//                     alt="Bitlinks fun "
//                     width={400}
//                     height={400}
//                     className="rounded-lg shadow"
//                 />
//                 </div>

//                 {/* Text Content */}
//                 <div className="max-w-lg w-full">
//                     <h1 className="text-4xl font-extrabold mb-4 text-purple-700">About Bitlinks</h1>
//                     <p className="mb-3 text-lg">
//                         <b>Bitlinks</b> is a <span className="text-purple-700 font-medium">privacy-focused</span> URL shortener built to deliver fast and reliable link shortening <span className="font-semibold">without tracking</span> or requiring sign ups.
//                     </p>
//                     <p className="mb-2 text-gray-700">
//                         Our mission: <span className="italic">make sharing links safe, simple, and private</span>.
//                     </p>
//                     <ul className="list-inside list-disc ml-2 text-gray-700 space-y-2">
//                         <li>No account needed — start shortening right away!</li>
//                         <li>No tracking: your usage is completely anonymous.</li>
//                         <li>Fast and reliable link redirection.</li>
//                     </ul>
//                     <p className="mt-4 text-gray-600">
//                         All generated links are anonymous unless you choose to share extra details. <b>Your privacy</b> is our top priority!
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function About() {
    return (
        <div className="max-w-3xl mx-auto py-16 px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white bg-opacity-70 shadow-md rounded-lg p-8">
                {/* Illustrative Image Section */}
                <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                    <img
                        src="/bitlinks-fun.png"
                        alt="Bitlinks fun"
                        width={300}
                        height={300}
                        className="rounded-lg shadow"
                    />
                </div>

                {/* Text Content */}
                <div className="max-w-lg w-full">
                    <h1 className="text-4xl font-extrabold mb-4 text-purple-700">About Bitlinks</h1>
                    <p className="mb-3 text-lg">
                        <b>Bitlinks</b> is a <span className="text-purple-700 font-medium">privacy-focused</span> URL shortener built to deliver fast and reliable link shortening <span className="font-semibold">without tracking</span> or requiring sign ups.
                    </p>
                    <p className="mb-2 text-gray-700">
                        Our mission: <span className="italic">make sharing links safe, simple, and private</span>.
                    </p>
                    <ul className="list-inside list-disc ml-2 text-gray-700 space-y-2">
                        <li>No account needed — start shortening right away!</li>
                        <li>No tracking: your usage is completely anonymous.</li>
                        <li>Fast and reliable link redirection.</li>
                    </ul>
                    <p className="mt-4 text-gray-600">
                        All generated links are anonymous unless you choose to share extra details. <b>Your privacy</b> is our top priority!
                    </p>
                </div>
            </div>
        </div>
    );
}
