import React from 'react';

const BoardCreateComponent = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            className="hover:bg-[#e3e4f21f] bg-[#ceced912] text-[#a9abaf] hover:text-[#cecfd2] flex justify-center items-center w-full h-full min-h-27 rounded-lg max-h-30.75 "
            onClick={onClick}
        >
            <div className="w-full flex flex-col justify-center items-center ">
                <span className="">Create new board</span>
                <small className="">1 remaining</small>
            </div>
        </div>
    );
};

export default BoardCreateComponent;
