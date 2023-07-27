import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';

@Controller('lechange')
export class LechangeController {
  @Get('accessToken')
  async getAccessToken(): Promise<any> {
    const url = 'https://openapi.lechange.cn:443/openapi/accessToken';
    const appId = 'lc38501ea51a9f4799'; //  appId
    const appSecret = '************'; //  appSecret

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
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener el accessToken');
    }
  }
}
