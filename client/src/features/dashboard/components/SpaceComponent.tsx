import { ROUTES } from '@navigation/routes/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

export interface IWorkspaceCardHeader {
    name: string;
    owner: string;
    icon: string;
}

const SpaceComponent = ({ spaces }: { spaces: IWorkspaceCardHeader }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-amber-950 flex justify-around content-around w-full "
            onClick={() => navigate(`${ROUTES.WORKSPACE}/${spaces.name}`)}
        >
            <img src={spaces.icon} />
            <div className="flex flex-col">
                <p className="primary">{spaces.name}</p>
                <p className="secondary">{spaces.owner}</p>
            </div>
        </div>
    );
};

export default SpaceComponent;
