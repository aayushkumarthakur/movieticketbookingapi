import { Injectable, Inject } from '@nestjs/common';
import { Users } from './user.entity';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from './../../config/jwtConfig';
//import { AccountsService } from './../accounts/accounts.service';
import crypto = require('crypto');
@Injectable()
export class UsersService { 
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof Users,
    //private accountsService: AccountsService,
  ) { }
  public async create(user: any): Promise<object> {
    const exists = await Users.findOne({ where: { Email: user.Email } });
    if (exists) {
      return{
        success: false,
        message: 'This Email Already exists.'
      }
    } else {
      user.Salt = crypto.randomBytes(128).toString('base64');
      user.Password = crypto.createHmac('sha256', user.Password + user.Salt).digest('hex');
      const newUser: any = await this.usersRepository.create<Users>(user);
      const jwtToken = jwt.sign({id: user.id, username: user.Username, email: user.Email}, process.env.JWT_KEY, jwtConfig);
      newUser.Token = jwtToken;
      if (newUser) {
        const response = {
          user: {
            id: newUser.id,
            username: newUser.Username.trim(),
            email: newUser.Email.trim(),
          },
          token: jwtToken,
          success: true,
        }
        return response;
      }
      return { 
        success: false,
        message: 'Creating new user went wrong.',
      }
    }  
  }
  public async login(credentials: any): Promise<object> {
    const user = await Users.findOne<Users>({
      where: { Username: credentials.Username },
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    if (!user) {
      return {
        success: false,
        message: 'User does not exist.'
      }
    }
    const inputPassword = crypto.createHmac('sha256', credentials.Password + user.Salt.trim()).digest('hex');
    const isPasswordCorrect = user.Password.trim() === inputPassword.trim();     

    if (!isPasswordCorrect) {
      return {
        success: false,
        message: 'Password is not correct.'
      }
    }
    //const accounts = await this.accountsService.getAccountsByUserId(user.id);
    const jwtToken = jwt.sign({ id: user.id, email: user.Email, username: user.Username }, process.env.JWT_KEY, jwtConfig);
    const response = {
      user: {
        id: user.id,
        username: user.Username.trim(),
        email: user.Email.trim(),
        //accounts,
      },
      token: jwtToken,
      success: true,
    }
    
    return response;
  }

  public async authenticate(id: number, token: string): Promise<any> {
    const user = await Users.findOne<Users>({
      where: { id : id}
    });
    
    const decodedToken = jwt.verify(token, process.env.JWT_KEY, jwtConfig);
    const isTokenValid = decodedToken.id === Number(id);
    if (!isTokenValid) {
      return {
        success: false,
        message: 'User is not authorized.'
      }
    };
    
    const response = {
      user: {
        id: user.id,
        email: user.Email.trim(),
        username: user.Username.trim(),
        //accounts: user.accounts,
      },
      token,
      success: true,
    }
    
    return response;
    
  }
}