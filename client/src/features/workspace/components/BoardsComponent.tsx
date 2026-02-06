import type { IWorkspaceCardHeader } from '@features/dashboard/components/SpaceComponent';
import React from 'react';
import BoardComponent from './BoardComponent';
import BoardCreateComponent from './BoardCreateComponent';
import BoardEmptyComponent from './BoardEmptyComponent';

interface Props {
    heading?: String;
    boards?: IWorkspaceCardHeader[];
    onClick?: () => void;
}

const BoardsComponent = ({ heading, boards }: Props) => {
    return (
        <section className="w-full h-52 bg-white flex flex-col  ">
            <h3 className="w-full text-black">{heading}</h3>

            <div className="container w-full h-40 flex justify-between gap-1">
                {boards ? (
                    boards.map((board: IWorkspaceCardHeader) => (
                        <BoardComponent board={board} />
                    ))
                ) : (
                    <BoardEmptyComponent />
                )}
                <BoardCreateComponent />
            </div>
        </section>
    );
};

export default BoardsComponent;
