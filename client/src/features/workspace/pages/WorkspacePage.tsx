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
            name: 'Testing 3',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
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
            name: 'Testing 3',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
        },
    ],
};

const WorkspacesPage = (props: Props) => {
    return (
        <div className="bg-black w-screen h-screen flex flex-col justify-between p-4 ">
            <section className="w-full h-36 bg-white "></section>
            <BoardsComponent
                heading="Recently watched"
                boards={DATAMOCKUP.watched}
            />
            <BoardsComponent heading="All Boards" boards={DATAMOCKUP.boards} />
        </div>
    );
};

export default WorkspacesPage;
