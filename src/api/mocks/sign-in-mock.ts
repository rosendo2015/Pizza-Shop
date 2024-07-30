import { http, HttpResponse } from 'msw'

import { SingInBody } from '../sign-in'

export const signInMock = http.post<never, SingInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@exemple.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
