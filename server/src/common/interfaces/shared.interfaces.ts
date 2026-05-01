import { Types } from 'mongoose';

// --- ENUMS ---
export enum ERole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  GUEST = 'GUEST', // "Guest" who can only read
}

export enum EVisibility {
  PRIVATE = 'PRIVATE',
  WORKSPACE = 'WORKSPACE', // Visible to all workspace members
  PUBLIC = 'PUBLIC', // Indexed by Google (SEO)
}

export enum EAction {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

// --- SHARED INTERFACES ---

/**
 * T = ID Type (default string)
 * U = User Type (default string ID, but can be User object)
 */
export interface IAttachment<T = string, U = T> {
  id: string; // Unique ID for the file itself
  url: string;
  name: string;
  type: string; // 'image/png', 'application/pdf'
  uploadedBy: U;
  uploadedAt: Date;
}

export interface IChecklistItem {
  id: string; // Generated via UUID/ObjectId
  text: string;
  isChecked: boolean;
}
