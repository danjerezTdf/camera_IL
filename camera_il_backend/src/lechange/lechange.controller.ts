import { Controller, Get } from '@nestjs/common';
import * as crypto from 'crypto';

@Controller('lechange')
export class LechangeController {
  @Get('accessToken')
  async getAccessToken(): Promise<any> {
    const url = 'https://openapi.lechange.cn:443/openapi/accessToken';
    const appId = 'lc938a8730c6154020'; //  appId
    const appSecret = '21b2f7c92e624c2c964081ca671832'; //  appSecret

    // Obtener el tiempo UTC actual
    const time = Math.floor(new Date().getTime() / 1000);

    // Generar un nonce aleatorio
    const nonce = crypto.randomBytes(16).toString('hex');

    // Construir el objeto de firma
    const signStr = `time:${time},nonce:${nonce},appSecret:${appSecret}`;
    const sign = crypto.createHash('md5').update(signStr).digest('hex');

    // Configurar los datos de la solicitud
    const data = {
      system: {
        ver: '1.0',
        sign,
        appId,
        time,
        nonce,
      },
      params: {}, // parámetros de solicitud si es necesario
      id: '88',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al obtener el accessToken');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error('Error al obtener el accessToken');
    }
  }
}

