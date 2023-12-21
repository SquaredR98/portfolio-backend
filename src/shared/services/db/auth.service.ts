import { Auth } from "@prisma/client";
import { dbClient } from "@root/database";
import { IAuthDocument } from "@auth/auth.interfaces";

export class AuthService {
  public async findUserByUsernameOrEmail(username?: string, email?: string): Promise<Auth | undefined | null> {
    let user;
    if (username) user = await dbClient.auth.findFirst({ where: { username } });
    if (email) user = await dbClient.auth.findFirst({ where: { email } });
    return user;
  }

  public async createAuth(data: IAuthDocument): Promise<void> { }
}