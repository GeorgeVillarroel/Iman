import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from '../schemas/user.schema';
import { ERRORS } from 'src/common/constants/error.constants';

export const ApiUsers = {
  Create: () =>
    applyDecorators(
      ApiOperation({ summary: 'Add a new user' }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  UpdateUser: () =>
    applyDecorators(
      ApiOperation({
        summary:
          'Update profile fields (name, profile pic, visibility and company )',
      }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  UpdatePw: () =>
    applyDecorators(
      ApiOperation({ summary: 'Update the user password' }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  Enable2FA: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Enable the 2FA authentication for the current user',
      }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  Disable2FA: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Disable the 2FA authentication for the current user',
      }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({
        description: 'User not found',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  FindByApiKey: () =>
    applyDecorators(
      ApiOperation({ summary: 'Find user by introducing its apikey' }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  FindAll: () =>
    applyDecorators(
      ApiOperation({ summary: 'Find all users ' }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  FindOne: () =>
    applyDecorators(
      ApiOperation({ summary: 'Find one user by Id' }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
  Remove: () =>
    applyDecorators(
      ApiOperation({ summary: 'Delete user by Id' }),
      ApiCreatedResponse({ type: User }),
      ApiBadRequestResponse({ description: 'user:invalid' }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
        example: { value: { message: ERRORS.USER.AUTH.BAD_REQUEST } },
      }),
    ),
};
