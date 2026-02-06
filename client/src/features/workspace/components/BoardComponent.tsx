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
            className="bg-amber-950 h-40 flex flex-col justify-around content-around w-full "
            onClick={() => navigate(`${ROUTES.WORKSPACE}/${board.name}`)}
        >
            <img className="h-32" src={board.icon} />
            <p className="h-8 primary">{board.name}</p>
        </div>
    );
};

export default BoardComponent;
