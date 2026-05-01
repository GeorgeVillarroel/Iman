import type { IWorkspaceCardHeader } from '@features/dashboard/components/SpaceComponent';
import React, { useState } from 'react';
import BoardComponent from './BoardComponent';
import BoardCreateComponent from './BoardCreateComponent';
import BoardEmptyComponent from './BoardEmptyComponent';
import CreationModalComponent from './CreationModalComponent';
import { createPortal } from 'react-dom';

interface Props {
    heading?: String;
    boards?: IWorkspaceCardHeader[];
    onClick?: () => void;
}

const BoardsComponent = ({ heading, boards }: Props) => {
    const [creationModal, setCreationModal] = useState(false);
    return (
        <section className="@container w-full min-h-52 flex flex-col gap-4 ">
            <div className="w-full h-7.5 center py-1 px-2 flex items-center justify-center ">
                <h3 className=" w-full h-full font-bold font-play text-[16px] text-[#CECFD2]">
                    {heading}
                </h3>
            </div>

            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(48%,1fr))] @[300px]:grid-cols-[repeat(auto-fill,minmax(31.33%,1fr))] @[500px]:grid-cols-[repeat(auto-fill,minmax(23%,1fr))] justify-between gap-y-5 gap-x-3">
                {boards ? (
                    boards.map((board: IWorkspaceCardHeader, i: number) => (
                        <BoardComponent board={board} key={i} />
                    ))
                ) : (
                    <BoardEmptyComponent />
                )}
                <div className="relative w-full h-full overflow-visible">
                    <BoardCreateComponent
                        onClick={() => setCreationModal(true)}
                    />
                    {creationModal && (
                        <CreationModalComponent
                            onClose={() => setCreationModal(false)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default BoardsComponent;
