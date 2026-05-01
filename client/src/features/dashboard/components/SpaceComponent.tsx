import { ROUTES } from '@navigation/routes/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

export interface IWorkspaceCardHeader {
    name: string;
    owner: string;
    icon: string;
    visibility: string;
}

const SpaceComponent = ({ spaces }: { spaces: IWorkspaceCardHeader }) => {
    const navigate = useNavigate();

    return (
        <div
            className=" p-8 h-48 text-white min-w-60 w-full max-w-229 rounded-xl flex justify-start items-center gap-3 "
            onClick={() => navigate(`${ROUTES.WORKSPACE}/${spaces.name}`)}
        >
            <div className="w-15 h-15 rounded-md bg-[#00000000] border-none ">
                <img
                    className="h-full min-w-15 bg-[#43bc89] active:outline-2 active:outline-white rounded-md border-none "
                    src={spaces.icon}
                />
            </div>
            <div className="w-full flex flex-col justify-center ">
                <h2 className="text-xl font-bold text-[#CECFD2] ">
                    {spaces.name}
                </h2>
                <p className="text-xs text-[#A9ABAF]">{spaces.visibility}</p>
            </div>
        </div>
    );
};

export default SpaceComponent;
