import React, { useState } from 'react';

const CreationModalComponent = ({ onClose }: { onClose: () => void }) => {
    const [backgroundModal, useBackgroundModal] = useState(1);
    const backgroundClassWhite = `box h-8 bg-white rounded-lg border border-black ${backgroundModal === 1 ? 'outline-1 outline-gray' : ''}`;
    const backgroundClassBlue = `box h-8 bg-blue-500 rounded-lg border border-black ${backgroundModal === 2 ? 'outline-1 outline-gray' : ''}`;
    const backgroundClassGreen = `box h-8 bg-green-500 rounded-lg border border-black ${backgroundModal === 3 ? 'outline-1 outline-gray' : ''}`;
    const backgroundClassRed = `box h-8 bg-red-500 rounded-lg border border-black ${backgroundModal === 4 ? 'outline-1 outline-gray' : ''}`;
    function submit() {
        onClose();
    }
    return (
        <div className=" bg-[#2c2c2e] text-[#a9abaf] rounded-lg absolute -top-8/12 -right-76 z-10 w-75 max-h-100 flex flex-col gap-3 ">
            <div className="w-full flex justify-end px-2 pt-2 ">
                <button
                    className="text-white h-6 w-6 bg-[#24252800] hover:bg-[#e3e4f21f] justify-center items-center flex rounded-4xl "
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <fieldset className="w-full flex flex-col justify-center items-center gap-3 ">
                <span className="w-full px-4">Background</span>
                <div className="w-full grid grid-cols-4 gap-3 px-4 ">
                    <div
                        className={backgroundClassWhite}
                        onClick={() => useBackgroundModal(1)}
                    ></div>
                    <div
                        className={backgroundClassBlue}
                        onClick={() => useBackgroundModal(2)}
                    ></div>
                    <div
                        className={backgroundClassGreen}
                        onClick={() => useBackgroundModal(3)}
                    ></div>
                    <div
                        className={backgroundClassRed}
                        onClick={() => useBackgroundModal(4)}
                    ></div>
                </div>
            </fieldset>
            <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col justify-center items-center px-4 gap-3 mb-1 mx-0 ">
                    <label
                        className="w-full max-h-4 text-[#A9ABAF]"
                        htmlFor="title"
                    >
                        Board title
                    </label>
                    <input
                        className="px-3 py-2 max-h-36 w-full bg-[#242528]"
                        placeholder="Board"
                        defaultValue=""
                        id="title"
                    />
                </div>
                <div className="flex flex-col px-4 pb-4 gap-3 justify-center items-center ">
                    <label
                        className="w-full max-h-4 text-[#A9ABAF]"
                        htmlFor="visibility"
                    >
                        Visibility
                    </label>
                    <select
                        className=" w-full  px-3 py-2 text-[#a9ABAF] "
                        defaultValue={'private'}
                        id="visibility"
                    >
                        <option value="private">Private</option>
                        <option value="workspace">Workspace</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <div className="px-4 pb-3" onClick={submit}>
                    <button className="w-full py-1 bg-[rgb(102,157,241)] hover:bg-[rgb(143,184,246)] active:bg-[rgb(173,203,251)] text-[rgb(31,31,33)] rounded-lg ">
                        <span className="text-[14px] font-medium">Create</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreationModalComponent;
