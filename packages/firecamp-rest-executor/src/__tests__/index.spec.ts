import { ERestBodyTypes, EHttpMethod, ERequestTypes } from '@firecamp/types';
import RestExecutor from '../';

describe('rest executor', () => {
  it('should send response successfully', async () => {
    const request = new RestExecutor();

    const response = await request.send({
      url: {
        raw: 'https://jsonplaceholder.typicode.com/posts',
        queryParams: [
          {
            key: 'id',
            value: '1',
          },
        ],
        pathParams: [],
      },
      method: EHttpMethod.GET,
      __meta: {
        name: '',
        activeBodyType: ERestBodyTypes.NoBody,
        type: ERequestTypes.Rest,
        version: '2.0.0',
      },
      __ref: {
        id: '',
        collectionId: '',
      },
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should send body', async () => {
    const request = new RestExecutor();

    const response = await request.send({
      url: {
        raw: 'https://jsonplaceholder.typicode.com/posts',
      },
      headers: [
        {
          key: 'content-type',
          value: 'application/json',
        },
      ],
      method: EHttpMethod.POST,
      body: {
        'application/json': {
          value: JSON.stringify({ msg: 'Hi' }),
        },
      },
      __meta: {
        activeBodyType: ERestBodyTypes.Json,
        name: '',
        type: ERequestTypes.Rest,
        version: '2.0.0',
      },
      __ref: {
        id: '',
        collectionId: '',
      },
    });

    expect(response.statusCode).toEqual(201);
    expect(response.data).toEqual(
      JSON.stringify({ msg: 'Hi', id: 101 }, null, 2)
    );
  });

  it('should allow to connect secure server', async () => {
    const request = new RestExecutor();

    const response = await request.send({
      url: {
        raw: 'https://localhost:3002/api/http/methods',
      },
      method: EHttpMethod.GET,
      config: {
        rejectUnauthorized: false,
      },
      __meta: {
        name: '',
        activeBodyType: ERestBodyTypes.NoBody,
        type: ERequestTypes.Rest,
        version: '2.0.0',
      },
      __ref: {
        id: '',
        collectionId: '',
      },
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should not allow to connect secure server', async () => {
    const request = new RestExecutor();

    await request
      .send({
        url: {
          raw: 'https://localhost:3002/api/http/methods',
        },
        method: EHttpMethod.GET,
        config: {
          rejectUnauthorized: true,
        },
        __meta: {
          activeBodyType: ERestBodyTypes.NoBody,
          name: '',
          type: ERequestTypes.Rest,
          version: '2.0.0',
        },
        __ref: {
          id: '',
          collectionId: '',
        },
      })
      .catch((error) => {
        expect(error.message).toEqual('certificate has expired');
      });
  });
});
