import React from 'react';
import * as Icons from '@global/assets/icon';
import BoardsComponent from '../components/BoardsComponent';

type Props = {};

const DATAMOCKUP = {
    watched: [
        {
            name: 'George Villarroel',
            icon: Icons.DefaultIcon0,
            owner: 'George Villarroel',
            color: 'white',
        },
        {
            name: 'George Test 1',
            icon: Icons.DefaultIcon1,
            owner: 'George Villarroel',
            color: 'blue',
        },
        {
            name: 'Test 2 Villarroel',
            icon: Icons.DefaultIcon2,
            owner: 'George Villarroel',
            color: 'green',
        },
        {
            name: 'Testing 3',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
            color: 'red',
        },
    ],
    boards: [
        {
            name: 'George Villarroel',
            icon: Icons.DefaultIcon0,
            owner: 'George Villarroel',
        },
        {
            name: 'George Test 1',
            icon: Icons.DefaultIcon1,
            owner: 'George Villarroel',
        },
        {
            name: 'Test 2 Villarroel',
            icon: Icons.DefaultIcon2,
            owner: 'George Villarroel',
        },
        {
            name: 'Testing 3 villarroelini assasino capucinni testing 3 villarroelini assasino capucinni ',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
        },
        /* {
            name: 'Testing 3 villarroelini assasino capucinni testing 3 villarroelini assasino capucinni ',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
        }, */
    ],
};

const WorkspacesPage = (props: Props) => {
    return (
        <div className="bg-[#1f1f21] min-h-screen w-full flex flex-col p-8 justify-start items-center gap-4 overflow-y-auto ">
            <section className=" p-8 h-48 text-white min-w-60 w-full max-w-229 rounded-xl flex justify-start items-center gap-3 ">
                <div className="w-15 h-15 rounded-md bg-[#00000000] border-none ">
                    <img
                        className="h-full w-15 bg-[#43bc89] active:outline-2 active:outline-white rounded-md border-none "
                        src="#"
                    />
                </div>
                <div className="w-full flex flex-col justify-center ">
                    <h2 className="text-xl font-bold text-[#CECFD2] ">
                        Trello Workspace
                    </h2>
                    <p className="text-xs text-[#A9ABAF]">Private</p>
                </div>
            </section>
            <div className="w-full h-px min-w-60 max-w-229 bg-[#37373a] "></div>
            <div className="flex flex-col gap-12 min-w-60 w-full max-w-229">
                <BoardsComponent
                    heading="Recently watched"
                    boards={DATAMOCKUP.watched}
                />
                <BoardsComponent
                    heading="All Boards"
                    boards={DATAMOCKUP.boards}
                />
            </div>
        </div>
    );
};

export default WorkspacesPage;
