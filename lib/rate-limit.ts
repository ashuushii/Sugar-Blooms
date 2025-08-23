import type { NextRequest } from 'next/server';
import { rateLimit } from 'express-rate-limit';

export async function rateLimitCheck(request: NextRequest) {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: Number(process.env.AUTH_MAX_ATTEMPTS) || 5,
    skipSuccessfulRequests: true,
  });

  try {
    await new Promise((resolve, reject) => {
      limiter(
        // Mock Express Request object
        {
          headers: request.headers,
          ip: request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              'unknown',
          method: request.method,
        } as any,
        // Mock Express Response object
        {
          setHeader: () => {},
          status: () => ({ json: () => {}, end: () => {} }),
        } as any,
        (error: any) => {
          if (error) reject(error);
          resolve(null);
        }
      );
    });
    return true;
  } catch (error) {
    return false;
  }
}
