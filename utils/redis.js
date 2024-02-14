import { createClient } from 'redis';

class RedisClient {
  /**
   * creates a new RedisClient instance
   */
  constructor() {
    this.client = createClient();
    this.connection = true;
    this.client.on('error', (err) => {
      console.log(err);
      this.connection = false;
    });
    this.client.on('connect', () => {
      this.connection = true;
    });
  }

  /*
   * check to see if the redis connection is a success
   */
  isAlive() {
    return this.connection;
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.setex(key, duration, value, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  async del(key) {
    await this.client.del(key);
  }
}

export const redisClient = new RedisClient();
export default redisClient;