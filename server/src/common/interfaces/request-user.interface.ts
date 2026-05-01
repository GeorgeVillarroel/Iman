import { UserHydratedDocument } from 'src/modules/users/schemas/user.schema';

export interface IRequestWithUser extends Request {
  user: UserHydratedDocument;
}
