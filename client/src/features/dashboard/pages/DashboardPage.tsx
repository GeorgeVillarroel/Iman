import React from 'react';
import * as Icons from '@global/assets/icon';
import WorkspacesComponent from '../components/WorkspacesComponent';

type Props = {};

const DATAMOCKUP = {
    watched: [
        {
            name: 'George Villarroel',
            icon: Icons.DefaultIcon0,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
        {
            name: 'George Test 1',
            icon: Icons.DefaultIcon1,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
        {
            name: 'Test 2 Villarroel',
            icon: Icons.DefaultIcon2,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
        {
            name: 'Testing 3',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
    ],
    spaces: [
        {
            name: 'George Villarroel',
            icon: Icons.DefaultIcon0,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
        {
            name: 'George Test 1',
            icon: Icons.DefaultIcon1,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
        {
            name: 'Test 2 Villarroel',
            icon: Icons.DefaultIcon2,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
        {
            name: 'Testing 3',
            icon: Icons.DefaultIcon3,
            owner: 'George Villarroel',
            visibility: 'Private',
        },
    ],
};

const DashboardPage = (props: Props) => {
    return (
        <div className="bg-black w-screen h-screen flex flex-col justify-between p-4 ">
            <section className="w-full h-36 bg-white "></section>
            <WorkspacesComponent
                heading="Recently watched"
                spaces={DATAMOCKUP.watched}
            />
            <WorkspacesComponent
                heading="All workspaces"
                spaces={DATAMOCKUP.spaces}
            />
        </div>
    );
};

export default DashboardPage;
