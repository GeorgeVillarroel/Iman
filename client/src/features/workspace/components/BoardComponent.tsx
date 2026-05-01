import { ROUTES } from '@navigation/routes/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IBoardCardHeader {
    name: string;
    owner: string;
    icon: string;
}

const BoardComponent = ({ board }: { board: IBoardCardHeader }) => {
    const navigate = useNavigate();

    return (
        <div
            className=" bg-[#1f1f21] shadow-[0_0_0_1px_rgba(0,0,0,0),0_1px_1px_0_rgba(1,4,4,0.5),0_0_1px_0_rgba(1,4,4,0.5)] flex flex-col w-full rounded-lg overflow-hidden "
            onClick={() => navigate(`${ROUTES.WORKSPACE}/${board.name}`)}
        >
            <div className="aspect-video w-full h-18 flex flex-col justify-center ">
                <img className="w-full h-18 object-cover " src={board.icon} />
            </div>
            <div className="p-2">
                <p className="p-0 min-h-5 max-h-10 leading-tight line-clamp-2 bg-[#1f1f21] text-[#CECFD2] font-play text-sm font-normal ">
                    {board.name}
                </p>
            </div>
        </div>
    );
};

export default BoardComponent;
