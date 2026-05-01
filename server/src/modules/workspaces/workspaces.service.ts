import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkspaceDTO } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Workspace } from './schemas/workspace.schema';
import { Model } from 'mongoose';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectModel(Workspace.name) private workspaceModel: Model<Workspace>,
  ) {}
  async create(
    userId: string,
    createWorkspaceDto: CreateWorkspaceDTO,
  ): Promise<Workspace> {
    const workspace = new this.workspaceModel({
      ...createWorkspaceDto,
      ownerId: userId,
      members: [{ userId: userId, role: 'OWNER', joinedAt: new Date() }],
    });

    return await workspace.save();
  }

  async findAll(): Promise<Workspace[]> {
    const workspace = await this.workspaceModel.find();
    if (!workspace) {
      throw new NotFoundException('not found');
    }
    return workspace;
  }

  async findOne(id: string): Promise<Workspace> {
    const workspace = await this.workspaceModel.findById(id);
    if (!workspace) {
      console.log(workspace);
      throw new NotFoundException('not found');
    }
    return workspace;
  }

  async update(
    id: string,
    updateWorkspaceDto: UpdateWorkspaceDto,
  ): Promise<Workspace> {
    const workspace = await this.workspaceModel.findByIdAndUpdate(
      id,
      updateWorkspaceDto,
      { returnDocument: 'after' },
    );
    if (!workspace) {
      throw new NotFoundException('not found');
    }
    return workspace;
  }

  async remove(id: string): Promise<Workspace> {
    const workspace = await this.workspaceModel.findByIdAndDelete(id);
    if (!workspace) {
      throw new NotFoundException('not found');
    }

    return workspace;
  }
}
