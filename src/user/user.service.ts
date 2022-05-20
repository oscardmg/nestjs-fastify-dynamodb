// src/user/user.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';


let options = {};
if (process.env.IS_OFFLINE === 'true') {
  options = {
    ...{
      region: 'localhost',
      endpoint: process.env.DYNAMODB_ENDPOINT
    }
  };
} else {
  options = {
    region: process.env.AWS_REGION
  };
}

const dynamoDB = new AWS.DynamoDB.DocumentClient(options);

@Injectable()
export class UserService {
  async createUser (dto: any): Promise<any> {
    const user = {
      id: uuid(),
      ...dto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    try {
      await dynamoDB
        .put({
          TableName: process.env.USERS_TABLE_NAME,
          Item: user,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return user;
  }

  async getUserById (id: string): Promise<any> {
    let user;
    try {
      const result = await dynamoDB
        .get({
          TableName: process.env.USERS_TABLE_NAME,
          Key: { id: id },
        })
        .promise();
      user = result.Item;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return user;
  }
}
