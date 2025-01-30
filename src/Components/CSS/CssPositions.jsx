import React from "react";
// import laptopwork from "../assets/images/laptopwork.jpg";

const CssPositions = () => {
    return (
        <div className="w-full h-[2000px]">
            <div className="parent bg-gray-400 ">
                <div className="child-one w-96 h-52 bg-red-800 p-10">
                    Child one
                </div>

                <div className="child-one w-96 h-52 bg-green-800 p-10">
                    Child two
                </div>

                <div className="child-one w-96 h-52 bg-blue-800 p-10">
                    Child three
                </div>
            </div>

            {/* Learn position: sticky */}
            {/* <div className="image w-screen">
                <img src={laptopwork} alt="Laptop" />
            </div>
            <div
                className="nav flex justify-around items-center h-10  w-screen bg-slate-900
                 text-white text-2xl font-bold sticky top-0"
            >
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <br />
            <div className=" w-screen flex justify-center items-center">
                <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div> */}

            {/* position: sticky with multiple sticky elements */}
            {/* <div className="w-screen">
                <div className="list-group">
                    <div className="list-header text-white text-2xl p-5 font-bold bg-red-900 pl-10">
                        A
                    </div>
                    <div className="list-items pl-20">
                        <div className="p-5  bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                        <div className="p-5 bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                    </div>
                </div>

                <div className="list-group">
                    <div className="list-header text-white text-2xl p-5 font-bold bg-green-900 pl-10">
                        B
                    </div>
                    <div className="list-items pl-20">
                        <div className="p-5  bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                        <div className="p-5 bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                    </div>
                </div>

                <div className="list-group">
                    <div className="list-header text-white text-2xl p-5 font-bold bg-blue-900 pl-10">
                        C
                    </div>
                    <div className="list-items pl-20">
                        <div className="p-5  bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                        <div className="p-5 bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                    </div>
                </div>

                <div className="list-group">
                    <div className="list-header text-white text-2xl p-5 font-bold bg-orange-900 pl-10">
                        B
                    </div>
                    <div className="list-items pl-20">
                        <div className="p-5  bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                        <div className="p-5 bg-gray-300">List item</div>
                        <div className="p-5 bg-gray-400">List item</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CssPositions;
