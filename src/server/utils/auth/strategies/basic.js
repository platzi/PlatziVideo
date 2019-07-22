import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import boom from '@hapi/boom';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

passport.use(
  new BasicStrategy(async (email, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${process.env.API_URL}/api/auth/sign-in`,
        method: 'post',
        auth: {
          password,
          username: email,
        },
        data: {
          apiKeyToken: process.env.API_KEY_TOKEN,
        },
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    } catch (error) {
      return cb(error);
    }
  }),
);
