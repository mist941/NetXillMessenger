import {Model, Document} from "mongoose";
import {User, UserDTO} from "../interfaces/User";
import {randomBytes} from "crypto";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import config from "../config";

export default class AuthService {
  constructor(
    private userModel: Model<User & Document>
  ) {
  }

  public async register(userDTO: UserDTO): Promise<{ user: User; token: string }> {
    try {
      const salt = randomBytes(32);
      const hashedPassword = await argon2.hash(userDTO.password, {salt});
      const userRecord = await this.userModel.create({
        ...userDTO,
        salt: salt.toString('hex'),
        password: hashedPassword,
      });
      const token = this.generateToken(userRecord);
      if (!userRecord) {
        throw new Error('User cannot be created');
      }
      const user = userRecord.toObject();
      Reflect.deleteProperty(user, 'password');
      Reflect.deleteProperty(user, 'salt');
      return { user, token };
    } catch (err) {
      throw err;
    }
  }

  public async signIn(email: string, password: string): Promise<{ user: User; token: string }> {
    const userRecord = await this.userModel.findOne({ email });
    if (!userRecord) {
      throw new Error('User not registered');
    }
    const validPassword = await argon2.verify(userRecord.password, password);
    if (validPassword) {
      const token = this.generateToken(userRecord);
      const user = userRecord.toObject();
      Reflect.deleteProperty(user, 'password');
      Reflect.deleteProperty(user, 'salt');
      return { user, token };
    } else {
      throw new Error('Invalid Password');
    }
  }

  private generateToken(user: any) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign(
      {
        id: user.id,
        userName: user.userName,
        createdAt: exp.getTime() / 1000,
      },
      config.JWT_SECRET
    );
  }
}
