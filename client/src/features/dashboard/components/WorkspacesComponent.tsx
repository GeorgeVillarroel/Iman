import React from 'react';
import SpaceComponent, { type IWorkspaceCardHeader } from './SpaceComponent';
import SpaceDisabledComponent from './SpaceDisabledComponent';
import SpaceCreateComponent from './SpaceCreateComponent';

interface Props {
    heading?: String;
    spaces?: IWorkspaceCardHeader[];
    onClick?: () => void;
}

const WorkspacesComponent = ({ heading, spaces }: Props) => {
    return (
        <section className="w-full h-52 bg-white flex flex-col  ">
            <h3 className="w-full text-black">{heading}</h3>

            <div className="container w-full flex justify-between gap-1">
                {spaces ? (
                    spaces.map((space: IWorkspaceCardHeader) => (
                        <SpaceComponent spaces={space} />
                    ))
                ) : (
                    <SpaceDisabledComponent />
                )}
                <SpaceCreateComponent />
            </div>
        </section>
    );
};

export default WorkspacesComponent;
